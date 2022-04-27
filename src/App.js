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

  //display users that are filtered from input or displayed from axios
  const displayUsers = filteredCoins
    .slice(pagesVisited, pagesVisited + listOfCoinsPerPage)
    .map((coin, index) => {
      return (
        // Coins components
        <Coins key={index} coin={coin} />
      );
    });

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
      {/* display list of cryptocurrencies */}
      <div className="list">{displayUsers}</div>

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={"<Previous"}
        nextLabel={"Next>"}
        containerClassName={"paginationContainer"}
        activeClassName={"activeClassName"}
        pageClassName={"liTag"}
        pageLinkClassName={"aTag"}
        previousClassName={"previous"}
        nextClassName={"next"}
      />
    </div>
  );
}

export default App;
