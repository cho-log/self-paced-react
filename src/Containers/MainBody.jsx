import Category from "../components/Category.jsx";
import RestaurantList from "../components/RestaurantList.jsx";
import {useState} from "react";
import {restaurantsInfo} from "../data/datas.js";
import RestaurantInfoModal from "../components/RestaurantInfoModal.jsx";

const MainBody = () => {
    const [category,setCategory] = useState("전체");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [restaurantInfo, setRestaurantInfo] = useState({
        title: "",
        description: "",
    });

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
        const filteredRestaurants= category === "전체" ?
        restaurantsInfo:
        restaurantsInfo.filter(restaurant => restaurant.category === category);
     */
    return (
        <>
            <Category category={category} onCategoryChange={onCategoryChange}/>
            {
                isModalOpen && (
                    <RestaurantInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} RestaurantInfo={restaurantInfo}/>
                )
            }
            <RestaurantList restaurants={filteredRestaurants} setIsModalOpen={setIsModalOpen} setRestaurantInfo={setRestaurantInfo}/>
        </>
    );
};

export default MainBody;