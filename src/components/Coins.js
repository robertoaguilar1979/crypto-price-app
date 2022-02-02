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
      <h2>Rank: {rank}</h2>
      <div className="cryptoName">
        <img src={icon} alt="crypto icon image" />
        <h2>{name} </h2>
      </div>
      <h2> Symbol: {symbol} </h2>
      <h2>
        Price: $
        {price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h2>
      <h2>1h: {priceChange1h}</h2>
      <h2>24h: {priceChange1d}</h2>
      <h2>7d: {priceChange1w}</h2>
      <h2>
        24h Volume: $
        {parseFloat(volume).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h2>
      <h2>
        Mkt Cap: $
        {parseFloat(marketCap).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h2>
    </div>
  );
}

export default Coins;
