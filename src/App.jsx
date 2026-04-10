import { useState } from 'react';
import restaurants from './data/restaurants';
import Header from './components/Header/Header';
import CategoryFilter from './components/Main/CategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';

function App() {
  const [category, setCategory] = useState('전체');
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [filteredRestaurantDetail, setFilteredRestaurantDetail] = useState(null);
  const [addBtnOn, setAddBtnOn] = useState(false);
  const filteredRestaurants =
    category === '전체' ? restaurants : restaurants.filter((r) => r.category === category);
  const selectedRestaurant = restaurants.find((r) => r.id === filteredRestaurantDetail);
  return (
    <>
      <Header setAddBtnOn={setAddBtnOn} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          setOpen={setOpenDetailModal}
          setDetail={setFilteredRestaurantDetail}
        />
      </main>
      <aside>
        <RestaurantDetailModal
          isOpen={openDetailModal}
          setOpen={setOpenDetailModal}
          selectedRestaurant={selectedRestaurant}
        />
        <AddRestaurantModal setAddBtnOn={setAddBtnOn} addRestaurantOn={addBtnOn} />
      </aside>
    </>
  );
}

export default App;
