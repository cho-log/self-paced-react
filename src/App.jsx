import "./App.css";
import Header from "./components/head/Header.jsx";
import RestaurantList from "./components/main/RestaurantList.jsx";
import RestaurantFilter from "./components/main/RestaurantFilter.jsx";
import RestaurantDetailModal from "./components/aside/RestaurantDetailModal.jsx";
import RestaurantAddModal from "./components/aside/RestaurantAddModal.jsx";
import { RestaurantProvider, useRestaurantContext } from "./context/RestaurantContext.jsx";

function ModalContainer() {
  const { isModalOpen, activeModalIndex } = useRestaurantContext();

  return (
    <aside>
      {(activeModalIndex === 0) && isModalOpen && <RestaurantDetailModal />}
      {(activeModalIndex === 1) && isModalOpen && <RestaurantAddModal />}
    </aside>
  );
}

function RestaurantContainer() {
  return (
    <main>
      <RestaurantFilter />
      <RestaurantList />
    </main>
  );
}

function App() {
  return (
    <RestaurantProvider>
      <Header />
      <RestaurantContainer />
      <ModalContainer />
    </RestaurantProvider>
  );
}

export default App;
