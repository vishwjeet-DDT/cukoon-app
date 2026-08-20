import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../theme";

export default function LocateScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header />

      <Text style={styles.title}>Find the nearest{"\n"}Cukoon Feeding Pod</Text>
      <Text style={styles.sub}>Safe. Hygienic. Private.</Text>

      <View style={styles.searchBar}>
        <Text style={styles.searchText}>📍 Bangalore, Karnataka</Text>
      </View>

      <View style={styles.map}>
        <View style={styles.pin} />
        <Text style={[styles.mapLabel, { top: 20, left: 16 }]}>Indiranagar Metro</Text>
        <Text style={[styles.mapLabel, { bottom: 20, right: 20 }]}>Domlur Flyover</Text>
      </View>

      <View style={styles.podCard}>
        <View style={styles.podRow}>
          <View style={styles.podThumb} />
          <View style={{ flex: 1 }}>
            <Text style={styles.podT}>Cukoon Feeding Pod</Text>
            <Text style={styles.podS}>CMH Road, Indiranagar, Bengaluru · 150 mtrs away</Text>
          </View>
        </View>
        <View style={styles.featRow}>
          <View style={styles.featItem}>
            <Text style={styles.featIcon}>🔒</Text>
            <Text style={styles.featT}>Private</Text>
          </View>
          <View style={styles.featItem}>
            <Text style={styles.featIcon}>🛡️</Text>
            <Text style={styles.featT}>Hygienic</Text>
          </View>
          <View style={styles.featItem}>
            <Text style={styles.featIcon}>💗</Text>
            <Text style={styles.featT}>Comfortable</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.dirBtn}>
        <Text style={styles.dirBtnText}>📍 Directions (2 min walk)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  title: { fontSize: 16, fontWeight: "800", color: COLORS.text, marginHorizontal: 18, marginTop: 8 },
  sub: { fontSize: 10.5, color: COLORS.muted, marginHorizontal: 18, marginTop: 4 },
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
  map: {
    marginHorizontal: 18,
    marginTop: 12,
    height: 200,
    borderRadius: 16,
    backgroundColor: "#E4E9F0",
    borderWidth: 1,
    borderColor: COLORS.line,
    overflow: "hidden",
  },
  pin: {
    position: "absolute",
    top: "45%",
    left: "46%",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: COLORS.pink,
  },
  mapLabel: { position: "absolute", fontSize: 9, color: "#7c8aa0", fontWeight: "600" },
  podCard: {
    marginHorizontal: 18,
    marginTop: 14,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 16,
    padding: 14,
  },
  podRow: { flexDirection: "row", alignItems: "center" },
  podThumb: { width: 48, height: 48, borderRadius: 12, backgroundColor: COLORS.pinkLight, marginRight: 10 },
  podT: { fontSize: 12.5, fontWeight: "700", color: COLORS.text },
  podS: { fontSize: 10, color: COLORS.muted, marginTop: 2 },
  featRow: { flexDirection: "row", marginTop: 12, justifyContent: "space-around" },
  featItem: { alignItems: "center" },
  featIcon: { fontSize: 15, color: COLORS.pink, marginBottom: 3 },
  featT: { fontSize: 9, color: COLORS.muted, fontWeight: "600" },
  dirBtn: {
    marginHorizontal: 18,
    marginTop: 14,
    backgroundColor: COLORS.pink,
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
  },
  dirBtnText: { color: "#fff", fontSize: 12.5, fontWeight: "700" },
});
