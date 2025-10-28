import MainContent from './components/MainContent/MainContent.jsx';
import AsideContent from './components/AsideContent/AsideContent.jsx'
import './App.css';
import { useState } from 'react';

function App() {
  const [clickedRestaurantID, setClickedRestaurantID] = useState('None');

  const updateClickedRestaurantID = (restaurantID)=>{
    setClickedRestaurantID(restaurantID);
  };

  return (
    <div>
      <MainContent updateClickedRestaurantID={updateClickedRestaurantID}/>
      <AsideContent clickedRestaurentID={clickedRestaurantID} updateClickedRestaurantID={updateClickedRestaurantID}/>
    </div>
  );
}

export default App;
