import { useState } from "react";
import RestaurantFilter from "./RestaurantFilter";
import RestaurantList from "./RestaurantList";

export default function RestaurantContainer({ setModalState, setRestaurantValue, restaurantList }) {
    const [selectedCategory, setSelectedCategory] = useState('전체');

    return (
        <main>
            <RestaurantFilter selectedCategory={selectedCategory} 
                              setSelectedCategory={setSelectedCategory} />
            <RestaurantList restaurants={restaurantList} 
                            selectedCategory={selectedCategory} 
                            setModalState={setModalState} 
                            setRestaurantValue={setRestaurantValue} />
        </main>
    )
}