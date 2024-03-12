import { StyleSheet, Text, View } from "react-native";
import { widthD } from "../Constants";
import millify from "millify";

const NamePrice = ({ item }) => {
  const evo = item.changeRate < 0 ? "red" : "green";
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 12, width: 110 }}>
        <Text style={{ fontWeight: "bold", fontSize: 12, color: "#fff" }}>
          -{item.Ccode}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 12, color: "#EAECEF" }}>
          {item.ShortName}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>
          {item.selling} {item.Mcode}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: evo }}>
          %{item.changeRate.toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent:'center',
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>
         Vol: {millify(Number(item.volume))}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>
         Updated: {(item.lastupdate).slice(11,16)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: widthD - 30,
    height: 80,
    backgroundColor: "#0c0e12b3",
    margin: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default NamePrice;
