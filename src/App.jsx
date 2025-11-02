import { useState } from 'react';
import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
import RestaurantDetailModal from './components/AsideContent/RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './components/AsideContent/AddRestaurantModal/AddRestaurantModal';
import defaultRestaurantInfoList from './Data/restaurantInfoList';
import './App.css';

function App() {
  const [restaurantInfoList, setRestaurantInfoList] = useState(defaultRestaurantInfoList);
  const addRestaurantInfo = (restaurantInfo) => {
    setRestaurantInfoList([...restaurantInfoList, restaurantInfo]);
  };

  const [isVisibleAddRestaurantModal, setIsVisibleAddRestaurantModal] = useState(false);
  const showAddRestaurantModal = () => {
    setIsVisibleAddRestaurantModal(true);
  };
  const closeAddRestaurantModal = () => {
    setIsVisibleAddRestaurantModal(false);
  };

  const [clickedRestaurantID, setClickedRestaurantID] = useState(null);
  const updateClickedRestaurantID = (restaurantID) => {
    setClickedRestaurantID(restaurantID);
  };

  const restaurantInfo = restaurantInfoList.find(
    (restaurant) => restaurant.id === clickedRestaurantID,
  );
  const isVisibleRestaurantDetailModal = restaurantInfo !== undefined;

  return (
    <div>
      <MainContent
        restaurantInfoList={restaurantInfoList}
        showAddRestaurantModal={showAddRestaurantModal}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
      <AsideContent>
        <AddRestaurantModal
          isVisible={isVisibleAddRestaurantModal}
          closeModal={closeAddRestaurantModal}
          addRestaurantInfo={addRestaurantInfo}
        />
        <RestaurantDetailModal
          isVisible={isVisibleRestaurantDetailModal}
          closeModal={() => { updateClickedRestaurantID(null); }}
          restaurantInfo={restaurantInfo}
        />
      </AsideContent>
    </div>
  );
}

export default App;
