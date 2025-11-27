import Header from "@/src/components/Header";
import FeaturedGame from "@/src/components/FeaturedGame";
import GameSection from "@/src/components/GameSection";

export default function Home() {
  const trendingGames = [
    { title: "Dispatch" },
    { title: "Dispatch" },
    { title: "Dispatch" },
  ];

  const recommendedGames = [
    { title: "Dispatch" },
    { title: "Dispatch" },
    { title: "Dispatch" },
  ];

  const recentlyPlayedGames = [
    { title: "Dispatch" },
    { title: "Dispatch" },
    { title: "Dispatch" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-8">
        <div className="px-8 mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome back, Adrian</h1>
        </div>

        <FeaturedGame />
        
        <GameSection 
          title="Trending" 
          games={trendingGames}
          borderColor="purple"
        />
        
        <GameSection 
          title="Recommended" 
          games={recommendedGames}
          borderColor="blue"
        />
        
        <GameSection 
          title="Recently Played" 
          games={recentlyPlayedGames}
          borderColor="purple"
        />
      </main>
    </div>
  );
}
