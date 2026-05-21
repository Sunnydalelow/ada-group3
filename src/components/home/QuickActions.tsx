import { Link } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

export default function QuickActions() {
  const { selectedAudience, user } = useAuthStore();
  const audience = user?.type || selectedAudience;

  const patientActions = [
    { icon: '📊', title: 'Track Blood Sugar', description: 'Log and monitor your glucose levels', link: '#' },
    { icon: '📚', title: 'Learn About A1C', description: 'Understanding your test results', link: '/resources' },
    { icon: '🍽️', title: 'Meal Planning', description: 'Healthy eating guides and recipes', link: '/resources' },
    { icon: '💊', title: 'Medications Guide', description: 'Information about diabetes medications', link: '/resources' },
  ];

  const donorActions = [
    { icon: '💝', title: 'Make a Donation', description: 'Support diabetes research and programs', link: '#' },
    { icon: '📈', title: 'Impact Report', description: 'See how your donations make a difference', link: '/resources' },
    { icon: '🏢', title: 'Corporate Giving', description: 'Partner with ADA through your company', link: '/resources' },
    { icon: '🎁', title: 'Planned Giving', description: 'Create a lasting legacy', link: '/resources' },
  ];

  const volunteerActions = [
    { icon: '📅', title: 'Upcoming Events', description: 'Find events near you to volunteer', link: '#' },
    { icon: '👥', title: 'Join a Team', description: 'Connect with other volunteers', link: '#' },
    { icon: '📢', title: 'Advocacy', description: 'Make your voice heard for diabetes policy', link: '/resources' },
    { icon: '🎓', title: 'Training', description: 'Access volunteer resources and guides', link: '/resources' },
  ];

  const defaultActions = [
    { icon: '🔍', title: 'Search Resources', description: 'Find articles, guides, and tools', link: '/resources' },
    { icon: '💬', title: 'Get Support', description: 'Contact our help team', link: '/support' },
    { icon: '📖', title: 'Learn About Diabetes', description: 'Understanding diabetes basics', link: '/resources' },
    { icon: '🤝', title: 'Get Involved', description: 'Ways to support ADA', link: '#' },
  ];

  const actions =
    audience === 'patient'
      ? patientActions
      : audience === 'donor'
      ? donorActions
      : audience === 'volunteer'
      ? volunteerActions
      : defaultActions;

  return (
    <section className="py-16 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-ada-near-black mb-2">Quick Actions</h2>
        <p className="text-ada-muted-gray text-lg mb-8">Get started with what matters most to you</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="group glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ada-red/10 to-ada-red-bright/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{action.icon}</span>
              </div>
              <h3 className="text-base font-bold text-ada-near-black mb-1.5 group-hover:text-ada-red transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-ada-muted-gray leading-relaxed">{action.description}</p>
              <div className="mt-4 text-ada-red text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Get started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
