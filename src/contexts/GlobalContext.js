import React, { createContext, useState } from "react";
const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [bottomAlert, setBottomAlert] = useState({open:false, type:false, message:null});
    const[ confirmDialog, setConfirmDialog] = useState({open:false, title:null, message:null, buttonTitle:null, onSuccess:null});
    const [selectedCrypto, setSelectedCrypto] = useState({});


      const [pinnedList, setPinnedList] = useState(
        [
          {
            "id": "ethereum",
            "symbol": "eth",
            "name": "Ethereum",
            "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            "current_price": 1717.9,
            "market_cap": 206494249412,
            "market_cap_rank": 2,
            "fully_diluted_valuation": 206494249412,
            "total_volume": 16612051835,
            "high_24h": 1741.29,
            "low_24h": 1639.25,
            "price_change_24h": 72.94,
            "price_change_percentage_24h": 4.43436,
            "market_cap_change_24h": 8558176629,
            "market_cap_change_percentage_24h": 4.32371,
            "circulating_supply": 120215980.728245,
            "total_supply": 120215980.728245,
            "max_supply": null,
            "ath": 4878.26,
            "ath_change_percentage": -64.77789,
            "ath_date": "2021-11-10T14:24:19.604Z",
            "atl": 0.432979,
            "atl_change_percentage": 396738.42665,
            "atl_date": "2015-10-20T00:00:00.000Z",
            "roi": {
              "times": 82.62071571791715,
              "currency": "btc",
              "percentage": 8262.071571791714
            },
            "last_updated": "2023-08-30T09:01:54.040Z"
          }, {
            "id": "solana",
            "symbol": "sol",
            "name": "Solana",
            "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
            "current_price": 21.65,
            "market_cap": 8830756120,
            "market_cap_rank": 10,
            "fully_diluted_valuation": 12032446963,
            "total_volume": 559228573,
            "high_24h": 21.94,
            "low_24h": 20.12,
            "price_change_24h": 1.36,
            "price_change_percentage_24h": 6.71379,
            "market_cap_change_24h": 551871252,
            "market_cap_change_percentage_24h": 6.66601,
            "circulating_supply": 408181032.105963,
            "total_supply": 556171697.372588,
            "max_supply": null,
            "ath": 259.96,
            "ath_change_percentage": -91.68318,
            "ath_date": "2021-11-06T21:54:35.825Z",
            "atl": 0.500801,
            "atl_change_percentage": 4217.15032,
            "atl_date": "2020-05-11T19:35:23.449Z",
            "roi": null,
            "last_updated": "2023-08-30T09:01:51.579Z"
          },]
      );

      const removePinnedItem = (crypto) => {
        const updatedData = pinnedList.filter((item) => item.id !== crypto.id);
        setPinnedList(updatedData);
        setBottomAlert({
          open: true,
          message: "Pinned item removed successfully!",
          type: true,
        });
      };

      const addPinnedItem = (crypto) => {
        let updatedData = [...pinnedList];
        updatedData.push(crypto);
        setPinnedList(updatedData);
        setBottomAlert({
          open: true,
          message: "Item added to favourite list!",
          type: true,
        });
      };

      
    return (
        <GlobalContext.Provider
          value={{
            loggedIn,
             setLoggedIn,
             pinnedList,
             setPinnedList,
             removePinnedItem,
             addPinnedItem,
             bottomAlert,
             setBottomAlert,
             confirmDialog,
             setConfirmDialog,
             selectedCrypto,
             setSelectedCrypto
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    };
    
    export { GlobalContext, GlobalContextProvider };
    