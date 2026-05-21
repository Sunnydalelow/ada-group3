import { useAuthStore } from '@store/authStore';
import { mockResources } from '@data/mockResources';

export default function PatientDashboard() {
  const { user } = useAuthStore();

  const patientResources = mockResources.filter((r) => r.audience.includes('patient')).slice(0, 3);

  return (
    <div className="py-12">
      <div className="max-w-container mx-auto px-4">
        <h1 className="text-4xl font-bold text-ada-navy mb-2">Welcome back, {user?.name.split(' ')[0]}!</h1>
        <p className="text-ada-gray text-lg mb-8">Here's your personalized diabetes management hub</p>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-2xl font-bold mb-1">127</h3>
            <p className="text-white/80">Last Blood Sugar (mg/dL)</p>
            <p className="text-xs text-white/60 mt-2">2 hours ago</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-2xl font-bold mb-1">6.8%</h3>
            <p className="text-white/80">Current A1C</p>
            <p className="text-xs text-white/60 mt-2">Target: &lt;7%</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-2">💊</div>
            <h3 className="text-2xl font-bold mb-1">2</h3>
            <p className="text-white/80">Medications</p>
            <p className="text-xs text-white/60 mt-2">Next dose in 4 hours</p>
          </div>
        </div>

        {/* Recommended Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-ada-navy mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientResources.map((resource) => (
              <article key={resource.id} className="bg-white rounded-xl p-6 border border-ada-border">
                <h3 className="font-bold text-ada-navy mb-2">{resource.title}</h3>
                <p className="text-sm text-ada-gray mb-4">{resource.excerpt}</p>
                <button className="text-ada-blue hover:text-ada-red transition-colors text-sm font-medium">
                  Read more →
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-6 bg-white border border-ada-border rounded-xl hover:shadow-lg transition-all text-left">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-bold text-ada-navy mb-1">Log Reading</h3>
            <p className="text-sm text-ada-gray">Record blood sugar</p>
          </button>

          <button className="p-6 bg-white border border-ada-border rounded-xl hover:shadow-lg transition-all text-left">
            <div className="text-3xl mb-2">🍽️</div>
            <h3 className="font-bold text-ada-navy mb-1">Meal Planner</h3>
            <p className="text-sm text-ada-gray">Plan healthy meals</p>
          </button>

          <button className="p-6 bg-white border border-ada-border rounded-xl hover:shadow-lg transition-all text-left">
            <div className="text-3xl mb-2">👨‍⚕️</div>
            <h3 className="font-bold text-ada-navy mb-1">Ask Doctor</h3>
            <p className="text-sm text-ada-gray">Get medical advice</p>
          </button>

          <button className="p-6 bg-white border border-ada-border rounded-xl hover:shadow-lg transition-all text-left">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-bold text-ada-navy mb-1">View Trends</h3>
            <p className="text-sm text-ada-gray">Analyze your data</p>
          </button>
        </div>
      </div>
    </div>
  );
}
