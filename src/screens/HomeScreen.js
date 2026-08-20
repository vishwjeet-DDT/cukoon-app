import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../theme";

const QUICK = [
  ["📍", "Locate Pod", "Find nearest pod"],
  ["🔓", "Pod Access", "Check & unlock"],
  ["📖", "Resources", "Guides & support"],
  ["🎓", "Knowledge Base", "Infant feeding"],
  ["🔔", "Updates", "Latest news"],
  ["💗", "About Us", "Our mission"],
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header />

      <View style={styles.banner}>
        <View style={styles.bannerIcon}>
          <Text style={{ fontSize: 20 }}>🎀</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Seemantham by Our Ikigai Foundation</Text>
          <Text style={styles.bannerSub}>Supporting mothers. Empowering lives.</Text>
          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Know More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.welcome}>Welcome back, Priya! 👋</Text>
      <Text style={styles.welcomeSub}>You're doing something beautiful today.</Text>

      <View style={styles.supportStrip}>
        <View style={{ flex: 1 }}>
          <Text style={styles.supportTitle}>Need Help?</Text>
          <Text style={styles.supportSub}>Connect with our care team or find resources.</Text>
        </View>
        <TouchableOpacity style={styles.supportBtn}>
          <Text style={styles.supportBtnText}>Get Support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionH}>Quick Access</Text>
        <Text style={styles.sectionV}>View All</Text>
      </View>

      <View style={styles.grid}>
        {QUICK.map(([icon, t, s]) => (
          <View key={t} style={styles.gridItem}>
            <View style={styles.gridIcon}>
              <Text style={{ fontSize: 16 }}>{icon}</Text>
            </View>
            <Text style={styles.gridT}>{t}</Text>
            <Text style={styles.gridS}>{s}</Text>
          </View>
        ))}
      </View>

      <View style={styles.impactBanner}>
        <Text style={styles.impactT}>Empowering Mothers. Building a Caring World.</Text>
        <Text style={styles.impactS}>
          Our Foundation's work towards health, happiness & dignity of every mother and child.
        </Text>
        <TouchableOpacity style={styles.impactBtn}>
          <Text style={styles.impactBtnText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chatFab}>
        <Text style={styles.chatFabText}>Need Help? Chat with our care team</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.chatBtnText}>Chat Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  banner: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 18,
    marginTop: 8,
    backgroundColor: COLORS.pinkLight,
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
  },
  bannerIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  bannerTitle: { fontSize: 13, fontWeight: "700", color: COLORS.text },
  bannerSub: { fontSize: 11, color: COLORS.muted, marginTop: 2 },
  bannerBtn: {
    marginTop: 6,
    backgroundColor: COLORS.pink,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  bannerBtnText: { color: "#fff", fontSize: 10, fontWeight: "700" },
  welcome: { fontSize: 14, fontWeight: "700", color: COLORS.text, marginHorizontal: 18, marginTop: 12 },
  welcomeSub: { fontSize: 11, color: COLORS.muted, marginHorizontal: 18, marginTop: 2 },
  supportStrip: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginTop: 10,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 14,
    padding: 12,
  },
  supportTitle: { fontSize: 12.5, fontWeight: "700", color: COLORS.text },
  supportSub: { fontSize: 10.5, color: COLORS.muted, marginTop: 2 },
  supportBtn: { backgroundColor: COLORS.pink, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 16 },
  supportBtnText: { color: "#fff", fontSize: 10.5, fontWeight: "700" },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 16,
    marginBottom: 6,
  },
  sectionH: { fontSize: 13, fontWeight: "700", color: COLORS.text },
  sectionV: { fontSize: 10.5, fontWeight: "700", color: COLORS.pink },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
    justifyContent: "space-between",
  },
  gridItem: {
    width: "31%",
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 14,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  gridIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: COLORS.pinkLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  gridT: { fontSize: 10.5, fontWeight: "700", color: COLORS.text, textAlign: "center" },
  gridS: { fontSize: 8.5, color: COLORS.muted, textAlign: "center", marginTop: 1 },
  impactBanner: {
    marginHorizontal: 18,
    marginTop: 6,
    borderRadius: 16,
    padding: 16,
    backgroundColor: COLORS.pink,
  },
  impactT: { fontSize: 13, fontWeight: "800", color: "#fff" },
  impactS: { fontSize: 10.5, color: "#fff", opacity: 0.9, marginTop: 4 },
  impactBtn: {
    marginTop: 10,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },
  impactBtnText: { color: COLORS.pinkDark, fontSize: 10.5, fontWeight: "700" },
  chatFab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 14,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 14,
    padding: 12,
  },
  chatFabText: { fontSize: 11.5, fontWeight: "700", color: COLORS.text, flex: 1 },
  chatBtn: { backgroundColor: COLORS.pink, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 14 },
  chatBtnText: { color: "#fff", fontSize: 10, fontWeight: "700" },
});
