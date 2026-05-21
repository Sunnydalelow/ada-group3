import { useAuthStore } from '@store/authStore';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

export default function DonorDashboard() {
  const { user } = useAuthStore();

  const donations = [
    { date: '2024-03-15', amount: 100, campaign: 'General Fund' },
    { date: '2024-02-10', amount: 250, campaign: 'Research Initiative' },
    { date: '2024-01-20', amount: 50, campaign: 'Camp Scholarships' },
  ];

  return (
    <DottedGlowBackground className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome banner */}
          <div className="glass-card rounded-2xl p-8 mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ada-red/5 to-emerald-500/5" />
            <div className="relative flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&h=120&fit=crop&crop=face"
                alt="Donor"
                className="w-16 h-16 rounded-2xl object-cover shadow-md hidden sm:block"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-1">
                  Thank you, {user?.name.split(' ')[0]}!
                </h1>
                <p className="text-ada-muted-gray text-lg">Your generosity is making a real difference</p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-ada-red to-ada-red-bright text-white shadow-lg shadow-ada-red/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Total Donated</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">💝</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">$400</h3>
              <p className="text-white/70 text-sm">Last 12 months</p>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">Research Funded</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">🔬</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">2</h3>
              <p className="text-white/70 text-sm">Projects supported</p>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/80">People Helped</span>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">👥</div>
              </div>
              <h3 className="text-3xl font-bold mb-0.5">150+</h3>
              <p className="text-white/70 text-sm">Through your contributions</p>
            </div>
          </div>

          {/* Donation History */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ada-near-black mb-6">Recent Donations</h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ada-dark-gray">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ada-dark-gray">Campaign</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-ada-dark-gray">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((donation, index) => (
                    <tr key={index} className="border-b border-gray-50 last:border-0">
                      <td className="px-6 py-4 text-sm text-ada-muted-gray">{donation.date}</td>
                      <td className="px-6 py-4 text-sm text-ada-dark-gray font-medium">{donation.campaign}</td>
                      <td className="px-6 py-4 text-sm text-ada-near-black text-right font-bold">${donation.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-ada-near-black to-ada-near-black/90 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-ada-red/10 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">Make Another Donation</h3>
                <p className="mb-5 text-white/70 text-sm">Continue your impact by supporting ongoing research.</p>
                <button className="px-5 py-2.5 bg-white text-ada-near-black rounded-xl font-medium text-sm hover:shadow-lg transition-all">
                  Donate Now
                </button>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-violet-600 to-violet-700 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">Create a Legacy</h3>
                <p className="mb-5 text-white/70 text-sm">Learn about planned giving and lasting impact.</p>
                <button className="px-5 py-2.5 bg-white text-violet-700 rounded-xl font-medium text-sm hover:shadow-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DottedGlowBackground>
  );
}
