export default function RestaurantValue({ categoryIcon, categoryAlt, name, description }) {
    return (
        <li className="restaurant">
            <div className="restaurant__category">
                <img src={categoryIcon} alt={categoryAlt} className="category-icon" />
            </div>
            <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">{name}</h3>
                <p className="restaurant__description text-body">{description}</p>
            </div>
        </li>
    );
}