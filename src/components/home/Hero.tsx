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
    <section className="bg-gradient-to-br from-ada-navy via-[#1a4d7a] to-ada-blue text-white py-32 min-h-[80vh] flex items-center">
      <div className="max-w-container mx-auto px-4 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Mascot placeholder - using emoji for now */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-7xl animate-pulse-glow">
              🩺
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-12">
            {isAuthenticated && user ? (
              <>Welcome back, {user.name.split(' ')[0]}!</>
            ) : (
              <>How can ADA help?</>
            )}
          </h1>

          {/* Large search bar */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for diabetes help, resources, and support..."
                className="w-full px-8 py-5 pr-14 text-lg rounded-xl text-ada-navy focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Quick action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                className="px-6 py-3 bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all font-medium text-sm hover:scale-105"
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
