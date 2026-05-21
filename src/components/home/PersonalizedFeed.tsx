import { Link } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';
import { mockResources } from '@data/mockResources';

export default function PersonalizedFeed() {
  const { user } = useAuthStore();

  // Filter resources based on user type
  const personalizedResources = mockResources
    .filter((resource) => resource.audience.includes(user!.type))
    .slice(0, 6);

  return (
    <section className="py-16 bg-ada-light">
      <div className="max-w-container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-ada-navy">Recommended for You</h2>
            <p className="text-ada-gray mt-2">
              Based on your profile as a {user!.type}, here are some resources we think you'll find helpful
            </p>
          </div>
          <Link to="/resources" className="text-ada-blue hover:underline font-medium">
            View all resources →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalizedResources.map((resource) => (
            <article
              key={resource.id}
              className="bg-white rounded-xl p-6 border border-ada-border hover:shadow-lg transition-all duration-300 group relative"
            >
              {/* Personalized badge */}
              <div className="absolute -top-2 -right-2 bg-ada-red text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                For You
              </div>

              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-ada-light text-ada-navy text-xs rounded-full font-medium">
                  {resource.category}
                </span>
                <span className="text-xs text-ada-gray">{resource.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-ada-navy mb-3 group-hover:text-ada-blue transition-colors">
                {resource.title}
              </h3>

              <p className="text-ada-gray text-sm mb-4">{resource.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {resource.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-ada-gray">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/resources?id=${resource.id}`}
                  className="text-ada-blue hover:text-ada-red transition-colors text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Saved Resources Teaser */}
        <div className="mt-12 p-8 bg-gradient-to-r from-ada-navy to-ada-blue text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">📚 Your Saved Resources</h3>
          <p className="mb-6 text-white/90">
            Bookmark articles and guides to access them quickly. Your saved resources will appear here.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 bg-white text-ada-navy rounded-lg hover:bg-white/90 transition-colors font-medium"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
