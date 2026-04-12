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

  const [openDetailModal, setOpenDetailModal] = useState(false);
  const handleOpenDetailModal = () => {
    setOpenDetailModal(true);
  };
  const handleCloseDetailModal = () => {
    setOpenDetailModal(false);
  };

  const [filteredRestaurantDetail, setFilteredRestaurantDetail] = useState(null);

  const selectedRestaurant = restaurants.find((r) => r.id === filteredRestaurantDetail);

  const [addRestaurantModal, setAddRestaurantModal] = useState(false);
  const handleOpenAddRestaurantModal = () => {
    setAddRestaurantModal(true);
  };
  const handleCloseAddRestaurantModal = () => {
    setAddRestaurantModal(false);
  };

  return (
    <>
      <Header handleOpenAddRestaurantModal={handleOpenAddRestaurantModal} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          handleOpenDetailModal={handleOpenDetailModal}
          handleFilteredREstaurantDetail={setFilteredRestaurantDetail}
        />
      </main>
      <aside>
        <RestaurantDetailModal
          openDetailModal={openDetailModal}
          handleCloseDetailModal={handleCloseDetailModal}
          selectedRestaurant={selectedRestaurant}
        />
        <AddRestaurantModal
          handleCloseAddRestaurantModal={handleCloseAddRestaurantModal}
          addRestaurantModal={addRestaurantModal}
        />
      </aside>
    </>
  );
}

export default App;
