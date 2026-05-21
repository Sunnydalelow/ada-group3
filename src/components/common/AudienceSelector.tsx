import { useState } from 'react';
import { useAuthStore, UserType } from '@store/authStore';

export default function AudienceSelector() {
  const { selectedAudience, setAudience } = useAuthStore();
  const [hovered, setHovered] = useState<UserType | null>(null);

  const audiences = [
    {
      type: 'patient' as UserType,
      label: 'I am a Patient',
      icon: '🏥',
      description: 'Managing diabetes or seeking information about treatment and care',
      color: 'from-blue-500 to-blue-600',
    },
    {
      type: 'donor' as UserType,
      label: 'I am a Donor',
      icon: '❤️',
      description: 'Supporting diabetes research and community programs',
      color: 'from-ada-red to-red-600',
    },
    {
      type: 'volunteer' as UserType,
      label: 'I am a Volunteer',
      icon: '🤝',
      description: 'Giving time and energy to support the diabetes community',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-16 bg-ada-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ada-navy mb-4">How can we help you today?</h2>
          <p className="text-ada-gray text-lg">
            Select your role to see personalized resources and quick actions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <button
              key={audience.type}
              onClick={() => setAudience(audience.type)}
              onMouseEnter={() => setHovered(audience.type)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-8 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedAudience === audience.type
                  ? 'border-ada-red bg-white shadow-xl scale-105'
                  : 'border-ada-border bg-white hover:border-ada-blue hover:shadow-lg'
              }`}
            >
              <div className="text-5xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-bold text-ada-navy mb-2">{audience.label}</h3>
              <p className="text-ada-gray text-sm">{audience.description}</p>

              {selectedAudience === audience.type && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-ada-red text-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}

              {(hovered === audience.type || selectedAudience === audience.type) && (
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.color} rounded-b-xl`} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
