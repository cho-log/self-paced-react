import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar.jsx';
import CategoryFilter from './CategoryFilter/CategoryFilter.jsx';
import RestaurantList from './RestaurantList/RestaurantList.jsx';
import { useState } from 'react';
import { restaurantInfoList } from '../../Data/restaurantInfoList.js';


export default function MainContent() {
  const [category, setCategory] = useState('전체');
  const filteredRestaurantInfoList = [];

  restaurantInfoList.forEach((restaurantInfo) => {
    if(category === '전체' || restaurantInfo.category === category)
      filteredRestaurantInfoList.push(restaurantInfo);
  });
  
  return (
    <main>
      <GlobalNavigationBar />
      <CategoryFilter category={category} onChangeCategory={setCategory} />
      <RestaurantList restaurantInfoList={filteredRestaurantInfoList} />
    </main>
  );
}