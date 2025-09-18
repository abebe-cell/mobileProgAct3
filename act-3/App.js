import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* ---------- Reusable Components ---------- */
const Box = ({ color, flex = 1, style }) => {
  return <View style={[styles.box, { backgroundColor: color, flex }, style]} />;
};

const Row = ({ children, style }) => (
  <View style={[styles.row, style]}>{children}</View>
);

const Phone = ({ children }) => <View style={styles.phone}>{children}</View>;

/* ---------- Screens ---------- */
function Phone1() {
  return (
    <Phone>
      <Row>
        <Box color="pink" style={{ marginRight: 5 }} />
        <Box color="grey" style={{ marginHorizontal: 5 }} />
        <Box color="purple" style={{ marginLeft: 5 }} />
      </Row>

      <Box color="darkgreen" style={{ marginVertical: 5, flex: 0.5 }} />

      <Row>
        <Box color="pink" style={{ marginRight: 5 }} />
        <Box color="purple" style={{ marginLeft: 5 }} />
      </Row>

      <View
        style={[styles.box, { backgroundColor: "gray", padding: 10, flex: 2 }]}
      >
        <Row>
          <Box color="skyblue" />
        </Row>
        <Row>
          <Box color="skyblue" style={{ marginRight: 5 }} />
          <Box color="skyblue" style={{ marginLeft: 5 }} />
        </Row>
        <Row>
          <Box color="steelblue" />
        </Row>
      </View>

      <Box color="skyblue" style={{ marginTop: 10, flex: 0.5 }} />
    </Phone>
  );
}

function Phone2() {
  return (
    <Phone>
      <Box color="darkgreen" style={{ marginVertical: 5, flex: 0.5 }} />

      <Row>
        <Box color="pink" style={{ marginRight: 5 }} />
        <Box color="pink" style={{ marginLeft: 5 }} />
      </Row>
      <Row>
        <Box color="violet" style={{ marginRight: 5 }} />
        <Box color="violet" style={{ marginLeft: 5 }} />
      </Row>

      <Box color="darkgreen" style={{ marginVertical: 5, flex: 0.5 }} />
      <Box color="steelblue" style={{ marginVertical: 5, flex: 0.4 }} />

      <Row>
        <Box color="skyblue" style={{ marginRight: 5 }} />
        <Box color="skyblue" style={{ marginHorizontal: 5 }} />
        <Box color="skyblue" style={{ marginHorizontal: 5 }} />
        <Box color="skyblue" style={{ marginLeft: 5 }} />
      </Row>

      <Box color="darkgreen" style={{ marginTop: 10, flex: 1 }} />
    </Phone>
  );
}

/* ---------- Navigation ---------- */
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Phone 1" component={Phone1} />
        <Tab.Screen name="Phone 2" component={Phone2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  phone: {
    flex: 1, // Full screen
    backgroundColor: "white",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
    flex: 1,
  },
  box: {
    borderRadius: 8,
  },
});
