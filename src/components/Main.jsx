function Main({category,onChangeCategory,restaurants}) {
    return (
        <main>
            <CatagoryFilter 
                category={category}
                onChangeCategory={onChangeCategory}
            />
            <RestaurantList 
            restaurants={restaurants}
            />
        </main>
    )
}

export default Main;

function CatagoryFilter({category,onChangeCategory}) {
    return (
        <>
            <section className="restaurant-filter-container">
                <select 
                 name="category" 
                 id="category-filter" 
                 className="restaurant-filter" 
                 aria-label="음식점 카테고리 필터"
                 value={category}
                 onChange={(event)=>onChangeCategory(event.target.value)}
                >
                    <option value="전체">전체</option>
                    <option value="한식">한식</option>
                    <option value="중식">중식</option>
                    <option value="일식">일식</option>
                    <option value="양식">양식</option>
                    <option value="아시안">아시안</option>
                    <option value="기타">기타</option>
                </select>
            </section>
        </>
    );
}

function RestaurantList({restaurants}) {
    const categoryImages={
        한식:"korean",
        중식:"chinese",
        일식:"japanese",
        양식:"western",
        아시안:"asian",
        기타:"etc",
    };

    return (
        <>
            <section className="restaurant-list-container">
                <ul className="restaurant-list">
                    {restaurants.map((restaurant) =>(
                    <li className="restaurant" key={restaurant.id}>
                        <div className="restaurant__category">
                            <img 
                             src={`./category-${categoryImages[restaurant.category]}.png`} 
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
            </section>
        </>
    );
}
