import { useAuthStore } from '@store/authStore';
import { mockResources } from '@data/mockResources';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

export default function PatientDashboard() {
  const { user } = useAuthStore();
  const patientResources = mockResources.filter((r) => r.audience.includes('patient')).slice(0, 3);

  return (
    <DottedGlowBackground className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome banner */}
          <div className="glass-card rounded-2xl p-8 mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ada-red/5 to-ada-teal/5" />
            <div className="relative flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
                alt="Healthcare professional"
                className="w-16 h-16 rounded-2xl object-cover shadow-md hidden sm:block"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-1">
                  Welcome back, {user?.name.split(' ')[0]}!
                </h1>
                <p className="text-ada-muted-gray text-lg">Your personalized diabetes management hub</p>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Blood Sugar</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">📊</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">127</h3>
              <p className="text-white/70 text-sm">mg/dL • 2 hours ago</p>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Current A1C</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">🎯</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">6.8%</h3>
              <p className="text-white/70 text-sm">Target: &lt;7% • On track</p>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Medications</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💊</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">2</h3>
              <p className="text-white/70 text-sm">Next dose in 4 hours</p>
            </div>
          </div>

          {/* Recommended Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ada-near-black mb-6">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {patientResources.map((resource) => (
                <article key={resource.id} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group">
                  <h3 className="font-bold text-ada-near-black mb-2 group-hover:text-ada-red transition-colors">{resource.title}</h3>
                  <p className="text-sm text-ada-muted-gray mb-4 line-clamp-2">{resource.excerpt}</p>
                  <button className="text-ada-red hover:text-ada-red-bright transition-colors text-sm font-semibold flex items-center gap-1 group-hover:gap-2">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '📱', title: 'Log Reading', desc: 'Record blood sugar' },
              { icon: '🍽️', title: 'Meal Planner', desc: 'Plan healthy meals' },
              { icon: '👨‍⚕️', title: 'Ask Doctor', desc: 'Get medical advice' },
              { icon: '📈', title: 'View Trends', desc: 'Analyze your data' },
            ].map((action) => (
              <button key={action.title} className="glass-card rounded-2xl p-5 text-left hover:scale-[1.03] transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ada-red/10 to-ada-red-bright/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-xl">{action.icon}</span>
                </div>
                <h3 className="font-bold text-ada-near-black mb-0.5 text-sm">{action.title}</h3>
                <p className="text-xs text-ada-muted-gray">{action.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </DottedGlowBackground>
  );
}
