import MainContent from './components/MainContent/MainContent.jsx';
import AsideContent from './components/AsideContent/AsideContent.jsx'
import './App.css';
import { useState } from 'react';

function App() {
  const [clickedRestaurantID, setClickedRestaurantID] = useState('None');

  const onClickRestaurantElement = (restaurantID)=>{
    setClickedRestaurantID(restaurantID);
  };

  return (
    <div>
      <MainContent onClickRestaurantElement={onClickRestaurantElement}/>
      <AsideContent clickedRestaurentID={clickedRestaurantID}/>
    </div>
  );
}

export default App;
