import { Link } from 'react-router-dom';
import { mockResources } from '@data/mockResources';

export default function PopularTopics() {
  // Get the first 6 resources for popular topics
  const popularResources = mockResources.slice(0, 6);

  return (
    <section id="popular-topics" className="py-16 bg-ada-light">
      <div className="max-w-container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-ada-navy">Popular Topics</h2>
          <Link to="/resources" className="text-ada-blue hover:underline font-medium">
            View all resources →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularResources.map((resource) => (
            <article
              key={resource.id}
              className="bg-white rounded-xl p-6 border border-ada-border hover:shadow-lg transition-all duration-300 group"
            >
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
      </div>
    </section>
  );
}
