import categoryAsian from "../assets/category-asian.png";
import categoryChinese from "../assets/category-chinese.png";
import categoryEtc from "../assets/category-etc.png";
import categoryJapanese from "../assets/category-japanese.png";
import categoryKorean from "../assets/category-korean.png";
import categoryWestern from "../assets/category-western.png";

const categoryImages = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  양식: categoryWestern,
  아시안: categoryAsian,
  기타: categoryEtc,
};

export default function RestaurantItem({ restaurant }) {
  return (
    <li className="restaurant">
      <div className="restaurant__category">
        <img
          src={categoryImages[restaurant.category]}
          alt={restaurant.category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
        <p className="restaurant__description text-body">
          {restaurant.description}
        </p>
      </div>
    </li>
  );
}

// <li class="restaurant">
//   <div class="restaurant__category">
//     <img src="./category-western.png" alt="양식" class="category-icon">
//   </div>
//   <div class="restaurant__info">
//     <h3 class="restaurant__name text-subtitle">이태리키친</h3>
//     <p class="restaurant__description text-body">늘 변화를 추구하는 이태리키친입니다.</p>
//   </div>
// </li>
