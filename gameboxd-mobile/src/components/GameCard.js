import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function GameCard({ game, size = "medium", borderColor = "#00D9FF" }) {
  const cardStyle = size === "large" ? styles.largeCard : styles.mediumCard;
  const imageStyle = size === "large" ? styles.largeImage : styles.mediumImage;
  
  return (
    <View style={[styles.shadowContainer, { shadowColor: borderColor }]}>
      <TouchableOpacity 
        style={[cardStyle, { borderColor }]}
        activeOpacity={0.9}
      >
        <Image 
          source={{ uri: game.image }} 
          style={imageStyle}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.gameTitle}>{game.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 12,
  },
  largeCard: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    borderWidth: 2,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
  },
  mediumCard: {
    width: 150,
    height: 200,
    borderRadius: 12,
    borderWidth: 2,
    overflow: "hidden",
    marginRight: 16,
    backgroundColor: "#1a1a1a",
  },
  largeImage: {
    width: "100%",
    height: "100%",
  },
  mediumImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 12,
  },
  gameTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
