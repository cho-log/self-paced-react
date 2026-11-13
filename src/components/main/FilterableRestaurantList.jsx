import "../style/FilterableRestaurantList.css";
import RestaurantCard from "./RestaurantCard";
import { CATEGORIES } from "../../data/categories";

function FilterableRestaurantList({ category, onChangeCategory, restaurants, onOpenModal }) {
    return (
        <main>
            <CatagoryFilter
                category={category}
                onChangeCategory={onChangeCategory}
            />
            <RestaurantList
                restaurants={restaurants}
                onOpenModal={onOpenModal}
            />
        </main>
    )
}

export default FilterableRestaurantList;

function CatagoryFilter({ category, onChangeCategory }) {
    return (
        <section className="restaurant-filter-container">
            <select
                name="category"
                id="category-filter"
                className="restaurant-filter"
                aria-label="음식점 카테고리 필터"
                value={category}
                onChange={(event) => onChangeCategory(event.target.value)}
            >
                <option value="전체">전체</option>

                {CATEGORIES.map((category) => (
                    <option key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </section>
    );
}

function RestaurantList({ restaurants, onOpenModal }) {
    const categoryImages = {
        한식: "korean",
        중식: "chinese",
        일식: "japanese",
        양식: "western",
        아시안: "asian",
        기타: "etc",
    };

    return (

        <section className="restaurant-list-container">
            <ul className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        onOpenModal={onOpenModal}
                        categoryImages={categoryImages}
                    />
                ))}
            </ul>
        </section>

    );
}
