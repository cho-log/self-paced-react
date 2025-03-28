import "./App.css";
import Gnb from "./components/headers/Gnb.jsx";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter.jsx";
import RestaurantList from "./components/mains/RestaurantList.jsx";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal.jsx";
import AddRestaurantModal from "./components/asides/AddRestaurantModal.jsx";

function App() {
  return (
    <>
      <Gnb />
      <RestaurantCategoryFilter />
      <RestaurantList />
      <RestaurantInfoModal />
      <AddRestaurantModal />
    </>
  );
}

export default App;
