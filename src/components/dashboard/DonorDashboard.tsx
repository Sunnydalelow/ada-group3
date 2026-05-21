import { useAuthStore } from '@store/authStore';

export default function DonorDashboard() {
  const { user } = useAuthStore();

  const donations = [
    { date: '2024-03-15', amount: 100, campaign: 'General Fund' },
    { date: '2024-02-10', amount: 250, campaign: 'Research Initiative' },
    { date: '2024-01-20', amount: 50, campaign: 'Camp Scholarships' },
  ];

  return (
    <div className="min-h-screen bg-ada-near-black">
      {/* Hero banner */}
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&h=600&fit=crop"
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
              alt="Michael Chen"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/30 shadow-xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">
                Thank you, {user?.name.split(' ')[0]}.
              </h1>
              <p className="text-lg text-white/70">Your generosity is making a real difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-ada-red to-ada-red-bright text-white shadow-lg shadow-ada-red/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Total Donated</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">$400</h3>
            <p className="text-white/70 text-sm">Last 12 months</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">Research Funded</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">2</h3>
            <p className="text-white/70 text-sm">Projects supported</p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white/80">People Helped</span>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-0.5">150+</h3>
            <p className="text-white/70 text-sm">Through your contributions</p>
          </div>
        </div>

        {/* Donation History */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Donations</h2>
          <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/70">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/70">Campaign</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white/70">Amount</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => (
                  <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white/60">{donation.date}</td>
                    <td className="px-6 py-4 text-sm text-white font-medium">{donation.campaign}</td>
                    <td className="px-6 py-4 text-sm text-white text-right font-bold">${donation.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-ada-red/10 to-transparent" />
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-white">Make Another Donation</h3>
              <p className="mb-5 text-white/60 text-sm">Continue your impact by supporting ongoing research.</p>
              <button className="px-5 py-2.5 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-ada-red/30 transition-all">
                Donate Now
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent" />
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-white">Create a Legacy</h3>
              <p className="mb-5 text-white/60 text-sm">Learn about planned giving and lasting impact.</p>
              <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-violet-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
