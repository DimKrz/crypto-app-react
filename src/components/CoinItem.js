import React from "react";
import "./Coins.css";

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p className="hide-mobile">${props.coins.high_24h.toLocaleString()}</p>
      <p className="hide-mobile">${props.coins.low_24h.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
  );
};

export default CoinItem;
