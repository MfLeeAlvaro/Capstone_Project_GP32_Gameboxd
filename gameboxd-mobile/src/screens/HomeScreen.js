import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import GameSection from "../components/GameSection";
import GameCard from "../components/GameCard";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("home");

  // Mock game data - replace with real data from API later
  const featuredGame = {
    id: 1,
    title: "FORTNITE",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
  };

  const trendingGames = [
    {
      id: 2,
      title: "Dispatch",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
    },
    {
      id: 3,
      title: "Marvel Rivals",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400",
    },
    {
      id: 4,
      title: "HellDivers 2",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    },
  ];

  const recommendedGames = [
    {
      id: 5,
      title: "Wolfenstein 2",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
    },
    {
      id: 6,
      title: "Hollow Knight",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400",
    },
    {
      id: 7,
      title: "Undertale",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    },
  ];

  const recentlyPlayedGames = [
    {
      id: 8,
      title: "Minecraft",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    },
    {
      id: 9,
      title: "PVZ",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
    },
  ];

  const cyanBlue = "#00D9FF";
  const purplePink = "#E879F9";

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
            }}
            style={styles.headerBackground}
            imageStyle={styles.headerImage}
          >
            <Text style={styles.welcomeText}>Welcome back, Adrian</Text>
          </ImageBackground>
        </View>

        {/* Featured Game */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Game</Text>
          <View style={styles.featuredCardContainer}>
            <GameCard
              game={featuredGame}
              size="large"
              borderColor={purplePink}
            />
          </View>
        </View>

        {/* Trending */}
        <GameSection
          title="Trending"
          games={trendingGames}
          borderColors={[cyanBlue, purplePink, cyanBlue]}
        />

        {/* Recommended */}
        <GameSection
          title="Recommended"
          games={recommendedGames}
          borderColors={[purplePink, cyanBlue, purplePink]}
        />

        {/* Recently Played */}
        <GameSection
          title="Recently Played"
          games={recentlyPlayedGames}
          borderColors={[cyanBlue, purplePink]}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    marginBottom: 24,
  },
  headerBackground: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  headerImage: {
    opacity: 0.3,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  featuredSection: {
    marginBottom: 24,
  },
  featuredCardContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
});

