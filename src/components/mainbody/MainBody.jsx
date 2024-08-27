import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import {useState} from "react";

const MainBody = ({setIsModal,restaurants}) => {

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
            <RestaurantList filteredRestaurants={filteredRestaurants} setIsModal={setIsModal} />
        </>


    );
};

export default MainBody;