import { useState } from 'react';
import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
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

  return (
    <div>
      <MainContent
        restaurantInfoList={restaurantInfoList}
        showAddRestaurantModal={showAddRestaurantModal}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
      <AsideContent
        isVisibleAddRestaurantModal={isVisibleAddRestaurantModal}
        closeAddRestaurantModal={closeAddRestaurantModal}
        addRestaurantInfo={addRestaurantInfo}
        updateClickedRestaurantID={updateClickedRestaurantID}
        restaurantInfo={restaurantInfo}
      />
    </div>
  );
}

export default App;
