import PropTypes from 'prop-types';
import '../styles/default.css';
import '../styles/RestaurantList.css';

const categoryImage = {
  한식: '../../../templates/category-korean.png',
  중식: '../../../templates/category-chinese.png',
  일식: '../../../templates/category-japanese.png',
  양식: '../../../templates/category-western.png',
  아시안: '../../../templates/category-asian.png',
  기타: '../../../templates/category-etc.png',
};

function RestaurantList({ filteredRestaurants, handleRestaurantDetailId }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {filteredRestaurants.map((r) => (
          <div
            key={r.id}
            role="button"
            tabIndex={0}
            aria-label="상세보기"
            onClick={() => {
              handleRestaurantDetailId(r);
            }}
            onKeyDown={() => handleRestaurantDetailId(r)}
            className="restaurant"
          >
            <div className="restaurant__category">
              <img src={categoryImage[r.category]} alt={r.category} className="category-icon" />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{r.name}</h3>
              <p className="restaurant__description text-body">{r.description}</p>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

RestaurantList.propTypes = {
  filteredRestaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  handleRestaurantDetailId: PropTypes.func.isRequired,
};

export default RestaurantList;
