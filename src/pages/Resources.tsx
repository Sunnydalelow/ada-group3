import { useState } from 'react';
import { mockResources } from '@data/mockResources';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Managing Diabetes', 'Nutrition', 'Treatment', 'Mental Health', 'Research'];

  const filteredResources =
    selectedCategory === 'all'
      ? mockResources
      : mockResources.filter((r) => r.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="max-w-container mx-auto px-4">
        <h1 className="text-4xl font-bold text-ada-navy mb-4">Resource Library</h1>
        <p className="text-ada-gray text-lg mb-8">
          Explore comprehensive guides, articles, and tools to help you on your journey
        </p>

        {/* Category filter */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-ada-red text-white'
                  : 'bg-ada-light text-ada-navy hover:bg-ada-border'
              }`}
            >
              {category === 'all' ? 'All Topics' : category}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <article
              key={resource.id}
              className="bg-white rounded-xl p-6 border border-ada-border hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-ada-light text-ada-navy text-xs rounded-full font-medium">
                  {resource.type}
                </span>
                <span className="text-xs text-ada-gray">{resource.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-ada-navy mb-3">{resource.title}</h3>
              <p className="text-ada-gray text-sm mb-4">{resource.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag) => (
                  <span key={tag} className="text-xs text-ada-gray">
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="w-full py-2 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors">
                Read Article
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
