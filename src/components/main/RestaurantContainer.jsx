import { useState } from "react";
import RestaurantFilter from "./RestaurantFilter";
import RestaurantList from "./RestaurantList";
import { RESTAURANTS } from "./restaurants";

export default function RestaurantContainer() {
    const [selectedCategory, setSelectedCategory] = useState('전체');

    return (
        <main>
            <RestaurantFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <RestaurantList restaurants={RESTAURANTS} selectedCategory={selectedCategory} />
        </main>
    )
}