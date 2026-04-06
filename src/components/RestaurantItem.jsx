import categoryAsian from "../assets/category-asian.png";

export default function RestaurantItem() {
  return (
    <li className="restaurant">
      <div className="restaurant__category">
        <img src={categoryAsian} alt="아시안" className="category-icon" />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">호아빈 삼성점</h3>
        <p className="restaurant__description text-body">
          푸짐한 양에 국물이 일품인 쌀국수
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
