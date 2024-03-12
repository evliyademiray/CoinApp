import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_KEY } from "../Constants";
export const CoinContext = createContext();
export const CoinProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
        .get(
          `https://www.nosyapi.com/apiv2/service/economy/coin/exchange-rate?apiKey=${API_KEY}`
        )
        .then((res) => setData(res.data.data))
        .catch((err) => console.log(err.code));
    }, [])
  return (
    <CoinContext.Provider value={{ data, setData }}>
      {children}
    </CoinContext.Provider>
  );
};
