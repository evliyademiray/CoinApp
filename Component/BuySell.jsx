import { Image, StyleSheet, Text, View } from "react-native";
import { bgColorOrange, heightD, widthD } from "../Constants/index";
const BuySell = () => {
  return (
    <View style={styles.viewStyle}>
      <Image
        style={{
          display: "flex",
          justifyContent: "center",
          width: 300,
          height: 300,
          borderRadius: 200,
          top: 200,
        }}
        source={require("../img/bakımgif.gif")}
      ></Image>
      <Text style={{ top: 250, fontWeight: "900", fontSize: 33 }}>
        Bu Sayfa Bakımda
      </Text>
    </View>
  );
};
export default BuySell;
const styles = StyleSheet.create({
  viewStyle: {
    width: widthD,
    height: heightD,
    backgroundColor: bgColorOrange,
    display: "flex",
    alignItems: "center",
  },
});
