import { useState, useEffect, useRef } from 'react';
import { useAuthStore } from '@store/authStore';
import { unauthPaths, authPaths, ConversationPath } from '@data/chatFlows';
import FormattedText from '@components/common/FormattedText';

interface Message {
  text: string;
  sender: 'user' | 'agent';
  quickReplies?: string[];
}

export default function Hero() {
  const { isAuthenticated, user } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activePath, setActivePath] = useState<ConversationPath | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const paths = isAuthenticated ? authPaths : unauthPaths;

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const startConversation = (path: ConversationPath) => {
    setActivePath(path);
    setStepIndex(0);
    playStep(path, 0);
  };

  const playStep = (path: ConversationPath, idx: number) => {
    const step = path.steps[idx];
    if (!step) return;

    setMessages((prev) => [...prev, { text: step.user, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: step.agent, sender: 'agent', quickReplies: step.quickReplies },
      ]);
      setStepIndex(idx + 1);
    }, 1000 + Math.random() * 500);
  };

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => prev.map((m) => ({ ...m, quickReplies: undefined })));
    if (activePath && stepIndex < activePath.steps.length) {
      playStep(activePath, stepIndex);
    } else {
      sendFreeText(reply);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    const text = inputValue.trim();
    setInputValue('');

    const matchedPath = paths.find(
      (p) => p.starter.toLowerCase() === text.toLowerCase() ||
        p.steps[0]?.user.toLowerCase().includes(text.toLowerCase())
    );

    if (matchedPath && messages.length === 0) {
      startConversation(matchedPath);
    } else if (activePath && stepIndex < activePath.steps.length) {
      setMessages((prev) => prev.map((m) => ({ ...m, quickReplies: undefined })));
      playStep(activePath, stepIndex);
    } else {
      sendFreeText(text);
    }
  };

  const sendFreeText = (text: string) => {
    setMessages((prev) => [...prev, { text, sender: 'user' }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your question! For personalized assistance, please call us at 1-800-DIABETES or sign in to access our full support features.",
          sender: 'agent',
        },
      ]);
    }, 1000);
  };

  const handleReset = () => {
    setMessages([]);
    setActivePath(null);
    setStepIndex(0);
  };

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
      </div>

      {/* Dotted glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(500px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(166, 25, 46, 0.12), rgba(0, 137, 150, 0.06), transparent 60%)',
        }}
      />

      {/* Content — pinned to top with fixed padding, no centering */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            {isAuthenticated && user ? (
              <>Welcome back, {user.name.split(' ')[0]}.</>
            ) : (
              <>How can we help?</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            Your trusted source for diabetes information, support, and community.
          </p>

          {/* Chat panel — fixed structure, scrolls internally */}
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-[420px]">
              {/* Messages area — always present, scrolls */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3 min-h-0">
                {messages.length === 0 ? (
                  <div>
                    <p className="text-sm text-ada-muted-gray mb-4">
                      {isAuthenticated ? 'What can I help you with today?' : 'Welcome to the American Diabetes Association. What can I help you with?'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paths.map((path) => (
                        <button
                          key={path.starter}
                          onClick={() => startConversation(path)}
                          className="px-4 py-2 text-sm font-medium text-ada-red bg-ada-red/5 border border-ada-red/20 rounded-xl hover:bg-ada-red hover:text-white hover:border-ada-red transition-all"
                        >
                          {path.starter}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, idx) => (
                      <div key={idx}>
                        <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                            msg.sender === 'user'
                              ? 'bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-br-md'
                              : 'bg-gray-100 text-ada-dark-gray rounded-bl-md'
                          }`}>
                            {msg.sender === 'agent' ? (
                              <FormattedText text={msg.text} />
                            ) : (
                              <p className="text-sm leading-relaxed">{msg.text}</p>
                            )}
                          </div>
                        </div>
                        {msg.quickReplies && (
                          <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                            {msg.quickReplies.map((reply) => (
                              <button
                                key={reply}
                                onClick={() => handleQuickReply(reply)}
                                className="px-3 py-1.5 text-xs font-medium text-ada-red bg-ada-red/5 border border-ada-red/20 rounded-full hover:bg-ada-red/10 hover:border-ada-red/40 transition-all"
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 bg-ada-muted-gray rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-ada-muted-gray rounded-full animate-bounce [animation-delay:0.15s]" />
                            <div className="w-2 h-2 bg-ada-muted-gray rounded-full animate-bounce [animation-delay:0.3s]" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input bar — always at the bottom */}
              <div className="border-t border-gray-100 p-3 flex-shrink-0">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question..."
                    disabled={isTyping}
                    className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ada-red/20 focus:border-ada-red/30 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !inputValue.trim()}
                    className="w-10 h-10 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl flex items-center justify-center hover:shadow-md hover:shadow-ada-red/20 transition-all disabled:opacity-50 flex-shrink-0"
                    aria-label="Send"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
                {messages.length > 0 && (
                  <button
                    onClick={handleReset}
                    className="w-full mt-2 py-1.5 text-xs font-medium text-ada-muted-gray hover:text-ada-red transition-colors"
                  >
                    ← Start over
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
