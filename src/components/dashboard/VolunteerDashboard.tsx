import { useAuthStore } from '@store/authStore';

export default function VolunteerDashboard() {
  const { user } = useAuthStore();

  const upcomingEvents = [
    { date: '2024-06-15', name: 'Community Health Fair', location: 'Arlington, VA', role: 'Coordinator' },
    { date: '2024-06-22', name: 'Diabetes Awareness Walk', location: 'Washington, DC', role: 'Team Leader' },
    { date: '2024-07-10', name: 'Youth Camp Support', location: 'Virtual', role: 'Mentor' },
  ];

  return (
    <div className="py-12">
      <div className="max-w-container mx-auto px-4">
        <h1 className="text-4xl font-bold text-ada-navy mb-2">Welcome back, {user?.name.split(' ')[0]}!</h1>
        <p className="text-ada-gray text-lg mb-8">Thank you for your commitment to the diabetes community</p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="text-3xl font-bold mb-1">48</h3>
            <p className="text-white/90">Hours Volunteered</p>
            <p className="text-xs text-white/70 mt-2">This year</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="text-3xl font-bold mb-1">12</h3>
            <p className="text-white/90">Events Supported</p>
            <p className="text-xs text-white/70 mt-2">Since joining</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">🌟</div>
            <h3 className="text-3xl font-bold mb-1">Top 10%</h3>
            <p className="text-white/90">Impact Rating</p>
            <p className="text-xs text-white/70 mt-2">Among all volunteers</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-ada-navy mb-6">Your Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-ada-border flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-center bg-ada-light rounded-lg p-4">
                    <div className="text-sm font-medium text-ada-navy">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-2xl font-bold text-ada-red">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-ada-navy text-lg mb-1">{event.name}</h3>
                    <p className="text-sm text-ada-gray">📍 {event.location}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-ada-light text-ada-navy text-xs rounded-full">
                      {event.role}
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-ada-navy to-ada-blue text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">🎯 Find More Opportunities</h3>
            <p className="mb-6 text-white/90">
              Browse upcoming events and find new ways to make an impact in your community.
            </p>
            <button className="px-6 py-3 bg-white text-ada-navy rounded-lg hover:bg-white/90 transition-colors font-medium">
              Browse Events
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">👥 Invite Friends</h3>
            <p className="mb-6 text-white/90">
              Share the impact of volunteering with friends and family. Grow the movement!
            </p>
            <button className="px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-white/90 transition-colors font-medium">
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
