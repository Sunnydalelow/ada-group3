import { useAuthStore } from '@store/authStore';
import Hero from '@components/home/Hero';
import PopularTopics from '@components/home/PopularTopics';
import PersonalizedFeed from '@components/home/PersonalizedFeed';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

export default function Home() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div>
      <Hero />
      <DottedGlowBackground className="bg-white">
        {isAuthenticated ? <PersonalizedFeed /> : <PopularTopics />}
      </DottedGlowBackground>
    </div>
  );
}
