import "./App.css";
import Header from "./components/header/Header.jsx"
import RestaurantContainer from "./components/main/RestaurantContainer.jsx";
import AsideContainer from "./components/aside/AsideContainer.jsx";

function App() {
  return (
    <>
      <Header />
      <RestaurantContainer />
      {/* <AsideContainer /> */}  {/* 음식점 목록을 보여주기 위한 주석 처리 */}
    </>
  )
}

export default App;
