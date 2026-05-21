import { useAuthStore } from '@store/authStore';

export default function Hero() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <section className="bg-gradient-to-br from-ada-navy via-ada-navy to-ada-red text-white py-20">
      <div className="max-w-container mx-auto px-4">
        <div className="max-w-3xl">
          {isAuthenticated && user ? (
            <>
              <h1 className="text-5xl font-bold mb-6">
                Welcome back, {user.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your personalized help center is ready. We've curated resources based on your interests
                and recent activity.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-5xl font-bold mb-6">
                Your trusted resource for diabetes help & support
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Find answers, connect with support, and access the resources you need — all in one place.
              </p>
            </>
          )}

          <div className="flex gap-4">
            <a
              href="#quick-actions"
              className="px-8 py-3 bg-white text-ada-red rounded-lg hover:bg-white/90 transition-colors font-medium"
            >
              Get Started
            </a>
            <a
              href="#popular-topics"
              className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-medium border border-white/30"
            >
              Browse Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
