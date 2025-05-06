import RestaurantModal from "./RestaurantModal.jsx"

export default function AsideContainer({ setModalState, restaurantValue }) {
    return (
        <aside>
            <RestaurantModal setModalState={setModalState} restaurantValue={restaurantValue} />
        </aside>
    );
}