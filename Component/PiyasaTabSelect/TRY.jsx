import { FlatList, StyleSheet, Text, View } from 'react-native'
import { bgColorOrange, heightD, widthD } from '../../Constants'
import { ScrollView } from 'react-native-virtualized-view'
import { useContext } from 'react'
import { CoinContext } from '../../ContextCoin/ContextCoin'
import NamePrice from '../../src/NamePrice'

const TRY = () => {
  const {data} = useContext(CoinContext)
  const tryFilter = data.filter((i)=>i.Mcode.includes('TRY'))
  return (
    <View style={{backgroundColor: bgColorOrange, width:widthD, height:heightD}}>
      <Text style={{fontSize:40}}>TRY</Text>
      <ScrollView>
        <FlatList
          data={tryFilter}
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

export default TRY

const styles = StyleSheet.create({})