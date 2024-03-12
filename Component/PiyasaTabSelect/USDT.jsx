import { FlatList, StyleSheet, Text, View } from 'react-native'
import { bgColorOrange, heightD, widthD } from '../../Constants'
import { ScrollView } from 'react-native-virtualized-view'
import { useContext } from 'react'
import { CoinContext } from '../../ContextCoin/ContextCoin'
import NamePrice from '../../src/NamePrice'

const USDT = () => {
  const {data} = useContext(CoinContext)
  const USDTFilter = data.filter((i)=>i.Mcode.includes('USD'))
  return (
    <View style={{backgroundColor: bgColorOrange, width:widthD, height:heightD}}>
      <Text style={{fontSize:40}}>USDT</Text>
      <ScrollView>
        <FlatList
          data={USDTFilter}
          renderItem={({ item }) => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <NamePrice item={item} />
            </View>
          )}
          estimatedItemSize={100}
        />
      </ScrollView>
    </View>
  )
}

export default USDT

const styles = StyleSheet.create({})