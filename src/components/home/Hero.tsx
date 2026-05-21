import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

export default function Hero() {
  const { isAuthenticated, user } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
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
    <section className="relative bg-ada-red py-16 md:py-24 min-h-[90vh] flex items-center justify-center overflow-hidden">
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

          {/* Large white search box */}
          <form onSubmit={handleSearch} className="mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl">
              <div className="flex items-center px-6 md:px-8 py-5 md:py-7">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-ada-gray flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for diabetes help, resources, and support..."
                  className="flex-1 px-4 md:px-6 text-lg md:text-xl text-ada-darkgray placeholder-ada-gray focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 p-2 md:p-3 text-ada-gray hover:text-ada-red transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>

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
