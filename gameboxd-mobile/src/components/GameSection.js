import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import GameCard from "./GameCard";

export default function GameSection({ title, games, borderColors }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {games.map((game, index) => (
          <GameCard
            key={game.id || index}
            game={game}
            size={title === "Featured Game" ? "large" : "medium"}
            borderColor={borderColors[index % borderColors.length]}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
});

