import { useState } from "react";
import RestaurantFilter from "./RestaurantFilter";
import RestaurantList from "./RestaurantList";

export default function RestaurantContainer({ setIsModalOpen, setRestaurantValue, restaurantList }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <main>
            <RestaurantFilter selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} />
            <RestaurantList restaurants={restaurantList}
                selectedCategory={selectedCategory}
                setIsModalOpen={setIsModalOpen}
                setRestaurantValue={setRestaurantValue} />
        </main>
    )
}