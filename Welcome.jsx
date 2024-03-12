import { StyleSheet, View, Image } from "react-native";
import { heightD, widthD } from "./Constants";
const Welcome = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Layers')
  }, 5000);
  return (
    <View style={styles.abc}>
      <View>
        <Image
          style={{
            opacity: 0.2,
            width: widthD,
            height: heightD,
            backgroundColor: "red",
            position: "relative",
          }}
          source={require("./img/bg-card.png")}
        ></Image>
        <View
          style={{
            position: "absolute",
            width: widthD,
            height: heightD,
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: heightD / 4,
              right: widthD / 4,
              width: 200,
              height: 200,
            }}
            source={require("./img/ethereum.png")}
          ></Image>
          <Image
            style={{
              position: "absolute",
              top: heightD / 1.8,
              right: 100,
              width: 220,
              height: 220,
              borderRadius: 300,
            }}
            source={require("./img/moneyFlies.gif")}
          ></Image>
        </View>
      </View>
    </View>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  abc: {
    backgroundColor: "#cac7ba",
    width: widthD,
    height: heightD,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
