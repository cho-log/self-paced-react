import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';

export default function AsideContent({
  restaurantInfoList, addRestaurantInfo,
  showAddRestaurantModal, updateShowAddRestaurantModal,
  clickedRestaurentID, updateClickedRestaurantID,
}) {
  const restaurantInfo = restaurantInfoList.find((Info) => Info.id === clickedRestaurentID);

  let showRestaurantDetailModal = false;
  if (restaurantInfo !== undefined) {
    showRestaurantDetailModal = true;
  }

  return (
    <aside>
      {showRestaurantDetailModal && (
        <RestaurantDetailModal
          restaurantInfo={restaurantInfo}
          updateClickedRestaurantID={updateClickedRestaurantID}
        />
      )}
      {showAddRestaurantModal && (
        <AddRestaurantModal
          updateShowAddRestaurantModal={updateShowAddRestaurantModal}
          addRestaurantInfo={addRestaurantInfo}
        />
      )}
    </aside>
  );
}
