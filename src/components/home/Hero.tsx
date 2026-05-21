import { useState, useEffect, useRef } from 'react';
import { useAuthStore } from '@store/authStore';
import { useChatStore } from '@store/chatStore';
import { unauthFlow, authFlow } from '@data/chatFlows';

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

export default function Hero() {
  const { isAuthenticated, user } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { sendMessage } = useChatStore();
  const flow = isAuthenticated ? authFlow : unauthFlow;
  const conversationStarters = flow[0]?.suggestions || [];

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || isLoading) return;

    const userMessage: Message = { text: searchQuery, sender: 'user' };
    setMessages([userMessage]);
    const query = searchQuery;
    setSearchQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      const agentText = res.ok ? data.text : 'I apologize, I had trouble processing that.';
      setMessages([userMessage, { text: agentText, sender: 'agent' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([userMessage, { text: 'Unable to connect to the assistant. Please try again.', sender: 'agent' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Big hero background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text contrast (accessibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
      </div>

      {/* Dotted glow pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Mouse-following glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(500px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(166, 25, 46, 0.12), rgba(0, 137, 150, 0.06), transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Headline */}
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

          {/* Chat/Search box */}
          <div className="mb-8 max-w-2xl">
            {messages.length > 0 && (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 mb-4 max-h-72 overflow-y-auto text-left shadow-xl border border-white/20">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`mb-3 last:mb-0 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-[85%] rounded-xl px-4 py-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-ada-red to-ada-red-bright text-white'
                        : 'bg-gray-100 text-ada-dark-gray'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-left">
                    <div className="inline-block bg-gray-100 rounded-xl px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-ada-red/60 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-ada-red/60 rounded-full animate-bounce [animation-delay:0.1s]" />
                        <div className="w-2 h-2 bg-ada-red/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSearch}>
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center px-5 py-4">
                  <svg className="w-5 h-5 text-ada-muted-gray flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask me anything about diabetes..."
                    disabled={isLoading}
                    className="flex-1 px-3 text-base md:text-lg text-ada-dark-gray placeholder-ada-muted-gray focus:outline-none bg-transparent disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-ada-red/30 transition-all disabled:opacity-50"
                    aria-label="Send"
                  >
                    {isLoading ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Conversation starters */}
          <div className="flex flex-wrap gap-2.5">
            {conversationStarters.map((starter) => (
              <button
                key={starter}
                onClick={() => sendMessage(starter)}
                className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/25 rounded-xl text-white text-sm font-medium hover:bg-white hover:text-ada-red hover:border-white transition-all duration-200"
              >
                {starter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
