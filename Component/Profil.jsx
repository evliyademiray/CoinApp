import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { bgColorOrange, heightD, widthD } from "../Constants";
import { useNavigation } from "@react-navigation/native";
const Profil = ({navigation}) => {
  const navigate=useNavigation()
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={()=>navigation.navigate('Wallet')}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          Giriş Yapmak İçin Tıkla
        </Text>
        <Image
          style={styles.icon}
          source={require("../img/right-arrow.png")}
        ></Image>
      </TouchableOpacity>
      <View
        style={{
          padding: 10,
          gap: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: 'flex-start',
        }}
      >
        <View style={styles.iconTextContainer}>
          <Image
            style={styles.icon}
            source={require("../img/setting.png")}
          ></Image>
          <Text style={styles.iconText}>Ayarlar</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image style={styles.icon} source={require("../img/faq.png")}></Image>
          <Text style={styles.iconText}>Destek</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image
            style={styles.icon}
            source={require("../img/blog.png")}
          ></Image>
          <Text style={styles.iconText}>Blog</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image
            style={styles.icon}
            source={require("../img/about.png")}
          ></Image>
          <Text style={styles.iconText}>Hakkında</Text>
        </View>
      </View>
    </View>
  );
};

export default Profil;
const styles = StyleSheet.create({
  viewStyle: {
    width: widthD,
    height: heightD,
    backgroundColor: bgColorOrange,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
});
