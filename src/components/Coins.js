import React from "react";

function Coins({ name, icon, price, symbol, rank }) {
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
    </div>
  );
}

export default Coins;
