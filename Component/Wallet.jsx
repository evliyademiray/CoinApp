import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { bgColorOrange, blueSpecial, heightD, widthD } from "../Constants";
import { useNavigation } from "@react-navigation/native";

const Wallet = ({ navigation }) => {
  const navigate = useNavigation();
  return (
    <View style={styles.walletPage}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("KayıtOl")}>
          <Text style={{ fontSize: 26, fontWeight: 700, color: blueSpecial }}>
            Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 26, fontWeight: 700 }}>Giriş Yap</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 700, marginTop: 20 }}>
        E-Posta/TCKN
      </Text>
      <TextInput
        placeholder="Lütfen e-posta veya TCKN giriniz "
        style={styles.input}
      />
      <Text style={{ fontSize: 20, fontWeight: 700, marginTop: 10 }}>
        Giriş Şifresi
      </Text>
      <TextInput
        placeholder="Lütfen şifre giriniz "
        secureTextEntry={true}
        style={styles.input}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: blueSpecial,
            fontWeight: "bold",
            marginTop: 20,
            fontSize: 20,
          }}
        >
          Şifrenizi mi unuttunuz?
        </Text>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../img/right.png")}
        />
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  walletPage: {
    backgroundColor: bgColorOrange,
    borderWidth: 2,
    width: widthD,
    height: heightD,
    gap: 10,
    padding: 10,
  },
  input: {
    height: 45,
    borderColor: "black",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
