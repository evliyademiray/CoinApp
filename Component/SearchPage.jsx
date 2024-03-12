import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { bgColorOrange, blueSpecial, heightD, widthD } from "../Constants";
import { useContext, useState } from "react";
import NamePrice from "../src/NamePrice";
import { CoinContext } from "../ContextCoin/ContextCoin";
const SearchPage = () => {
  const { data } = useContext(CoinContext);
  const [arama, setArama] = useState("");
  const filterData = data.filter((i) =>
    i.ShortName.toLowerCase().includes(arama.toLowerCase())
  );
  const handleSubmit = () => {};
  return (
    <View style={styles.searchPageStyle}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => setArama(text)}
          value={arama}
          placeholder="Lütfen coin giriniz"
        />
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: 15,
            top: 6,
          }}
          onPressOut={handleSubmit}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: blueSpecial }}>
            Ara
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ top: 20, left: -5 }}>
        <FlatList
          data={filterData}
          renderItem={({ item }) => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <NamePrice item={item} />
            </View>
          )}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};
export default SearchPage;
const styles = StyleSheet.create({
  searchPageStyle: {
    backgroundColor: bgColorOrange,
    height: heightD,
    width: widthD,
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    height: 45,
    width: widthD - 85,
    borderColor: "black",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
