import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import {
  bgColorOrange,
  blueSpecial,
  heightD,
  widthD,
} from "../Constants/index";

const KayıtOl = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 33, fontWeight: "800", color: blueSpecial }}>
        Kayıt Ol
      </Text>
      <Text style={{ fontSize: 27, marginTop: 15, fontWeight: "bold" }}>
        Hesap Bilgileri
      </Text>
      <View style={{ borderWidth: 0.5 }}></View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>E-posta</Text>
        <TextInput
          placeholder="E-postanızı giriniz"
          placeholderTextColor={"grey"}
          inputMode="email"
          style={styles.input}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Telefon Numarası</Text>
        <TextInput
          placeholder="Telefon Numaranızı giriniz"
          placeholderTextColor={"grey"}
          inputMode="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Şifre</Text>
        <TextInput
          placeholder="Şifrenizi giriniz"
          placeholderTextColor={"grey"}
          secureTextEntry={true}
          inputMode="search"
          style={styles.input}
        />
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderRadius: 10,
            top: 360,
            backgroundColor: 'yellowgreen',
            opacity:0.9
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              padding: 8,
            }}
          >
            Devam Et
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KayıtOl;

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderColor: "black",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    width: widthD - 20,
    marginRight: 20,
    marginVertical: 5,
  },
  container: {
    width: widthD,
    height: heightD,
    backgroundColor: bgColorOrange,
    padding: 10,
  },
  viewStyle: { marginTop: 15 },
  textStyle: { fontSize: 21 },
});
