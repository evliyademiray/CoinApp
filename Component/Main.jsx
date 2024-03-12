import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { widthD, heightD, bgColorOrange } from "../Constants/index";
import { useNavigation } from "@react-navigation/native";
const Main = ({ navigation }) => {
  const navigate = useNavigation();
  return (
    <View
      style={{ backgroundColor: bgColorOrange, width: widthD, height: heightD }}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.viewStyle}>
            <Image
              style={styles.iconStyle}
              source={require("../img/tl-deposit-bg.png")}
            ></Image>
            <Text
              style={{
                fontSize: 20,
                width: 100,
                textAlign: "center",
              }}
            >
              Türk Lirası Yatırma
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("KayıtOl")}
          style={{
            borderRadius: 10,
            borderWidth: 2,
            backgroundColor: bgColorOrange,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              padding: 10,
            }}
          >
            Kaydol/Giriş Yap
          </Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={styles.viewStyle}>
              <Image
                style={{ width: 75, height: 60 }}
                source={require("../img/kripto-yatırma.png")}
              ></Image>
              <Text
                style={{
                  fontSize: 20,
                  width: 100,
                  textAlign: "center",
                }}
              >
                Kripto Yatırma
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.viewStyle}>
              <Image
                style={styles.iconStyle}
                source={require("../img/transfer.png")}
              ></Image>
              <Text
                style={{
                  fontSize: 20,
                  width: 100,
                  textAlign: "center",
                }}
              >
                Moneybu Transfer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  iconStyle: { width: 45, height: 45 },
  container: {
    width: widthD,
    height: heightD,
    backgroundColor: bgColorOrange,
    display: "flex",
    alignItems: "center",
    top: 160,
  },
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080b7",
    borderRadius: 90,
    padding: 20,
    margin: 20,
  },
});
