import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coins from "./components/Coins";
import cryptoKing from "./img/fullLogo.svg";
import ReactPaginate from "react-paginate";

function App() {
  // useState hook
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  //pagination hooks
  const [cryptoCoin, setCryptoCoin] = useState(second);
  const [pageNumber, setPageNumber] = useState(0);

  //pagination math for page display
  const cryptoCoinPerPage = 10;
  const pagesVisited = pageNumber + cryptoCoinPerPage;

  const displayUsers = cryptoCoin.slice(
    pagesVisited,
    pagesVisited + cryptoCoinPerPage
  );
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
        marketCap={coin.marketCap}
        volume={coin.volume}
        priceChange1h={coin.priceChange1h}
        priceChange1d={coin.priceChange1d}
        priceChange1w={coin.priceChange1w}
      />
    );
  });

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={cryptoKing} alt="cryptoKing logo" />

        <input
          type="text"
          placeholder="search coin name"
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="list">{mapCoins}</div>
    </div>
  );
}

export default App;
