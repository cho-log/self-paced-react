import '../css/RestaurantList.css';

const IMAGE_DIRECTORY = './templates';

const CATEGORY_NAME = {
  한식: 'korean',
  중식: 'chinese',
  일식: 'japanese',
  양식: 'western',
  아시안: 'asian',
  기타: 'etc',
};

function Restaurant({ restaurant, handleSelectRestaurant }) {
  //구조분해할당으로 props에서 바로 restaurant 불러오기
  return (
    <li className="restaurant" onClick={() => handleSelectRestaurant(restaurant)}>
      <div className="restaurant__category">
        <img
          src={`${IMAGE_DIRECTORY}/category-${CATEGORY_NAME[restaurant.category]}.png`}
          alt={restaurant.category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
        <p className="restaurant__description text-body">{restaurant.description}</p>
      </div>
    </li>
  );
}

export default function RestaurantList({ restaurants, handleSelectRestaurant }) {
  //구조분해할당으로 props에서 바로 restaurants 불러오기
  const restaurant_list = [];

  for (const restaurant of restaurants) {
    restaurant_list.push(<Restaurant key={restaurant.id} restaurant={restaurant} handleSelectRestaurant={handleSelectRestaurant} />);
  }

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">{restaurant_list}</ul>
    </section>
  );
}
