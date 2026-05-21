import { Link } from 'react-router-dom';
import { mockResources } from '@data/mockResources';

export default function PopularTopics() {
  // Get the first 9 resources for popular topics
  const popularResources = mockResources.slice(0, 9);

  const categories = [
    { name: 'All Resources', icon: '📚', link: '/resources' },
    { name: 'Type 1 Diabetes', icon: '💉', link: '/resources?category=type1' },
    { name: 'Type 2 Diabetes', icon: '🩺', link: '/resources?category=type2' },
    { name: 'Nutrition & Recipes', icon: '🥗', link: '/resources?category=nutrition' },
    { name: 'Blood Sugar Management', icon: '📊', link: '/resources?category=blood-sugar' },
    { name: 'Medications', icon: '💊', link: '/resources?category=medications' },
  ];

  return (
    <>
      {/* Category quick links */}
      <section className="py-12 bg-white border-b border-ada-border">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ada-darkgray mb-8 text-center">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="flex flex-col items-center p-6 bg-ada-light rounded-lg hover:shadow-lg hover:bg-white border border-transparent hover:border-ada-blue transition-all group"
              >
                <span className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <span className="text-sm font-medium text-ada-darkgray text-center group-hover:text-ada-blue transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular articles */}
      <section id="popular-topics" className="py-16 bg-ada-light">
        <div className="max-w-container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-ada-darkgray font-heading">Popular Articles</h2>
            <Link to="/resources" className="text-ada-blue hover:underline font-medium">
              View all resources →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularResources.map((resource) => (
              <article
                key={resource.id}
                className="bg-white rounded-lg p-6 border border-ada-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-ada-light text-ada-darkgray text-xs rounded-full font-medium">
                    {resource.category}
                  </span>
                  <span className="text-xs text-ada-gray">{resource.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-ada-darkgray mb-3 group-hover:text-ada-blue transition-colors font-heading">
                  {resource.title}
                </h3>

                <p className="text-ada-gray text-sm mb-4 line-clamp-2">{resource.excerpt}</p>

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
                    className="text-ada-blue hover:underline transition-colors text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
