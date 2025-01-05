import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/about/HeroSection'), {
  loading: () => <div>Loading...</div>
});
const LeadershipShowcase = dynamic(() => import('@/components/about/LeadershipShowcase'), {
  loading: () => <div>Loading...</div>
});
const GroupStructure = dynamic(() => import('@/components/about/GroupStructure'), {
  loading: () => <div>Loading...</div>
});

/*const SustainabilitySection = dynamic(() => import('@/components/about/GroupStructure'), {
  loading: () => <div>Loading...</div>
});
/*const RoadmapSection = dynamic(() => import('@/components/about/RoadmapSection'), {
  loading: () => <div>Loading...</div>
});*/

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <LeadershipShowcase />
      <GroupStructure />
      {/*<SustainabilitySection />*/}
      {/*<RoadmapSection />*/}
    </main>
  );
}
