import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar.jsx';
import CategoryFilter from './CategoryFilter/CategoryFilter.jsx';
import RestaurantList from './RestaurantList/RestaurantList.jsx';
import { useState } from 'react';
import { restaurantInfoList } from '../../Data/restaurantInfoList.js';


export default function MainContent() {
  const [category, setCategory] = useState('전체');

  const updateCatergory = (categoryToSet) => {
    setCategory(categoryToSet);
  };

  const filteredRestaurantInfoList = (
    category === '전체' ? restaurantInfoList : restaurantInfoList.filter(
      (restaurantInfo) => (restaurantInfo.category === category)
    )
  );
  
  return (
    <main>
      <GlobalNavigationBar />
      <CategoryFilter category={category} onChangeCategory={updateCatergory} />
      <RestaurantList restaurantInfoList={filteredRestaurantInfoList} />
    </main>
  );
}