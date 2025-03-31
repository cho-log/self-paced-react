import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import restaurants from './data/restaurants';

const App = () => {
  const [selectedCategory, setCategory] = useState('전체');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleCategoryChange = (changedCategory) => {
    setCategory(changedCategory);
    if (changedCategory === '전체') {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(
        (restaurant) => restaurant.category === changedCategory
      );
      setFilteredRestaurants(filtered);
    }
  };
  return (
    <>
      <Header />
      <main>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={handleCategoryChange}
        />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
};

export default App;
