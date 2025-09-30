import "../styles/components/RestaurantList.css";

const categoryIcon = {
  한식: "/category-korean.png",
  중식: "/category-chinese.png",
  일식: "/category-japanese.png",
  양식: "/category-western.png",
  아시안: "/category-asian.png",
  기타: "/category-etc.png",
};

export default function RestaurantList({ restaurants = [] }) {
  return (
    <ul className="restaurant-list">
      {restaurants.map((restaurant) => (
        <li className="restaurant" key={restaurant.id}>
          <div className="restaurant__category">
            <img
              src={categoryIcon[restaurant.category] ?? "/category-etc.png"}
              alt={restaurant.category}
              className="category-icon"
            />
          </div>
          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">
              {restaurant.name}
            </h3>
            <p className="restaurant__description text-body">
              {restaurant.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
