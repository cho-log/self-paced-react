import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';
import restaurantInfoList from '../../Data/restaurantInfoList';

export default function AsideContent({ clickedRestaurentID, updateClickedRestaurantID }) {
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
      {false && <AddRestaurantModal />}
    </aside>
  );
}
