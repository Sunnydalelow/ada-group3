import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '@store/authStore';
import LoginModal from '@components/auth/LoginModal';
import ProfileMenu from '@components/auth/ProfileMenu';

export default function Header() {
  const { isAuthenticated, user } = useAuthStore();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/ada-logo.svg"
                alt="American Diabetes Association"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-ada-dark-gray hover:text-ada-red rounded-lg hover:bg-white/50 transition-all"
              >
                Home
              </Link>
              <Link
                to="/resources"
                className="px-4 py-2 text-sm font-medium text-ada-dark-gray hover:text-ada-red rounded-lg hover:bg-white/50 transition-all"
              >
                Resources
              </Link>
              <Link
                to="/support"
                className="px-4 py-2 text-sm font-medium text-ada-dark-gray hover:text-ada-red rounded-lg hover:bg-white/50 transition-all"
              >
                Support
              </Link>
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-ada-dark-gray hover:text-ada-red rounded-lg hover:bg-white/50 transition-all"
                >
                  Dashboard
                </Link>
              )}
            </nav>

            {/* Auth section */}
            <div className="flex items-center gap-3">
              {isAuthenticated && user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 transition-all"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-ada-red to-ada-red-bright text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md">
                      {user.name.charAt(0)}
                    </div>
                    <span className="hidden sm:inline text-sm font-medium text-ada-dark-gray">{user.name}</span>
                  </button>
                  {showProfileMenu && (
                    <ProfileMenu onClose={() => setShowProfileMenu(false)} />
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-5 py-2.5 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl hover:shadow-lg hover:shadow-ada-red/20 transition-all font-medium text-sm"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
}
