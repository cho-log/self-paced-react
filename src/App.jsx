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

  const [clickedRestaurantID, setClickedRestaurantID] = useState(null);
  const updateClickedRestaurantID = (restaurantID) => {
    setClickedRestaurantID(restaurantID);
  };

  const restaurantInfo = restaurantInfoList.find((Info) => Info.id === clickedRestaurantID);

  return (
    <div>
      <MainContent
        restaurantInfoList={restaurantInfoList}
        updateShowAddRestaurantModal={updateShowAddRestaurantModal}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
      <AsideContent
        showAddRestaurantModal={showAddRestaurantModal}
        updateShowAddRestaurantModal={updateShowAddRestaurantModal}
        addRestaurantInfo={addRestaurantInfo}
        updateClickedRestaurantID={updateClickedRestaurantID}
        restaurantInfo={restaurantInfo}
      />
    </div>
  );
}

export default App;
