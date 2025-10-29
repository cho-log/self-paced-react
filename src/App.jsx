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

  const [showAddRestaurantModal, setShowAddRestaurantModal] = useState(false);
  const updateShowAddRestaurantModal = (showModal) => {
    setShowAddRestaurantModal(showModal);
  };

  const [clickedRestaurantID, setClickedRestaurantID] = useState('None');
  const updateClickedRestaurantID = (restaurantID) => {
    setClickedRestaurantID(restaurantID);
  };

  return (
    <div>
      <MainContent
        restaurantInfoList={restaurantInfoList}
        updateShowAddRestaurantModal={updateShowAddRestaurantModal}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
      <AsideContent
        restaurantInfoList={restaurantInfoList}
        addRestaurantInfo={addRestaurantInfo}
        showAddRestaurantModal={showAddRestaurantModal}
        updateShowAddRestaurantModal={updateShowAddRestaurantModal}
        clickedRestaurentID={clickedRestaurantID}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
    </div>
  );
}

export default App;
