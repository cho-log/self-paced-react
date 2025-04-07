import "./App.css";
import Header from "./assets/components/Header.jsx";
import CategoryFilter from "./assets/components/CategoryFilter.jsx";
import RestaurantList from "./assets/components/RestaurantList.jsx";
function App() {
  return (
    <div>
      {/* GNB */}
      <Header />

    <main>
      {/* 카테고리/정렬 필터 */}
      <CategoryFilter />

      {/* 음식점 목록 */}
      <RestaurantList />
    </main>
    
    </div>
  );
}

export default App;
