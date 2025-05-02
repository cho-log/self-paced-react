import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";

function Sidebar({
  openModalType,
  onAddRestaurant,
  clickedRestaurantInfo,
  onCloseModal,
}) {
  return (
    <>
      {openModalType === "add" && (
        <AddRestaurantModal
          onAddRestaurant={(restaurant) => onAddRestaurant(restaurant)}
          onClose={onCloseModal}
        />
      )}
      {openModalType === "detail" && (
        <RestaurantDetailModal
          restaurantName={clickedRestaurantInfo.name}
          restaurantDescription={clickedRestaurantInfo.description}
          onClose={onCloseModal}
        />
      )}
    </>
  );
}

export default Sidebar;
