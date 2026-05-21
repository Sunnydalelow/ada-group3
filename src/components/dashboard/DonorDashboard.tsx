import { useAuthStore } from '@store/authStore';

export default function DonorDashboard() {
  const { user } = useAuthStore();

  const donations = [
    { date: '2024-03-15', amount: 100, campaign: 'General Fund' },
    { date: '2024-02-10', amount: 250, campaign: 'Research Initiative' },
    { date: '2024-01-20', amount: 50, campaign: 'Camp Scholarships' },
  ];

  return (
    <div className="py-12">
      <div className="max-w-container mx-auto px-4">
        <h1 className="text-4xl font-bold text-ada-navy mb-2">Thank you, {user?.name.split(' ')[0]}!</h1>
        <p className="text-ada-gray text-lg mb-8">Your generosity is making a real difference in the fight against diabetes</p>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-ada-red to-red-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">💝</div>
            <h3 className="text-3xl font-bold mb-1">$400</h3>
            <p className="text-white/90">Total Donated</p>
            <p className="text-xs text-white/70 mt-2">Last 12 months</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">🔬</div>
            <h3 className="text-3xl font-bold mb-1">2</h3>
            <p className="text-white/90">Research Projects Funded</p>
            <p className="text-xs text-white/70 mt-2">Through your contributions</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-3xl font-bold mb-1">150+</h3>
            <p className="text-white/90">People Helped</p>
            <p className="text-xs text-white/70 mt-2">Educational programs supported</p>
          </div>
        </div>

        {/* Donation History */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-ada-navy mb-6">Your Recent Donations</h2>
          <div className="bg-white rounded-xl border border-ada-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-ada-light">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-ada-navy">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-ada-navy">Campaign</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-ada-navy">Amount</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => (
                  <tr key={index} className="border-t border-ada-border">
                    <td className="px-6 py-4 text-sm text-ada-gray">{donation.date}</td>
                    <td className="px-6 py-4 text-sm text-ada-navy">{donation.campaign}</td>
                    <td className="px-6 py-4 text-sm text-ada-navy text-right font-medium">
                      ${donation.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-ada-navy to-ada-blue text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">💚 Make Another Donation</h3>
            <p className="mb-6 text-white/90">
              Continue your impact by supporting our ongoing research and education programs.
            </p>
            <button className="px-6 py-3 bg-white text-ada-navy rounded-lg hover:bg-white/90 transition-colors font-medium">
              Donate Now
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">🎁 Create a Legacy</h3>
            <p className="mb-6 text-white/90">
              Learn about planned giving and how you can create a lasting impact.
            </p>
            <button className="px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-white/90 transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
