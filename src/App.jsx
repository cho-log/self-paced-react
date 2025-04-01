import "./App.css";
import Gnb from "./components/headers/Gnb.jsx";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter.jsx";
import RestaurantList from "./components/mains/RestaurantList.jsx";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal.jsx";
import AddRestaurantModal from "./components/asides/AddRestaurantModal.jsx";
import restaurants from "./data/restaurants.js";
import categoryIcons from "./data/categoryIcons.js";
import categoryOptions from "./data/categoryOptions.js";
import categoryFilters from "./data/categoryFilters.js";

function App() {
  return (
    <>
      <Gnb />
      <main>
        <RestaurantCategoryFilter categoryFilters={categoryFilters} />
        <RestaurantList
          restaurants={restaurants}
          categoryIcons={categoryIcons}
        />
      </main>
      <aside>
        <RestaurantInfoModal />
        <AddRestaurantModal categoryOptions={categoryOptions} />
      </aside>
    </>
  );
}

export default App;
