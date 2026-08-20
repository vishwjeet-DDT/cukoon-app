import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../theme";

const TOPICS = [
  ["🤱", "Breastfeeding Basics", "Latching, positioning & more"],
  ["🍼", "Pumping & Milk Expression", "How to pump and store milk"],
  ["🥗", "Nutrition & Diet", "Healthy eating tips"],
  ["👶", "Baby Care", "Growth, sleep & hygiene"],
];

export default function AssistantScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header />
      <Text style={styles.title}>Cukoon AI Assistant ✨</Text>
      <Text style={styles.sub}>Your personal support companion</Text>

      <View style={styles.introCard}>
        <View style={styles.botCircle}>
          <Text style={{ fontSize: 16 }}>🤖</Text>
        </View>
        <Text style={styles.introT}>Hi Priya! 👋</Text>
        <Text style={styles.introS}>
          I'm Cukoon AI, here to support you with trusted information and guide you through your
          breastfeeding journey.
        </Text>
        <View style={styles.tagRow}>
          {["Trusted Information", "Private & Secure", "Available 24/7"].map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionH}>How can I help you today?</Text>

      {TOPICS.map(([icon, t, s]) => (
        <View key={t} style={styles.topicItem}>
          <View style={styles.topicIcon}>
            <Text style={{ fontSize: 15 }}>{icon}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.topicT}>{t}</Text>
            <Text style={styles.topicS}>{s}</Text>
          </View>
        </View>
      ))}

      <View style={styles.chatInput}>
        <Text style={styles.chatInputText}>Ask anything about breastfeeding...</Text>
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={{ color: "#fff", fontSize: 12 }}>➤</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  title: { fontSize: 14, fontWeight: "800", color: COLORS.text, textAlign: "center", marginTop: 4 },
  sub: { fontSize: 10, color: COLORS.muted, textAlign: "center", marginTop: 2 },
  introCard: {
    marginHorizontal: 18,
    marginTop: 12,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 16,
    padding: 14,
  },
  botCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  introT: { fontSize: 13, fontWeight: "700", color: COLORS.text },
  introS: { fontSize: 10.5, color: COLORS.muted, marginTop: 4, lineHeight: 15 },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 10 },
  tag: { backgroundColor: COLORS.pinkLight, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  tagText: { fontSize: 8.5, color: COLORS.pinkDark, fontWeight: "700" },
  sectionH: { fontSize: 13, fontWeight: "700", color: COLORS.text, marginHorizontal: 18, marginTop: 16, marginBottom: 8 },
  topicItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginBottom: 8,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 14,
    padding: 12,
  },
  topicIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: COLORS.pinkLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  topicT: { fontSize: 12, fontWeight: "700", color: COLORS.text },
  topicS: { fontSize: 9.5, color: COLORS.muted },
  chatInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 10,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 20,
    padding: 12,
  },
  chatInputText: { fontSize: 11, color: COLORS.muted },
  sendBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
  },
});
