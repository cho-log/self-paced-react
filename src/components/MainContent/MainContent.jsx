import { useState } from 'react';
import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import RestaurantList from './RestaurantList/RestaurantList';
import { restaurantInfoList } from '../../Data/restaurantInfoList';

export default function MainContent({ updateClickedRestaurantID }) {
  const [category, setCategory] = useState('전체');

  const updateCatergory = (categoryToSet) => {
    setCategory(categoryToSet);
  };

  const filteredRestaurantInfoList = (
    category === '전체' ? restaurantInfoList : restaurantInfoList.filter(
      (restaurantInfo) => (restaurantInfo.category === category),
    )
  );

  return (
    <main>
      <GlobalNavigationBar />
      <CategoryFilter category={category} onChangeCategory={updateCatergory} />
      <RestaurantList
        restaurantInfoList={filteredRestaurantInfoList}
        updateClickedRestaurantID={updateClickedRestaurantID}
      />
    </main>
  );
}
