import "./styles/default.css";
import "./styles/RestaurantList.css";

function RestaurantList({ restaurants, setOpen }) {
  const categoryImage = {
    한식: "../templates/category-korean.png",
    중식: "../templates/category-chinese.png",
    일식: "../templates/category-japanese.png",
    양식: "../templates/category-western.png",
    아시안: "../templates/asian.png",
    기타: "../templates/category-etc.png",
  };
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((r) => (
          <li key={r.id} onClick={()=>setOpen(true)} className="restaurant">
            <div className="restaurant__category">
              <img
                src={categoryImage[r.category]}
                alt={r.category}
                className="category-icon"
              ></img>
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{r.name}</h3>
              <p className="restaurant__description text-body">
                {r.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
