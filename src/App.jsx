import { useState } from 'react';
import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
import './App.css';

function App() {
  const [clickedRestaurantID, setClickedRestaurantID] = useState('None');

  const updateClickedRestaurantID = (restaurantID) => {
    setClickedRestaurantID(restaurantID);
  };

  return (
    <div>
      <MainContent updateClickedRestaurantID={updateClickedRestaurantID} />
      <AsideContent
        clickedRestaurentID={clickedRestaurantID}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
    </div>
  );
}

export default App;
