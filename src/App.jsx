import { useState } from 'react';
import restaurants from './data/restaurants';
import Header from './components/Header/Header';
import CategoryFilter from './components/Main/CategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';

function App() {
  const [category, setCategory] = useState('전체');

  const filteredRestaurants =
    category === '전체' ? restaurants : restaurants.filter((r) => r.category === category);

  const [detailModal, setDetailModal] = useState(false);

  const [filteredRestaurantDetail, setFilteredRestaurantDetail] = useState(null);

  const handleRestaurantDetailId = (r) => {
    setDetailModal(true);
    setFilteredRestaurantDetail(r.id);
  };

  const selectedRestaurant = restaurants.find((r) => r.id === filteredRestaurantDetail);

  const [restaurantModal, setRestaurantModal] = useState(false);

  return (
    <>
      <Header setRestaurantModal={setRestaurantModal} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          handleRestaurantDetailId={handleRestaurantDetailId}
        />
      </main>
      <aside>
        {detailModal && (
          <RestaurantDetailModal
            setDetailModal={setDetailModal}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {restaurantModal && <AddRestaurantModal setRestaurantModal={setRestaurantModal} />}
      </aside>
    </>
  );
}

export default App;
