import React from "react";

function Coins({ name, icon, price, symbol, rank }) {
  return (
    <div className="coin">
      <h2>Rank:{rank}</h2>
      <h2> Name: {name} </h2>
      <img src={icon} alt="crypto icon image" />
      <h2> Symbol: {symbol} </h2> <h2> Price: {price.toFixed(2)} </h2>
    </div>
  );
}

export default Coins;
