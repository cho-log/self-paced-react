import { useState } from 'react';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';
import restaurantData from './data/restaurantsData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = selectedCategory === '전체'
    ? restaurants
    : restaurants.filter((e) => e.category === selectedCategory);

  const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] = useState(false);
  const [isAddRestaurantModalOpen, setIsAddRestaurantModalOpen] = useState(false);

  const handleRestaurantClick = (restaurant) => {
    setIsRestaurantDetailModalOpen(true);
    setSelectedRestaurant(restaurant);
  };

  const handleAddRestaurant = (addedRestaurant) => {
    setRestaurants((restaurantList) => [addedRestaurant, ...restaurantList]);
  };

  return (
    <div>

      <HomeHeader onRestaurantAddButtonClick={() => {
        setIsAddRestaurantModalOpen(true);
      }}
      />

      <main>
        <RestaurantCategoryFilter
          setSelectedCategory={setSelectedCategory}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={handleRestaurantClick}
        />
      </main>

      {isRestaurantDetailModalOpen && (
      <RestaurantDetailModal
        restaurant={selectedRestaurant}
        onClose={() => setIsRestaurantDetailModalOpen(false)}
      />
      )}
      {
        isAddRestaurantModalOpen && (
          <AddRestaurantModal
            onAddRestaurant={handleAddRestaurant}
            onClose={() => setIsAddRestaurantModalOpen(false)}
          />
        )
      }
    </div>
  );
}
export default App;
