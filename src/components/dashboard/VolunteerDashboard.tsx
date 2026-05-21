import { useAuthStore } from '@store/authStore';

export default function VolunteerDashboard() {
  const { user } = useAuthStore();

  const upcomingEvents = [
    { date: '2024-06-15', name: 'Community Health Fair', location: 'Arlington, VA', role: 'Coordinator' },
    { date: '2024-06-22', name: 'Diabetes Awareness Walk', location: 'Washington, DC', role: 'Team Leader' },
    { date: '2024-07-10', name: 'Youth Camp Support', location: 'Virtual', role: 'Mentor' },
  ];

  return (
    <div className="min-h-screen bg-ada-near-black">
      {/* Hero banner */}
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=600&fit=crop"
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
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face"
              alt="Emily Rodriguez"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/30 shadow-xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">
                Welcome back, {user?.name.split(' ')[0]}.
              </h1>
              <p className="text-lg text-white/70">Thank you for your commitment to the diabetes community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Hours Volunteered</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">48</h3>
            <p className="text-white/70 text-sm">This year</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Events Supported</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">12</h3>
            <p className="text-white/70 text-sm">Since joining</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Impact Rating</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">Top 10%</h3>
            <p className="text-white/70 text-sm">Among all volunteers</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="rounded-2xl p-5 flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ada-red/20 to-ada-red-bright/20 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-semibold text-ada-red-bright uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-lg font-bold text-ada-red-bright leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0.5">{event.name}</h3>
                    <p className="text-sm text-white/50">{event.location}</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-medium">
                      {event.role}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl text-sm font-medium hover:shadow-md hover:shadow-ada-red/20 transition-all hidden sm:block">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-ada-teal/10 to-transparent" />
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-white">Find More Opportunities</h3>
              <p className="mb-5 text-white/60 text-sm">Browse upcoming events and make an impact.</p>
              <button className="px-5 py-2.5 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-ada-red/30 transition-all">
                Browse Events
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent" />
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-white">Invite Friends</h3>
              <p className="mb-5 text-white/60 text-sm">Share the impact of volunteering. Grow the movement.</p>
              <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                Share Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
