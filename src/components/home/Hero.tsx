import { useState } from 'react';
import { useAuthStore } from '@store/authStore';
import Anthropic from '@anthropic-ai/sdk';

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

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
      console.log('API Key present:', !!import.meta.env.VITE_ANTHROPIC_API_KEY);
      console.log('Calling Claude API...');

      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: `You are a helpful assistant for the American Diabetes Association (ADA). Your role is to:
- Provide accurate, compassionate information about diabetes
- Guide users to relevant resources
- Answer questions about diabetes management, nutrition, medications, and support
- Encourage users to consult healthcare professionals for medical advice
- Be warm, supportive, and understanding

Keep responses concise and helpful.`,
        messages: [{ role: 'user', content: query }],
      });

      console.log('Response received:', response);
      const agentText = response.content[0].type === 'text' ? response.content[0].text : 'I apologize, I had trouble processing that.';
      setMessages([userMessage, { text: agentText, sender: 'agent' }]);
    } catch (error) {
      console.error('Claude API error:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      setMessages([userMessage, { text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Check console for details.`, sender: 'agent' }]);
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
    <section className="relative bg-ada-red py-16 md:py-24 min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Mascot/Icon */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl md:text-7xl backdrop-blur-sm">
              🩺
            </div>
          </div>

          {/* Main headline - directly on colored background */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 md:mb-14 text-white drop-shadow-lg px-4">
            {isAuthenticated && user ? (
              <>Welcome back, {user.name.split(' ')[0]}!</>
            ) : (
              <>How can ADA help?</>
            )}
          </h1>

          {/* Large white search/chat box */}
          <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
            {messages.length > 0 ? (
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 mb-4 max-h-96 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-[80%] rounded-lg p-4 ${msg.sender === 'user' ? 'bg-white border-2 border-ada-warm-gray text-ada-dark-gray' : 'bg-ada-light-pink text-ada-dark-gray'}`}>
                      <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-left">
                    <div className="inline-block bg-ada-light-pink rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-ada-muted-gray rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-ada-muted-gray rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-ada-muted-gray rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            <form onSubmit={handleSearch}>
              <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl">
                <div className="flex items-center px-6 md:px-8 py-5 md:py-7">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-ada-muted-gray flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask me anything about diabetes..."
                    disabled={isLoading}
                    className="flex-1 px-4 md:px-6 text-lg md:text-xl text-ada-dark-gray placeholder-ada-muted-gray focus:outline-none bg-transparent disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-shrink-0 p-2 md:p-3 text-ada-muted-gray hover:text-ada-red transition-colors disabled:opacity-50"
                    aria-label="Send"
                  >
                    {isLoading ? (
                      <svg className="w-6 h-6 md:w-7 md:h-7 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Quick action buttons - outline style on colored background */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white/80 text-white rounded-lg md:rounded-xl hover:bg-white hover:text-ada-red transition-all font-medium text-sm md:text-base backdrop-blur-sm"
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
