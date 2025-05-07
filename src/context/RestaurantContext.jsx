import { createContext, useContext, useState } from "react";
import { RESTAURANTS } from "../components/main/restaurants.js";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
    const [restaurants, setRestaurants] = useState(RESTAURANTS);
    const [restaurantItem, setRestaurantItem] = useState({
        name: "",
        description: ""
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModalIndex, setActiveModalIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const openModal = (index) => {
        setActiveModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <RestaurantContext.Provider value={{
            restaurants, setRestaurants,
            restaurantItem, setRestaurantItem,
            isModalOpen, openModal, closeModal,
            activeModalIndex, setActiveModalIndex,
            selectedCategory, setSelectedCategory
        }}>
            {children}
        </RestaurantContext.Provider>
    );
}

export const useRestaurantContext = () => useContext(RestaurantContext);