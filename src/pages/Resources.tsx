import { useState } from 'react';
import { mockResources } from '@data/mockResources';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

type AudienceType = 'patient' | 'donor' | 'volunteer';

export default function Resources() {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>('patient');

  const audiences: { value: AudienceType; label: string; icon: string }[] = [
    { value: 'patient', label: 'For Patients', icon: '🩺' },
    { value: 'donor', label: 'For Donors', icon: '💝' },
    { value: 'volunteer', label: 'For Volunteers', icon: '🤝' },
  ];

  const filteredResources = mockResources.filter((r) => r.audience === selectedAudience);

  return (
    <DottedGlowBackground className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ada-near-black mb-4">Resource Library</h1>
            <p className="text-ada-muted-gray text-lg max-w-2xl mx-auto">
              Explore comprehensive guides, articles, and tools to help you on your journey
            </p>
          </div>

          {/* Audience tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex gap-2 p-1.5 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
              {audiences.map((audience) => (
                <button
                  key={audience.value}
                  onClick={() => setSelectedAudience(audience.value)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    selectedAudience === audience.value
                      ? 'bg-gradient-to-r from-ada-red to-ada-red-bright text-white shadow-md shadow-ada-red/20'
                      : 'text-ada-dark-gray hover:bg-white/80'
                  }`}
                >
                  <span className="mr-1.5">{audience.icon}</span>
                  {audience.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-ada-red/10 to-ada-red-bright/10 text-ada-red text-xs rounded-full font-semibold">
                    {resource.type}
                  </span>
                  <span className="text-xs text-ada-muted-gray">{resource.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-ada-near-black mb-3 group-hover:text-ada-red transition-colors leading-snug">
                  {resource.title}
                </h3>
                <p className="text-ada-muted-gray text-sm mb-4 line-clamp-2 leading-relaxed">{resource.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="text-xs text-ada-muted-gray bg-gray-100 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2.5 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-ada-red/20 transition-all">
                  Read Article
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </DottedGlowBackground>
  );
}
