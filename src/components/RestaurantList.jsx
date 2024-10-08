import "../styles/RestaurantListStyle.css";

function RestaurantList({ restaurants }) {
  const categoryInEnglish = {
    한식: "korean",
    중식: "chinese",
    일식: "japanese",
    양식: "western",
    아시안: "asian",
    기타: "etc",
  };

  return (
    <>
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="restaurant">
              <div className="restaurant__category">
                <img
                  src={`/category-${categoryInEnglish[restaurant.category]}.png`}
                  alt="한식"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
                <p className="restaurant__description text-body">{restaurant.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default RestaurantList;
