import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { bgColorOrange, blueSpecial, heightD, widthD } from "../Constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TRY from "../Component/PiyasaTabSelect/TRY";
import USDT from "../Component/PiyasaTabSelect/USDT";
import EURO from "./PiyasaTabSelect/EURO";
import BTC from "./PiyasaTabSelect/BTC";
const Bar = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View
      style={{
        padding: 7,
        backgroundColor: bgColorOrange,
        width: widthD,
        height: heightD,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput placeholder="İşlem çifti ara " style={styles.input} />
        <Image
          style={{ width: 26, height: 26, position: "relative", left: 5 }}
          source={require("../img/search.png")}
        ></Image>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../img/document.png")}
        />
      </View>
      <Tab.Navigator
        safeAreaInsets={{ bottom: 0 }}
        sceneContainerStyle={{ overflow: "visible" }}
        screenOptions={{
          tabBarInactiveBackgroundColor: bgColorOrange,
          tabBarActiveTintColor: blueSpecial,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarStyle: {
            height: 45,
            marginTop: 10,
            backgroundColor: bgColorOrange,
          },
        }}
      >
        <Tab.Screen name="TRY" component={TRY} />
        <Tab.Screen name="USDT" component={USDT} />
        <Tab.Screen name="EURO" component={EURO} />
        <Tab.Screen name="BTC" component={BTC} />
      </Tab.Navigator>
    </View>
  );
};

export default Bar;
const styles = StyleSheet.create({
  input: {
    height: 35,
    borderColor: "black",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 40,
    width: widthD - 50,
    marginRight: 20,
    position: "absolute",
  },
});
