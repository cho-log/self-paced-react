
import { useEffect, useState } from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
import AsideContainer from "../containers/AsideContainer";
import { addRestaurant, getRestaurants } from "../api/api.js";


function RestaurantListPage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [restaurantsData, setRestaurantsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants();
        setRestaurantsData(data);
      } catch (error) {
        alert("레스토랑 데이터를 불러오는 데 실패했습니다.");
      }
    };
    fetchData();
  }, []);


  function selectClickedRestaurant(id) {
    const clickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === id
    );
    setSelectedRestaurant(clickedRestaurant);
  }


  async function addRestaurantData(newRestaurant) {
    await addRestaurant(newRestaurant);
    const refreshedRestaurant = await getRestaurants();
    setRestaurantsData(refreshedRestaurant);

  }

  return (
    <>
      <HeaderContainer setIsAddModalOpen={setIsAddModalOpen} />
      <MainContainer
        setIsDetailModalOpen={setIsDetailModalOpen}
        selectClickedRestaurant={selectClickedRestaurant}
        restaurantsData={restaurantsData}
      />
      <AsideContainer
        isDetailModalOpen={isDetailModalOpen}
        setIsDetailModalOpen={setIsDetailModalOpen}
        selectedRestaurant={selectedRestaurant}
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        addRestaurantData={addRestaurantData}
      />
    </>
  );
}

export default RestaurantListPage;
