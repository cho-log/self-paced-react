import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import {useState} from "react";
import {restaurants} from "../../datas/restaurantData.js";

const MainBody = () => {
    const [category,setCategory] = useState("전체");
    let filteredRestaurants;
    if(category === "전체"){
        filteredRestaurants = restaurants;
    }
    if(category !== "전체"){
        filteredRestaurants = restaurants.filter(restaurant => restaurant.category === category);
    }
    return (
        <>
            <CategoryFilter setCategory={setCategory} />
            <RestaurantList filteredRestaurants={filteredRestaurants} />
        </>


    );
};

export default MainBody;