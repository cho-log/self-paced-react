import RestaurantAddModal from "./RestaurantAddModal.jsx";
import RestaurantDetailModal from "./RestaurantDetailModal.jsx"

export default function RestaurantModal({ setModalState, restaurantValue }) {
    return (
        <>
            <RestaurantDetailModal setModalState={setModalState} restaurantValue={restaurantValue} />
            {/* <RestaurantAddModal /> */}
        </>
    );
}