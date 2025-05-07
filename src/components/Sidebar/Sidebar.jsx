import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";

function Sidebar({
  modalTypeToOpen,
  onSubmitRestaurant,
  clickedRestaurantInfo,
  onCloseModal,
}) {
  return (
    <>
      {modalTypeToOpen === "add" && (
        <AddRestaurantModal
          onSubmitRestaurant={(restaurant) => onSubmitRestaurant(restaurant)}
          onCloseModal={onCloseModal}
        />
      )}
      {modalTypeToOpen === "detail" && (
        <RestaurantDetailModal
          restaurantName={clickedRestaurantInfo.name}
          restaurantDescription={clickedRestaurantInfo.description}
          onCloseModal={onCloseModal}
        />
      )}
    </>
  );
}

export default Sidebar;
