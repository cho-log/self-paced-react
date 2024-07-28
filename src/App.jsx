import "./App.css";
import Header from "./Header.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <CategoryFilter/>
                <RestaurantList/>
            </main>
        </>
    );
}

export default App;
