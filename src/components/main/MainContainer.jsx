import "/src/styles/Main.css"
import RestaurantFilter from "./RestaurantFilter";
import RestaurantList from "./RestaurantList";

export default function MainContainer() {
    return (
        <>
            <main>
                <RestaurantFilter />
                <RestaurantList />
            </main>
        </>
    )
}