import "../style/Aside.css";
import AddRestaurantModal from "./AddRestaurantModal";
import RestaurantDetailModal from "./RestaurantDetailModal";

function Aside({ isModalOpen, selectedRestaurant, onCloseModal,
                isAddModalOpen, onCloseAddModal, onAddRestaurant}) {
  return (
    <aside>
      {isModalOpen && selectedRestaurant && (
        <RestaurantDetailModal
          restaurant={selectedRestaurant}
          onCloseModal={onCloseModal}
        />
      )}
      {isAddModalOpen&&(
        <AddRestaurantModal
            onCloseAddModal={onCloseAddModal}
            onAddRestaurant={onAddRestaurant}
        />
      )}
    </aside>
  );
}
export default Aside;


