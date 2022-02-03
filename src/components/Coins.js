import React from "react";

function Coins({
  name,
  icon,
  price,
  symbol,
  rank,
  priceChange1h,
  priceChange1d,
  priceChange1w,
  volume,
  marketCap,
}) {
  return (
    <div className="coin">
      <div>
        <h2>Rank </h2>
        <p>{rank}</p>
      </div>

      <div className="cryptoName">
        <img src={icon} alt="crypto icon image" />
        <p>{name} </p>
      </div>

      <div>
        <h2> Symbol </h2>
        <p>{symbol}</p>
      </div>

      <div>
        <h2>Price </h2>
        <p>
          $
          {price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div>
        <h2>1h% </h2>
        <p className={priceChange1h < 0 ? "red" : "green"}>{priceChange1h}%</p>
      </div>

      <div>
        <h2>24h% </h2>
        <p className={priceChange1d < 0 ? "red" : "green"}>{priceChange1d}%</p>
      </div>

      <div>
        <h2>7d% </h2>
        <p className={priceChange1w < 0 ? "red" : "green"}>{priceChange1w}%</p>
      </div>

      <div>
        <h2>24h Volume </h2>
        <p>
          $
          {parseFloat(volume).toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </div>

      <div className="center">
        <h2>Mkt Cap </h2>
        <p>
          $
          {parseFloat(marketCap).toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
}

export default Coins;
