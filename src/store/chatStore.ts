import { create } from 'zustand';

interface ChatStore {
  triggerMessage: string | null;
  sendMessage: (msg: string) => void;
  clearTrigger: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  triggerMessage: null,
  sendMessage: (msg) => set({ triggerMessage: msg }),
  clearTrigger: () => set({ triggerMessage: null }),
}));
