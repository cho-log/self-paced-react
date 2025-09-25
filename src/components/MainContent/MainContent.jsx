import GlobalNavigationBar from "./GlobalNavigationBar/GlobalNavigationBar.jsx";
import CategoryFilter from "./CategoryFilter/CategoryFilter.jsx";
import RestaurantList from "./RestaurantList/RestaurantList.jsx";

export default function MainContent() {
  return (
    <main>
      <GlobalNavigationBar />
      <CategoryFilter />
      <RestaurantList />
    </main>
  );
}