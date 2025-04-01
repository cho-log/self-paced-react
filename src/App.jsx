import "./App.css";
import HeadContainer from "./components/head/HeadContainer.jsx"
import MainContainer from "./components/main/MainContainer.jsx";
import AsideContainer from "./components/aside/AsideContainer.jsx";

function App() {
  return (
    <>
      <HeadContainer />
      <MainContainer />
      {/* <AsideContainer /> */}  {/* 음식점 목록을 보여주기 위한 주석 처리 */}
    </>
  )
}

export default App;
