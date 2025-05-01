import RestaurantAddModal from "./RestaurantAddModal.jsx";
import RestaurantDetailModal from "./RestaurantDetailModal.jsx"

export default function RestaurantModal({ setModalState, restaurantValue, activeIndex, restaurantList, setActiveIndex, setRestaurantList }) {
    return (
        <>
            {(activeIndex === 0) && <RestaurantDetailModal setModalState={setModalState} 
                                                           restaurantValue={restaurantValue} />}
            {(activeIndex === 1) && <RestaurantAddModal restaurantList={restaurantList}
                                                        setActiveIndex={setActiveIndex} 
                                                        setModalState={setModalState} 
                                                        setRestaurantList={setRestaurantList} />}
        </>
    );
}