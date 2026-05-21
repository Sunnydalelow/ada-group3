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
    <section id="quick-actions" className="py-16">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ada-navy mb-8">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="group p-6 bg-white border border-ada-border rounded-xl hover:shadow-lg hover:border-ada-blue transition-all duration-300"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{action.icon}</div>
              <h3 className="text-lg font-bold text-ada-navy mb-2 group-hover:text-ada-blue transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-ada-gray">{action.description}</p>
              <div className="mt-4 text-ada-blue text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
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
