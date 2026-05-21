import { useAuthStore } from '@store/authStore';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

export default function VolunteerDashboard() {
  const { user } = useAuthStore();

  const upcomingEvents = [
    { date: '2024-06-15', name: 'Community Health Fair', location: 'Arlington, VA', role: 'Coordinator' },
    { date: '2024-06-22', name: 'Diabetes Awareness Walk', location: 'Washington, DC', role: 'Team Leader' },
    { date: '2024-07-10', name: 'Youth Camp Support', location: 'Virtual', role: 'Mentor' },
  ];

  return (
    <DottedGlowBackground className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome banner */}
          <div className="glass-card rounded-2xl p-8 mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5" />
            <div className="relative flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=120&h=120&fit=crop&crop=face"
                alt="Volunteer"
                className="w-16 h-16 rounded-2xl object-cover shadow-md hidden sm:block"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-1">
                  Welcome back, {user?.name.split(' ')[0]}!
                </h1>
                <p className="text-ada-muted-gray text-lg">Thank you for your commitment to the diabetes community</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Hours Volunteered</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">⏰</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">48</h3>
              <p className="text-white/70 text-sm">This year</p>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Events Supported</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">📅</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">12</h3>
              <p className="text-white/70 text-sm">Since joining</p>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Impact Rating</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">🌟</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">Top 10%</h3>
              <p className="text-white/70 text-sm">Among all volunteers</p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ada-near-black mb-6">Upcoming Events</h2>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="glass-card rounded-2xl p-5 flex items-center justify-between hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ada-red/10 to-ada-red-bright/10 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-semibold text-ada-red uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold text-ada-red leading-none">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-ada-near-black mb-0.5">{event.name}</h3>
                      <p className="text-sm text-ada-muted-gray">{event.location}</p>
                      <span className="inline-block mt-1 px-2.5 py-0.5 bg-ada-teal/10 text-ada-teal text-xs rounded-full font-medium">
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
            <div className="rounded-2xl p-8 bg-gradient-to-br from-ada-near-black to-ada-near-black/90 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-ada-teal/10 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">Find More Opportunities</h3>
                <p className="mb-5 text-white/70 text-sm">Browse upcoming events and make an impact.</p>
                <button className="px-5 py-2.5 bg-white text-ada-near-black rounded-xl font-medium text-sm hover:shadow-lg transition-all">
                  Browse Events
                </button>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">Invite Friends</h3>
                <p className="mb-5 text-white/70 text-sm">Share the impact of volunteering. Grow the movement!</p>
                <button className="px-5 py-2.5 bg-white text-emerald-700 rounded-xl font-medium text-sm hover:shadow-lg transition-all">
                  Share Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DottedGlowBackground>
  );
}
