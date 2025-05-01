import RestaurantModal from "./RestaurantModal.jsx"

export default function AsideContainer({ setModalState, restaurantValue, activeIndex, restaurantList, setActiveIndex, setRestaurantList }) {
    return (
        <aside>
            <RestaurantModal setModalState={setModalState} 
                             restaurantValue={restaurantValue} 
                             activeIndex={activeIndex}
                             restaurantList={restaurantList}
                             setActiveIndex={setActiveIndex}
                             setRestaurantList={setRestaurantList} />
        </aside>
    );
}