import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (success) {
      onClose();
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Try: patient@demo.com / demo123');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-ada-navy">Sign In</h2>
          <button onClick={onClose} className="text-ada-gray hover:text-ada-navy">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ada-navy mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-ada-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ada-blue"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-ada-navy mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-ada-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ada-blue"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-ada-red text-white py-3 rounded-lg hover:bg-ada-red/90 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 p-4 bg-ada-light rounded-lg">
          <p className="text-sm text-ada-navy font-medium mb-2">Demo Accounts:</p>
          <ul className="text-xs text-ada-gray space-y-1">
            <li>• patient@demo.com / demo123 (Patient)</li>
            <li>• donor@demo.com / demo123 (Donor)</li>
            <li>• volunteer@demo.com / demo123 (Volunteer)</li>
          </ul>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-ada-blue hover:underline">
            Forgot password?
          </a>
          <span className="text-ada-gray mx-2">|</span>
          <a href="#" className="text-sm text-ada-blue hover:underline">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
