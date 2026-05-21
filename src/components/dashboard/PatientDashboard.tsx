import { useAuthStore } from '@store/authStore';
import { mockResources } from '@data/mockResources';

export default function PatientDashboard() {
  const { user } = useAuthStore();
  const patientResources = mockResources.filter((r) => r.audience.includes('patient')).slice(0, 3);

  return (
    <div className="min-h-screen bg-ada-near-black">
      {/* Hero banner */}
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&h=600&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10">
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
              alt="Sarah Johnson"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/30 shadow-xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">
                Welcome back, {user?.name.split(' ')[0]}.
              </h1>
              <p className="text-lg text-white/70">Your personalized diabetes management hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Blood Sugar</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">127</h3>
            <p className="text-white/70 text-sm">mg/dL - 2 hours ago</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Current A1C</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">6.8%</h3>
            <p className="text-white/70 text-sm">Target: &lt;7% - On track</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Medications</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">2</h3>
            <p className="text-white/70 text-sm">Next dose in 4 hours</p>
          </div>
        </div>

        {/* Recommended Resources */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {patientResources.map((resource) => (
              <article key={resource.id} className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group">
                <h3 className="font-bold text-white mb-2 group-hover:text-ada-red-bright transition-colors">{resource.title}</h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-2">{resource.excerpt}</p>
                <button className="text-ada-red-bright hover:text-white transition-colors text-sm font-semibold flex items-center gap-1 group-hover:gap-2">
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
            { title: 'Log Reading', desc: 'Record blood sugar', icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            )},
            { title: 'Meal Planner', desc: 'Plan healthy meals', icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
              </svg>
            )},
            { title: 'Ask Doctor', desc: 'Get medical advice', icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            )},
            { title: 'View Trends', desc: 'Analyze your data', icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            )},
          ].map((action) => (
            <button key={action.title} className="rounded-2xl p-5 text-left bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ada-red/20 to-ada-red-bright/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-ada-red-bright">
                {action.icon}
              </div>
              <h3 className="font-bold text-white mb-0.5 text-sm">{action.title}</h3>
              <p className="text-xs text-white/50">{action.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
