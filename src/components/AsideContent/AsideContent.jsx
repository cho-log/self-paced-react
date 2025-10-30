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
      <AddRestaurantModal
        shouldShow={showAddRestaurantModal}
        closeModal={() => { updateShowAddRestaurantModal(false); }}
        addRestaurantInfo={addRestaurantInfo}
      />
      <RestaurantDetailModal
        shouldShow={showRestaurantDetailModal}
        closeModal={() => { updateClickedRestaurantID('None'); }}
        restaurantInfo={restaurantInfo}
      />
    </aside>
  );
}
