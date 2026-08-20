import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../theme";

const TRUSTEES = [
  ["Sujitha Krishnan", "Founder Trustee"],
  ["Venu Ravindran", "Founder Trustee"],
  ["Dr. Jija M", "Advisory Board"],
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.sub}>Our Foundation, Our People, Our Purpose</Text>

      <View style={styles.aboutCard}>
        <View style={styles.aboutLogo}>
          <Text style={{ fontSize: 20 }}>🌸</Text>
        </View>
        <Text style={styles.aboutT}>About Our Ikigai Foundation</Text>
        <Text style={styles.aboutS}>
          A non-profit committed to nurturing the health, happiness & dignity of every mother and child.
        </Text>
      </View>

      <Text style={styles.sectionH}>Our Trustees</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 18 }}>
        {TRUSTEES.map(([name, role]) => (
          <View key={name} style={styles.trustee}>
            <View style={styles.trusteePhoto} />
            <Text style={styles.trusteeT}>{name}</Text>
            <Text style={styles.trusteeS}>{role}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  title: { fontSize: 15, fontWeight: "800", color: COLORS.text, marginHorizontal: 18, marginTop: 6 },
  sub: { fontSize: 10.5, color: COLORS.muted, marginHorizontal: 18, marginTop: 2 },
  aboutCard: {
    marginHorizontal: 18,
    marginTop: 14,
    backgroundColor: COLORS.pinkLight,
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
  },
  aboutLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  aboutT: { fontSize: 13, fontWeight: "800", color: COLORS.text },
  aboutS: { fontSize: 10, color: COLORS.muted, marginTop: 6, textAlign: "center", lineHeight: 15 },
  sectionH: { fontSize: 13, fontWeight: "700", color: COLORS.text, marginHorizontal: 18, marginTop: 16, marginBottom: 8 },
  trustee: {
    width: 110,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 14,
    padding: 10,
    alignItems: "center",
    marginRight: 10,
  },
  trusteePhoto: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.pinkSoft, marginBottom: 6 },
  trusteeT: { fontSize: 10.5, fontWeight: "700", color: COLORS.text, textAlign: "center" },
  trusteeS: { fontSize: 8, color: COLORS.muted, marginTop: 2, textAlign: "center" },
});
