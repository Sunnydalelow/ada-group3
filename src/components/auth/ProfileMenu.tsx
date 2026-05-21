import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

interface ProfileMenuProps {
  onClose: () => void;
}

export default function ProfileMenu({ onClose }: ProfileMenuProps) {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-ada-border z-50">
        <div className="p-4 border-b border-ada-border">
          <p className="font-medium text-ada-navy">{user?.name}</p>
          <p className="text-sm text-ada-gray">{user?.email}</p>
          <span className="inline-block mt-2 px-2 py-1 bg-ada-light text-ada-navy text-xs rounded-full capitalize">
            {user?.type}
          </span>
        </div>

        <div className="py-2">
          <button
            onClick={() => {
              navigate('/dashboard');
              onClose();
            }}
            className="w-full px-4 py-2 text-left hover:bg-ada-light transition-colors text-ada-navy"
          >
            Dashboard
          </button>
          <button
            onClick={() => {
              navigate('/resources');
              onClose();
            }}
            className="w-full px-4 py-2 text-left hover:bg-ada-light transition-colors text-ada-navy"
          >
            My Resources
          </button>
          <button className="w-full px-4 py-2 text-left hover:bg-ada-light transition-colors text-ada-navy">
            Settings
          </button>
        </div>

        <div className="border-t border-ada-border py-2">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left hover:bg-red-50 transition-colors text-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
