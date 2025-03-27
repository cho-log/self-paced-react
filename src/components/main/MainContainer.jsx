import { useState } from "react";
import RestaurantFilter from "./RestaurantFilter";
import RestaurantList from "./RestaurantList";
import { restaurants } from "./restaurants";

export default function MainContainer() {
    const [selectedCategory, setselectedCategory] = useState('전체');

    return (
        <>
            <main>
                <RestaurantFilter selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
                <RestaurantList restaurants={restaurants} selectedCategory={selectedCategory}/>
            </main>
        </>
    )
}