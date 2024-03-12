import { StyleSheet, Image } from "react-native";
import { CoinProvider } from "./ContextCoin/ContextCoin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Veriler from "./src/Veriler";
import BuySell from "./Component/BuySell";
import Bar from "./Component/Bar";
import Main from "./Component/Main";
import Wallet from "./Component/Wallet";
import { bgColorOrange, heightD, widthD } from "./Constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Layers = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.veri}>
      <CoinProvider>
        <Tab.Navigator
          safeAreaInsets={{ bottom: 0 }}
          sceneContainerStyle={{ overflow: "visible" }}
          screenOptions={{
            tabBarInactiveBackgroundColor: bgColorOrange,
            tabBarActiveBackgroundColor: "#be8710",
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: { fontWeight: "bold", fontSize: 14 },
            tabBarStyle: { height: 70 },
          }}
        >
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("./img/home2.png")}
                  />
                );
              },
            }}
            name="Anasayfa"
            component={Veriler}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("./img/bar.png")}
                  />
                );
              },
            }}
            name="Piyasalar"
            component={Bar}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("./img/ethereum.png")}
                  />
                );
              },
            }}
            name="Hızlı Menü"
            component={Main}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("./img/coin.png")}
                  />
                );
              },
            }}
            name="Al - Sat"
            component={BuySell}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("./img/wallet.png")}
                  />
                );
              },
            }}
            name="Cüzdan"
            component={Wallet}
          />
        </Tab.Navigator>
      </CoinProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  veri: {
    backgroundColor: bgColorOrange,
    height: heightD,
    width: widthD,
  },
});
export default Layers;
