import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import Layers from "./Layers";
import SearchPage from "./Component/SearchPage";
import { bgColorOrange } from "./Constants";
import Profil from "./Component/Profil";
import { CoinProvider } from "./ContextCoin/ContextCoin";
import KayıtOl from "./Component/KayıtOl";
import Wallet from "./Component/Wallet";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <CoinProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Layers"
            component={Layers}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchPage"
            component={SearchPage}
            options={{ headerStyle: { backgroundColor: bgColorOrange } }}
          />
          <Stack.Screen
            name="Profil"
            component={Profil}
            options={{
              animation: "fade_from_bottom",
              headerStyle: { backgroundColor: bgColorOrange },
            }}
          />
           <Stack.Screen
            name="KayıtOl"
            component={KayıtOl}
            options={{
              animation: "fade_from_bottom",
              headerStyle: { backgroundColor: bgColorOrange },
            }}
          />
           <Stack.Screen
            name="Wallet"
            component={Wallet}
            options={{ headerStyle: { backgroundColor: bgColorOrange } }}
          />
        </Stack.Navigator>
      </CoinProvider>
    </NavigationContainer>
  );
};

export default App;
