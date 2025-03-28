import { useState } from "react";
import CategorySortFilter from "../component/body/CategorySortFilter";
import RestaurantList from "../component/body/RestaurantList";
import restaurants from "../const/restaurantList";

const Body = () => {
    const [category, setCategory] = useState("전체");

    const filteredRestaurants = 
        category === "전체" 
        ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

    const handleChangeCategory = (category) => {
        setCategory(category);
    }

    return (
        <>
            <CategorySortFilter category={category} onChangeCategory={handleChangeCategory} />
            <RestaurantList restaurants={filteredRestaurants} />
        </>
    )
}

export default Body;