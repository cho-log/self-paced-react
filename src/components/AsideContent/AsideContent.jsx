import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal.jsx'
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal.jsx'

export default function AsideContent({clickedRestaurentID}) {
  let showRestaurantDetailModal = false;
  if(clickedRestaurentID !== 'None')
    showRestaurantDetailModal = true;

  return (
    <aside>
      {showRestaurantDetailModal && <RestaurantDetailModal />}
      {false && <AddRestaurantModal />}
    </aside>
  );
}