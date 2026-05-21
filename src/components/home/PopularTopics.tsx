import { Link } from 'react-router-dom';
import { mockResources } from '@data/mockResources';

export default function PopularTopics() {
  const popularResources = mockResources.slice(0, 9);

  const categories = [
    { name: 'All Resources', icon: '📚', link: '/resources', color: 'from-ada-red/10 to-ada-red-bright/10' },
    { name: 'Type 1 Diabetes', icon: '💉', link: '/resources?category=type1', color: 'from-blue-50 to-blue-100' },
    { name: 'Type 2 Diabetes', icon: '🩺', link: '/resources?category=type2', color: 'from-teal-50 to-teal-100' },
    { name: 'Nutrition & Recipes', icon: '🥗', link: '/resources?category=nutrition', color: 'from-green-50 to-green-100' },
    { name: 'Blood Sugar', icon: '📊', link: '/resources?category=blood-sugar', color: 'from-purple-50 to-purple-100' },
    { name: 'Medications', icon: '💊', link: '/resources?category=medications', color: 'from-orange-50 to-orange-100' },
  ];

  return (
    <>
      {/* Categories section */}
      <section className="py-16 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-3">Browse by Topic</h2>
            <p className="text-ada-muted-gray text-lg">Find the information you need, organized by category</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group glass-card rounded-2xl p-5 flex flex-col items-center text-center hover:scale-[1.03] transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <span className="text-sm font-medium text-ada-dark-gray group-hover:text-ada-red transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular articles */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-2">Popular Articles</h2>
              <p className="text-ada-muted-gray">Trusted guidance from diabetes experts</p>
            </div>
            <Link
              to="/resources"
              className="px-5 py-2.5 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-ada-red/20 transition-all"
            >
              View all resources →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularResources.map((resource) => (
              <article
                key={resource.id}
                className="group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-ada-red/10 to-ada-red-bright/10 text-ada-red text-xs rounded-full font-semibold">
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
        </div>
      </section>
    </>
  );
}
