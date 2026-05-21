import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '@store/authStore';
import LoginModal from '@components/auth/LoginModal';
import ProfileMenu from '@components/auth/ProfileMenu';
import SearchBar from './SearchBar';

export default function Header() {
  const { isAuthenticated, user } = useAuthStore();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-ada-border sticky top-0 z-40">
        <div className="max-w-container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-ada-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ADA</span>
              </div>
              <div>
                <div className="font-bold text-ada-navy text-lg">Help Center</div>
                <div className="text-xs text-ada-gray">American Diabetes Association</div>
              </div>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-8">
              <SearchBar />
            </div>

            {/* Auth section */}
            <div className="flex items-center gap-4">
              {isAuthenticated && user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-ada-light transition-colors"
                  >
                    <div className="w-8 h-8 bg-ada-red text-white rounded-full flex items-center justify-center font-semibold">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-ada-navy">{user.name}</span>
                  </button>
                  {showProfileMenu && (
                    <ProfileMenu onClose={() => setShowProfileMenu(false)} />
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-6 py-2 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors font-medium"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-ada-border">
            <ul className="flex gap-8 py-3">
              <li>
                <Link
                  to="/"
                  className="text-ada-navy hover:text-ada-red transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-ada-navy hover:text-ada-red transition-colors font-medium"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-ada-navy hover:text-ada-red transition-colors font-medium"
                >
                  Support
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link
                    to="/dashboard"
                    className="text-ada-navy hover:text-ada-red transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
}
