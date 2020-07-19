import React from "react";
import "./styles.css";
import { getFakeAPIData } from "./getFakeAPIData";

const WishItemStyle = {
  background: "#efefef",
  border: "1px solid black",
  padding: "10px",
  margin: "5px"
};

function processList(wishListItem) {
  return <WishItem item={wishListItem} />;
}

function WishItem({ item }) {
  const { description, link } = item;
  return (
    <div style={WishItemStyle}>
      <span>{description}</span>
      <a href={link}> Buy</a>
    </div>
  );
}

function Wishlist({ wishList }) {
  return wishList.map(processList);
}

export default function App() {
  const data = getFakeAPIData();
  return (
    <div className="App">
      <h1>Make a wish</h1>
      <h2>Adarsh's wish List</h2>
      <Wishlist wishList={data.wishList} />
    </div>
  );
}
