import Category from "../components/Category.jsx";
import RestaurantList from "../components/RestaurantList.jsx";
import {useState} from "react";
import {restaurantsInfo} from "../data/datas.js";

const Main = () => {
    const [category,setCategory] = useState("전체");
    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    /*방법1*/
    let filteredRestaurants;
    if(category === "전체"){
        filteredRestaurants = restaurantsInfo;
    }
    else{
        filteredRestaurants = restaurantsInfo.filter(restaurant =>
            restaurant.category === category
        )
    }
    /*방법2 - 삼항연산자 사용*/
    /*
        filteredRestaurants= category === "전체" ?
        restaurantsInfo:
        restaurantsInfo.filter(restaurant => restaurant.category === category);
     */
    return (
        <>
            <Category category={category} onCategoryChange={onCategoryChange}/>
            <RestaurantList restaurants={filteredRestaurants}/>
        </>
    );
};

export default Main;