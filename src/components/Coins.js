import React from "react";

function Coins({ coin }) {
  return (
    <div className="coin">
      <div>
        <h2>Rank </h2>
        <p>{coin.rank}</p>
      </div>

      <div className="cryptoName">
        <img src={coin.icon} alt="crypto icon image" />
        <p>{coin.name} </p>
      </div>

      <div>
        <h2> Symbol </h2>
        <p>{coin.symbol}</p>
      </div>

      <div>
        <h2>Price </h2>
        <p>
          $
          {coin.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div>
        <h2>1h% </h2>
        <p className={coin.priceChange1h < 0 ? "red" : "green"}>
          {coin.priceChange1h}%
        </p>
      </div>

      <div>
        <h2>24h% </h2>
        <p className={coin.priceChange1d < 0 ? "red" : "green"}>
          {coin.priceChange1d}%
        </p>
      </div>

      <div>
        <h2>7d% </h2>
        <p className={coin.priceChange1w < 0 ? "red" : "green"}>
          {coin.priceChange1w}%
        </p>
      </div>

      <div>
        <h2>24h Volume </h2>
        <p>
          $
          {parseFloat(coin.volume).toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </div>

      <div className="center">
        <h2>Mkt Cap </h2>
        <p>
          $
          {parseFloat(coin.marketCap).toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
}

export default Coins;
