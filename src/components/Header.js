import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme";

export default function Header() {
  return (
    <View style={styles.row}>
      <View style={styles.avatar} />
      <View style={styles.logoWrap}>
        <Text style={styles.logo}>Cuk😊n</Text>
        <Text style={styles.tag}>FEEDING PODS</Text>
      </View>
      <View style={styles.bell} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.pinkSoft,
    borderWidth: 2,
    borderColor: COLORS.pink,
  },
  logoWrap: { alignItems: "center" },
  logo: { fontSize: 20, fontWeight: "800", color: COLORS.pink },
  tag: { fontSize: 8, color: COLORS.pinkDark, letterSpacing: 2, marginTop: -2 },
  bell: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: COLORS.line,
  },
});
