import "./RestaurantList.css"

const categoryImage = {
    한식: "/category-korean.png", 
    중식: "/category-chinese.png",
    일식: "/category-japanese.png",
    양식: "/category-western.png",
    아시안: "/category-asian.png",
    기타: "/category-etc.png",
};

export default function RestaurantList({restaurants, onOpenModal}){
    return(
        <section className="restaurant-list-container">
            <ul className="restaurant-list">
                {restaurants.map((item) => (
                    <li key={item.id} className="restaurant" onClick={()=>onOpenModal(item)}>
                        <div className="restaurant__category">
                        <img
                            src={categoryImage[item.category]}
                            alt={item.category}
                            className="category-icon"
                        />
                        </div>
                        <div className="restaurant__info">
                        <h3 className="restaurant__name text-subtitle">{item.name}</h3>
                        <p className="restaurant__description text-body">
                            {item.description}
                        </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
