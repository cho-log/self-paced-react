import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';

export default function AsideContent({
  showAddRestaurantModal, updateShowAddRestaurantModal, addRestaurantInfo,
  updateClickedRestaurantID, restaurantInfo,
}) {
  const showRestaurantDetailModal = restaurantInfo !== undefined;

  return (
    <aside>
      <AddRestaurantModal
        shouldShow={showAddRestaurantModal}
        closeModal={() => { updateShowAddRestaurantModal(false); }}
        addRestaurantInfo={addRestaurantInfo}
      />
      <RestaurantDetailModal
        shouldShow={showRestaurantDetailModal}
        closeModal={() => { updateClickedRestaurantID(null); }}
        restaurantInfo={restaurantInfo}
      />
    </aside>
  );
}
