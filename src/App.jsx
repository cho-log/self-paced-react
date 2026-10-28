import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import { useState } from "react";
import { restaurants } from "./data/restaurants";

function App() {
  const [category, setCategory] = useState("전체");

  const filteredRestaurants = restaurants.filter(
    (restaurant) => {
     category === "전체" || restaurant.category === category;
  });

  return (
    <>
      <Header />
      <Main
        category={category}
        onChangeCategory={setCategory}
        restaurants={filteredRestaurants}
      />
      <Aside />
    </>
  );
}

export default App;
