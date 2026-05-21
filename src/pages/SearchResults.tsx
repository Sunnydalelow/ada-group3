import { useSearchParams } from 'react-router-dom';
import { mockResources } from '@data/mockResources';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

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
    <DottedGlowBackground className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-ada-near-black mb-3">Search Results</h1>
            <p className="text-ada-muted-gray text-lg">
              Found {results.length} results for "<span className="text-ada-red font-medium">{query}</span>"
            </p>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-ada-red/10 to-ada-red-bright/10 flex items-center justify-center mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-ada-near-black mb-3">No results found</h2>
              <p className="text-ada-muted-gray mb-6 max-w-md mx-auto">Try adjusting your search terms or browse our resources</p>
              <button className="px-6 py-3 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl font-medium hover:shadow-lg hover:shadow-ada-red/20 transition-all">
                Ask Our AI Assistant
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((resource) => (
                <article
                  key={resource.id}
                  className="group glass-card rounded-2xl p-6 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-ada-red/10 to-ada-red-bright/10 text-ada-red text-xs rounded-full font-semibold">
                      {resource.category}
                    </span>
                    <span className="text-xs text-ada-muted-gray">{resource.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-ada-near-black mb-2 group-hover:text-ada-red transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-ada-muted-gray text-sm mb-4 leading-relaxed">{resource.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {resource.tags.map((tag) => (
                        <span key={tag} className="text-xs text-ada-muted-gray bg-gray-100 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl text-sm font-medium hover:shadow-md hover:shadow-ada-red/20 transition-all">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </DottedGlowBackground>
  );
}
