import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "search", label: "Search", icon: "🔍" },
    { id: "log", label: "Log", icon: "📝" },
    { id: "feed", label: "Feed", icon: "📰" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabChange(tab.id)}
        >
          <View
            style={[
              styles.iconCircle,
              activeTab === tab.id && styles.activeIconCircle,
            ]}
          >
            <Text style={styles.icon}>{tab.icon}</Text>
          </View>
          <Text
            style={[
              styles.label,
              activeTab === tab.id && styles.activeLabel,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
    paddingVertical: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: "#1a1a1a",
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  activeIconCircle: {
    backgroundColor: "#9333EA",
  },
  icon: {
    fontSize: 20,
  },
  label: {
    color: "#666",
    fontSize: 12,
  },
  activeLabel: {
    color: "#9333EA",
  },
});

