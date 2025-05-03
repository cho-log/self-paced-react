import RestaurantModal from "./RestaurantModal.jsx"

export default function AsideContainer({ setIsModalOpen, restaurantValue, activeIndex, restaurantList, setActiveIndex, setRestaurantList }) {
    return (
        <aside>
            <RestaurantModal setIsModalOpen={setIsModalOpen} 
                             restaurantValue={restaurantValue} 
                             activeIndex={activeIndex}
                             restaurantList={restaurantList}
                             setActiveIndex={setActiveIndex}
                             setRestaurantList={setRestaurantList} />
        </aside>
    );
}