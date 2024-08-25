import categoryKorean from '../assets/category-korean.png';
import categoryAsian from '../assets/category-asian.png';
import categoryChinese from '../assets/category-chinese.png';
import categoryEtc from '../assets/category-etc.png';
import categoryWestern from '../assets/category-western.png';
import categoryJapanese from '../assets/category-japanese.png';
import './RestaurantList.css';

export default function RestaurantList({restaurants}) {
  const categoryImages = {
    '한식': categoryKorean,
    '일식': categoryJapanese,
    '중식': categoryChinese,
    '양식': categoryWestern,
    '아시안': categoryAsian,
    '기타': categoryEtc
  }

  function getImage(category) {
    return categoryImages[category];
  }

  return (
    <>
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="restaurant">
              <div className="restaurant__category">
                <img src={getImage(restaurant.category)} alt={restaurant.category} className="category-icon"/>
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
  )
}
