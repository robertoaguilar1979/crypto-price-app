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
  const [pageNumber, setPageNumber] = useState(0);

  //pagination math for page display
  const listOfCoinsPerPage = 10;
  const pagesVisited = pageNumber * listOfCoinsPerPage;

  //filter search in input
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  //display users that are filtered from input or displayed from axios
  const displayUsers = filteredCoins
    .slice(pagesVisited, pagesVisited + listOfCoinsPerPage)
    .map((coin, index) => {
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
  //useEffect hook
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  // map through coins
  /*const mapCoins = filteredCoins.map((coin, index) => {
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
  });*/

  const pageCount = Math.ceil(listOfCoins.length / listOfCoinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
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
      <div className="list">{displayUsers}</div>
      <ReactPaginate
        previousLabel={"<Previous"}
        nextLabel={"Next>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationContainer"}
        activeClassName={"activeClassName"}
        pageClassName={"liTag"}
        pageLinkClassName={"aTag"}
      />
    </div>
  );
}

export default App;
