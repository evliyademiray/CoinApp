import React, { useContext } from "react";
import { CoinContext } from "../ContextCoin/ContextCoin";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useFonts } from "expo-font";
import { bgColorOrange, heightD, widthD } from "../Constants";
import NamePrice from "./NamePrice";
import { useNavigation } from "@react-navigation/native";
const Veriler = ({navigate}) => {
  const navigation=useNavigation()
  const { data } = useContext(CoinContext);
  const [fontsLoaded] = useFonts({
    Roboto: require("../img/Roboto/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <SafeAreaView style={styles.veri}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: widthD,
          paddingRight: 15,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            source={require("../img/ethereum.png")}
          ></Image>
          <Text style={{ fontSize: 36, fontFamily: "Roboto" }}>Moneybu</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPressOut={() => navigation.navigate('SearchPage')}>
            <Image
              style={styles.icon}
              source={require("../img/search.png")}
            ></Image>
          </TouchableOpacity>
          <Image style={styles.icon} source={require("../img/qr.png")}></Image>
          <Image
            style={styles.icon}
            source={require("../img/headset.png")}
          ></Image>
         
          <TouchableOpacity onPressOut={() => navigation.navigate('Profil')}>
          <Image
            style={styles.icon}
            source={require("../img/person.png")}
          ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {data && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <NamePrice item={item} />
              </View>
            )}
            estimatedItemSize={100}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  icon: { width: 30, height: 30 },
  veri: {
    flex: 1,
    backgroundColor: bgColorOrange,
    color: "white",
    width: widthD,
    height: heightD,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
export default Veriler;
