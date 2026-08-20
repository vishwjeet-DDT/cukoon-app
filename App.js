import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import LocateScreen from "./src/screens/LocateScreen";
import AssistantScreen from "./src/screens/AssistantScreen";
import SupportScreen from "./src/screens/SupportScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { COLORS } from "./src/theme";

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: "🏠",
  Locate: "📍",
  Assistant: "💗",
  Support: "❓",
  Profile: "👤",
};

function TabIcon({ route, focused }) {
  const isCenter = route.name === "Assistant";
  if (isCenter) {
    return (
      <View style={styles.centerIcon}>
        <Text style={{ fontSize: 18 }}>{ICONS[route.name]}</Text>
      </View>
    );
  }
  return (
    <Text style={{ fontSize: 16, opacity: focused ? 1 : 0.5 }}>{ICONS[route.name]}</Text>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: COLORS.pink,
          tabBarInactiveTintColor: COLORS.muted,
          tabBarLabelStyle: { fontSize: 9, fontWeight: "600" },
          tabBarStyle: { height: 64, paddingBottom: 10, paddingTop: 6 },
          tabBarIcon: ({ focused }) => <TabIcon route={route} focused={focused} />,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
        <Tab.Screen name="Locate" component={LocateScreen} options={{ title: "Locate Pod" }} />
        <Tab.Screen name="Assistant" component={AssistantScreen} options={{ title: "" }} />
        <Tab.Screen name="Support" component={SupportScreen} options={{ title: "Support" }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centerIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -18,
    shadowColor: COLORS.pink,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
});
