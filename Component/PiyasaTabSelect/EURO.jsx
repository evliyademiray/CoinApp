import { FlatList, StyleSheet, Text, View } from "react-native";
import { bgColorOrange, heightD, widthD } from "../../Constants";
import { ScrollView } from "react-native-virtualized-view";
import { useContext } from "react";
import { CoinContext } from "../../ContextCoin/ContextCoin";
import NamePrice from "../../src/NamePrice";

const EURO = () => {
  const { data } = useContext(CoinContext);
  const EUROFilter = data.filter((i) => i.Mcode.includes("EUR"));
  return (
    <View
      style={{ backgroundColor: bgColorOrange, width: widthD, height: heightD }}
    >
      <Text style={{ fontSize: 40 }}>EURO</Text>
      <ScrollView>
        <FlatList
          data={EUROFilter}
          renderItem={({ item }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NamePrice item={item} />
            </View>
          )}
          estimatedItemSize={100}
        />
      </ScrollView>
    </View>
  );
};

export default EURO;

const styles = StyleSheet.create({});
