import RestaurantAddModal from "./RestaurantAddModal.jsx";
import RestaurantDetailModal from "./RestaurantDetailModal.jsx"

export default function RestaurantModal({ setIsModalOpen, restaurantValue, activeIndex, restaurantList, setActiveIndex, setRestaurantList }) {
    return (
        <>
            {(activeIndex === 0) && <RestaurantDetailModal setIsModalOpen={setIsModalOpen} 
                                                           restaurantValue={restaurantValue} />}
            {(activeIndex === 1) && <RestaurantAddModal restaurantList={restaurantList}
                                                        setActiveIndex={setActiveIndex} 
                                                        setIsModalOpen={setIsModalOpen} 
                                                        setRestaurantList={setRestaurantList} />}
        </>
    );
}