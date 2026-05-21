import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserType = 'patient' | 'donor' | 'volunteer';

export interface User {
  id: string;
  email: string;
  name: string;
  type: UserType;
  preferences?: {
    selectedAudience?: UserType;
    savedResources?: string[];
  };
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  selectedAudience: UserType | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setAudience: (audience: UserType) => void;
}

// Mock users for demo
const DEMO_USERS: Record<string, User> = {
  'patient@demo.com': {
    id: '1',
    email: 'patient@demo.com',
    name: 'Sarah Johnson',
    type: 'patient',
  },
  'donor@demo.com': {
    id: '2',
    email: 'donor@demo.com',
    name: 'Michael Chen',
    type: 'donor',
  },
  'volunteer@demo.com': {
    id: '3',
    email: 'volunteer@demo.com',
    name: 'Emily Rodriguez',
    type: 'volunteer',
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      selectedAudience: null,

      login: async (email: string, password: string): Promise<boolean> => {
        // Mock authentication - only check if email exists and password is 'demo123'
        if (DEMO_USERS[email] && password === 'demo123') {
          const user = DEMO_USERS[email];
          set({ user, isAuthenticated: true, selectedAudience: user.type });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      setAudience: (audience: UserType) => {
        set({ selectedAudience: audience });
      },
    }),
    {
      name: 'ada-auth-storage',
    }
  )
);
