import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../theme";

const CATS = [
  ["🤱", "Breastfeeding"],
  ["🍼", "Pumping"],
  ["👶", "Baby Care"],
  ["🥗", "Nutrition"],
  ["💆", "Wellness"],
];

const RESOURCES = [
  ["Benefits of Breastfeeding", "5 min read · Article"],
  ["How to Use a Breast Pump Effectively", "7 min read · Guide"],
  ["Nutrition Tips for Breastfeeding Moms", "6 min read · Article"],
];

export default function SupportScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header />
      <Text style={styles.title}>Resources</Text>
      <Text style={styles.sub}>Helpful guides, tips and support for you and your baby.</Text>

      <View style={styles.searchBar}>
        <Text style={styles.searchText}>🔍 Search resources...</Text>
      </View>

      <View style={styles.catRow}>
        {CATS.map(([icon, t]) => (
          <View key={t} style={styles.cat}>
            <View style={styles.catIcon}>
              <Text style={{ fontSize: 16 }}>{icon}</Text>
            </View>
            <Text style={styles.catT}>{t}</Text>
          </View>
        ))}
      </View>

      <View style={styles.featured}>
        <Text style={styles.featuredTag}>FEATURED</Text>
        <Text style={styles.featuredT}>Getting Started with Breastfeeding</Text>
        <Text style={styles.featuredS}>Essential tips for new mothers to start with confidence.</Text>
        <TouchableOpacity style={styles.featuredBtn}>
          <Text style={styles.featuredBtnText}>Read More</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionH}>Top Resources</Text>
      {RESOURCES.map(([t, s]) => (
        <View key={t} style={styles.resItem}>
          <View style={styles.resThumb} />
          <View style={{ flex: 1 }}>
            <Text style={styles.resT}>{t}</Text>
            <Text style={styles.resS}>{s}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  title: { fontSize: 15, fontWeight: "800", color: COLORS.text, marginHorizontal: 18, marginTop: 6 },
  sub: { fontSize: 10.5, color: COLORS.muted, marginHorizontal: 18, marginTop: 2 },
  searchBar: {
    marginHorizontal: 18,
    marginTop: 12,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 14,
    padding: 12,
  },
  searchText: { fontSize: 12, color: COLORS.muted },
  catRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 18, marginTop: 14 },
  cat: { alignItems: "center", gap: 5, width: 56 },
  catIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: COLORS.pinkLight,
    alignItems: "center",
    justifyContent: "center",
  },
  catT: { fontSize: 8.5, color: COLORS.muted, fontWeight: "600", textAlign: "center" },
  featured: {
    marginHorizontal: 18,
    marginTop: 16,
    backgroundColor: COLORS.pink,
    borderRadius: 16,
    padding: 14,
  },
  featuredTag: { fontSize: 8, fontWeight: "800", color: "#fff", opacity: 0.85, letterSpacing: 1 },
  featuredT: { fontSize: 13.5, fontWeight: "800", color: "#fff", marginTop: 4 },
  featuredS: { fontSize: 10, color: "#fff", opacity: 0.9, marginTop: 4 },
  featuredBtn: {
    marginTop: 10,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  featuredBtnText: { color: COLORS.pinkDark, fontSize: 10, fontWeight: "700" },
  sectionH: { fontSize: 13, fontWeight: "700", color: COLORS.text, marginHorizontal: 18, marginTop: 16, marginBottom: 8 },
  resItem: { flexDirection: "row", gap: 10, marginHorizontal: 18, marginBottom: 10 },
  resThumb: { width: 50, height: 50, borderRadius: 10, backgroundColor: COLORS.pinkLight, marginRight: 10 },
  resT: { fontSize: 11.5, fontWeight: "700", color: COLORS.text },
  resS: { fontSize: 9, color: COLORS.muted, marginTop: 2 },
});
