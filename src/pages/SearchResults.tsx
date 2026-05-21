import { useSearchParams } from 'react-router-dom';
import { mockResources } from '@data/mockResources';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = mockResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(query.toLowerCase()) ||
      resource.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="py-12">
      <div className="max-w-container mx-auto px-4">
        <h1 className="text-4xl font-bold text-ada-navy mb-2">Search Results</h1>
        <p className="text-ada-gray text-lg mb-8">
          Found {results.length} results for "{query}"
        </p>

        {results.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-ada-navy mb-4">No results found</h2>
            <p className="text-ada-gray mb-6">Try adjusting your search terms or browse our resources</p>
            <button className="px-6 py-3 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors">
              Ask Our AI Assistant
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((resource) => (
              <article
                key={resource.id}
                className="bg-white rounded-xl p-6 border border-ada-border hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-ada-light text-ada-navy text-xs rounded-full font-medium">
                    {resource.category}
                  </span>
                  <span className="text-xs text-ada-gray">{resource.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-ada-navy mb-3 hover:text-ada-blue transition-colors cursor-pointer">
                  {resource.title}
                </h3>

                <p className="text-ada-gray mb-4">{resource.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="text-xs text-ada-gray">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="px-4 py-2 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
