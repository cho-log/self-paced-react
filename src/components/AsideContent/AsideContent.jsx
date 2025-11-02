import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';

export default function AsideContent({
  isVisibleAddRestaurantModal, closeAddRestaurantModal, addRestaurantInfo,
  updateClickedRestaurantID, restaurantInfo,
}) {
  const isVisibleRestaurantDetailModal = restaurantInfo !== undefined;

  return (
    <aside>
      <AddRestaurantModal
        shouldShow={isVisibleAddRestaurantModal}
        closeModal={closeAddRestaurantModal}
        addRestaurantInfo={addRestaurantInfo}
      />
      <RestaurantDetailModal
        shouldShow={isVisibleRestaurantDetailModal}
        closeModal={() => { updateClickedRestaurantID(null); }}
        restaurantInfo={restaurantInfo}
      />
    </aside>
  );
}
