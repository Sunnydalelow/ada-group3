import { useAuthStore } from '@store/authStore';
import Hero from '@components/home/Hero';
import QuickActions from '@components/home/QuickActions';
import PopularTopics from '@components/home/PopularTopics';
import PersonalizedFeed from '@components/home/PersonalizedFeed';
import AudienceSelector from '@components/common/AudienceSelector';

export default function Home() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div>
      <Hero />
      {!isAuthenticated && <AudienceSelector />}
      <QuickActions />
      {isAuthenticated ? <PersonalizedFeed /> : <PopularTopics />}
    </div>
  );
}
