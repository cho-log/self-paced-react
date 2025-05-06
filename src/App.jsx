import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import originalRestaurants from './data/restaurants';

const App = () => {
  const [restaurants, setRestaurants] = useState(originalRestaurants);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] =
    useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isRestaurantAddModalOpen, setIsRestaurantAddModalOpen] =
    useState(false);
  const filteredRestaurants =
    selectedCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  return (
    <>
      <Header setIsRestaurantAddModalOpen={setIsRestaurantAddModalOpen} />
      <main>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          onOpenModal={() => setIsRestaurantDetailModalOpen(true)}
          onSelectRestaurant={setSelectedRestaurant}
        />
      </main>
      <aside>
        {isRestaurantDetailModalOpen && selectedRestaurant !== null && (
          <RestaurantDetailModal
            onCloseRestaurantDetailModal={() =>
              setIsRestaurantDetailModalOpen(false)
            }
            selectedRestaurant={selectedRestaurant}
            onDeselectRestaurant={() => setSelectedRestaurant(null)}
          />
        )}
        {isRestaurantAddModalOpen && (
          <AddRestaurantModal
            onCloseAddRestaurantModal={() => setIsRestaurantAddModalOpen(false)}
            restaurants={restaurants}
            onAddRestaurant={setRestaurants}
          />
        )}
      </aside>
    </>
  );
};

export default App;
