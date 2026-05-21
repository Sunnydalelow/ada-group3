import { useAuthStore } from '@store/authStore';
import Hero from '@components/home/Hero';
import PopularTopics from '@components/home/PopularTopics';
import PersonalizedFeed from '@components/home/PersonalizedFeed';

export default function Home() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div>
      <Hero />
      {isAuthenticated ? <PersonalizedFeed /> : <PopularTopics />}
    </div>
  );
}
