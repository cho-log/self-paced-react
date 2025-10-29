import { useState } from 'react';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import restaurants from './data/restaurantsData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = selectedCategory === '전체'
    ? restaurants
    : restaurants.filter((e) => e.category === selectedCategory);

  const [showRestaurantDetailModal, setShowRestaurantDetailModal] = useState(false);

  const handleRestaurantClick = (restaurant) => {
    setShowRestaurantDetailModal(true);
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>

      <HomeHeader />

      <main>
        <RestaurantCategoryFilter
          setSelectedCategory={setSelectedCategory}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={handleRestaurantClick}
        />
      </main>

      {showRestaurantDetailModal && (
      <RestaurantDetailModal
        restaurant={selectedRestaurant}
        onClose={() => setShowRestaurantDetailModal(false)}
      />
      )}

    </div>
  );
}
export default App;
