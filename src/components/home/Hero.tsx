import { useState, useEffect, useRef } from 'react';
import { useAuthStore } from '@store/authStore';
import { unauthPaths, authPaths, ConversationPath } from '@data/chatFlows';

interface Message {
  text: string;
  sender: 'user' | 'agent';
  quickReplies?: string[];
}

export default function Hero() {
  const { isAuthenticated, user } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
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
    if (activePath && stepIndex < activePath.steps.length) {
      setMessages((prev) => prev.map((m) => ({ ...m, quickReplies: undefined })));
      playStep(activePath, stepIndex);
    } else {
      setMessages((prev) => [
        ...prev.map((m) => ({ ...m, quickReplies: undefined })),
        { text: reply, sender: 'user' as const },
      ]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your interest! To continue this conversation or access more personalized features, please sign in or contact us at 1-800-DIABETES.",
            sender: 'agent',
          },
        ]);
      }, 1000);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setActivePath(null);
    setStepIndex(0);
  };

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-white">
            {isAuthenticated && user ? (
              <>Welcome back, {user.name.split(' ')[0]}.</>
            ) : (
              <>How can we help?</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
            Your trusted source for diabetes information, support, and community.
          </p>

          {/* Chat panel — one single box that expands */}
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Messages area */}
              {messages.length > 0 && (
                <div className="max-h-[380px] overflow-y-auto p-5 space-y-3 border-b border-gray-100">
                  {messages.map((msg, idx) => (
                    <div key={idx}>
                      <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-br-md'
                            : 'bg-gray-100 text-ada-dark-gray rounded-bl-md'
                        }`}>
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
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
                </div>
              )}

              {/* Bottom area: starters OR restart */}
              <div className="p-4">
                {messages.length === 0 ? (
                  <>
                    <p className="text-sm text-ada-muted-gray mb-3">
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
                  </>
                ) : (
                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 text-sm font-medium text-ada-muted-gray hover:text-ada-red transition-colors"
                  >
                    ← Start a new conversation
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
