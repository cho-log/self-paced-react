import RestaurantDetailModal from "./RestaurantDetailModal/RestaurantDetailModal.jsx"
import AddRestaurantModal from "./AddRestaurantModal/AddRestaurantModal.jsx"

export default function AsideContent() {
  return (
    <aside>
      <RestaurantDetailModal />
      <AddRestaurantModal />
    </aside>
  );
}