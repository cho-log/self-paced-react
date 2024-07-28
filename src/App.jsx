import "./App.css";
import Header from "./Header.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import RestaurantDetailModal from "./RestaurantDetailModal.jsx";
import AddRestaurantModal from "./AddRestaurantModal.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <CategoryFilter/>
                <RestaurantList/>
            </main>
            <aside>
                <RestaurantDetailModal/>
                <AddRestaurantModal/>
            </aside>
        </>
    );
}

export default App;
