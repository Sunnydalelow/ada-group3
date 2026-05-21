import { Link } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';
import { mockResources } from '@data/mockResources';

export default function PersonalizedFeed() {
  const { user } = useAuthStore();

  const personalizedResources = mockResources
    .filter((resource) => resource.audience.includes(user!.type))
    .slice(0, 6);

  return (
    <section className="py-16 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-2">Recommended for You</h2>
            <p className="text-ada-muted-gray text-lg">
              Personalized resources for your {user!.type} journey
            </p>
          </div>
          <Link
            to="/resources"
            className="px-5 py-2.5 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-ada-red/20 transition-all"
          >
            View all resources →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalizedResources.map((resource) => (
            <article
              key={resource.id}
              className="group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 relative"
            >
              <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-ada-red to-ada-red-bright text-white text-xs rounded-full font-semibold shadow-md">
                For You
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-ada-teal/10 to-ada-teal/5 text-ada-teal text-xs rounded-full font-semibold">
                  {resource.category}
                </span>
                <span className="text-xs text-ada-muted-gray">{resource.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-ada-near-black mb-3 group-hover:text-ada-red transition-colors leading-snug">
                {resource.title}
              </h3>

              <p className="text-ada-muted-gray text-sm mb-5 line-clamp-2 leading-relaxed">{resource.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-ada-warm-gray/30">
                <div className="flex gap-2">
                  {resource.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-ada-muted-gray bg-gray-100 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/resources?id=${resource.id}`}
                  className="text-ada-red hover:text-ada-red-bright transition-colors text-sm font-semibold flex items-center gap-1 group-hover:gap-2"
                >
                  Read
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 md:p-10 bg-gradient-to-r from-ada-near-black via-ada-near-black to-ada-red/80 text-white rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ada-red/20" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Your Saved Resources</h3>
            <p className="mb-6 text-white/80 text-lg max-w-xl">
              Bookmark articles and guides to access them quickly from your dashboard.
            </p>
            <Link
              to="/dashboard"
              className="inline-block px-6 py-3 bg-white text-ada-near-black rounded-xl hover:shadow-lg transition-all font-semibold"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
