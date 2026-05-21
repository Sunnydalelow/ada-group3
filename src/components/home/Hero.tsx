import { useState } from 'react';
import { useAuthStore } from '@store/authStore';

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

export default function Hero() {
  const { isAuthenticated, user } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const quickActions = isAuthenticated && user?.type === 'patient'
    ? [
        { label: 'Log blood sugar reading', link: '/dashboard' },
        { label: 'View my A1C history', link: '/dashboard' },
        { label: 'Find a diabetes educator', link: '/resources' },
      ]
    : isAuthenticated && user?.type === 'donor'
    ? [
        { label: 'Make a donation', link: '#' },
        { label: 'View my impact report', link: '/dashboard' },
        { label: 'Set up recurring giving', link: '/dashboard' },
      ]
    : isAuthenticated && user?.type === 'volunteer'
    ? [
        { label: 'Find volunteer events', link: '/dashboard' },
        { label: 'Log volunteer hours', link: '/dashboard' },
        { label: 'Access training materials', link: '/resources' },
      ]
    : [
        { label: 'Understanding diabetes', link: '/resources' },
        { label: 'Find local support', link: '/support' },
        { label: 'Ways to get involved', link: '/resources' },
      ];

  return (
    <section className="relative gradient-hero min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-ada-red-bright/20 rounded-full blur-[100px]" />
      </div>

      {/* People photos floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="absolute top-20 left-12 w-20 h-20 rounded-2xl object-cover opacity-30 rotate-6 shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="absolute bottom-32 left-20 w-16 h-16 rounded-xl object-cover opacity-25 -rotate-3 shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="absolute top-32 right-16 w-16 h-16 rounded-xl object-cover opacity-25 -rotate-6 shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="absolute bottom-24 right-24 w-20 h-20 rounded-2xl object-cover opacity-30 rotate-3 shadow-lg"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="text-center">
          {/* Logo mark */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 glass rounded-2xl flex items-center justify-center shadow-xl">
              <img src="/ada-logo.svg" alt="" className="h-12 md:h-14 w-auto" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            {isAuthenticated && user ? (
              <>Welcome back, {user.name.split(' ')[0]}!</>
            ) : (
              <>How can we help?</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-14 max-w-2xl mx-auto">
            Your trusted source for diabetes information, support, and community.
          </p>

          {/* Chat/Search box */}
          <div className="mb-8 md:mb-12 max-w-3xl mx-auto">
            {messages.length > 0 && (
              <div className="glass-card rounded-2xl p-6 mb-4 max-h-80 overflow-y-auto text-left">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`mb-4 last:mb-0 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-[80%] rounded-xl px-4 py-3 ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-ada-red to-ada-red-bright text-white'
                        : 'bg-white/80 text-ada-dark-gray shadow-sm'
                    }`}>
                      <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-left">
                    <div className="inline-block bg-white/80 rounded-xl px-4 py-3 shadow-sm">
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
              <div className="glass-card rounded-2xl shadow-2xl">
                <div className="flex items-center px-5 md:px-6 py-4 md:py-5">
                  <svg className="w-6 h-6 text-ada-muted-gray flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask me anything about diabetes..."
                    disabled={isLoading}
                    className="flex-1 px-4 text-base md:text-lg text-ada-dark-gray placeholder-ada-muted-gray focus:outline-none bg-transparent disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-ada-red/30 transition-all disabled:opacity-50"
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

          {/* Quick action pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                className="px-5 py-2.5 glass rounded-xl text-white text-sm font-medium hover:bg-white hover:text-ada-red transition-all duration-200 shadow-sm"
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
