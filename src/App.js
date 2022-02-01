import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coins from "./components/Coins";

function App() {
  // useState hook
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  //useEffect hook
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  //filter search in input
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  // map through coins
  const mapCoins = filteredCoins.map((coin, index) => {
    return (
      // Coins components
      <Coins
        key={index}
        name={coin.name}
        price={coin.price}
        symbol={coin.symbol}
        icon={coin.icon}
        rank={coin.rank}
      />
    );
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="type name of coin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">{mapCoins}</div>
    </div>
  );
}

export default App;
