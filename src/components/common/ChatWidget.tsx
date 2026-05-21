import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '@store/authStore';
import { useChatStore } from '@store/chatStore';
import { unauthFlow, authFlow } from '@data/chatFlows';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  suggestions?: string[];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [flowStep, setFlowStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user } = useAuthStore();
  const { triggerMessage, clearTrigger } = useChatStore();

  const flow = isAuthenticated ? authFlow : unauthFlow;

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateAgentMessage(0);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (triggerMessage) {
      setIsOpen(true);
      if (messages.length === 0) {
        simulateAgentMessage(0);
        setTimeout(() => {
          handleUserInput(triggerMessage);
        }, 1200);
      } else {
        handleUserInput(triggerMessage);
      }
      clearTrigger();
    }
  }, [triggerMessage]);

  const simulateAgentMessage = (stepIndex: number) => {
    if (stepIndex >= flow.length) return;

    setIsTyping(true);
    setTimeout(() => {
      const step = flow[stepIndex];
      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          text: step.agent,
          sender: 'agent',
          suggestions: step.suggestions,
        },
      ]);
      setIsTyping(false);
      setFlowStep(stepIndex + 1);
    }, 800 + Math.random() * 600);
  };

  const handleUserInput = (text: string) => {
    setMessages((prev) => {
      const updated = prev.map((m) => ({ ...m, suggestions: undefined }));
      return [
        ...updated,
        { id: `user-${Date.now()}`, text, sender: 'user' as const },
      ];
    });
    simulateAgentMessage(flowStep);
  };

  const handleReset = () => {
    setMessages([]);
    setFlowStep(0);
    simulateAgentMessage(0);
  };

  return (
    <>
      {/* Chat FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-ada-red to-ada-red-bright text-white rounded-2xl shadow-lg shadow-ada-red/30 hover:shadow-xl hover:shadow-ada-red/40 hover:scale-105 transition-all flex items-center justify-center z-50"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[520px] rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-white/20 bg-white/95 backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-ada-red to-ada-red-bright text-white px-5 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm">ADA Help Assistant</h3>
                  <p className="text-[11px] text-white/70">
                    {user ? `Personalized for ${user.name.split(' ')[0]}` : 'Always here to help'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-br-md'
                      : 'bg-gray-100 text-ada-dark-gray rounded-bl-md'
                  }`}>
                    <p className="text-[13px] leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                    {message.suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleUserInput(suggestion)}
                        className="px-3 py-1.5 text-[12px] font-medium text-ada-red bg-ada-red/5 border border-ada-red/20 rounded-full hover:bg-ada-red/10 hover:border-ada-red/40 transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-ada-muted-gray rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-ada-muted-gray rounded-full animate-bounce [animation-delay:0.15s]" />
                    <div className="w-1.5 h-1.5 bg-ada-muted-gray rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0">
            {flowStep >= flow.length ? (
              <button
                onClick={handleReset}
                className="w-full py-2.5 text-sm font-medium text-ada-red bg-ada-red/5 border border-ada-red/20 rounded-xl hover:bg-ada-red/10 transition-all"
              >
                Start a new conversation
              </button>
            ) : (
              <p className="text-[11px] text-ada-muted-gray text-center">
                Select a suggestion above or tap to continue
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
