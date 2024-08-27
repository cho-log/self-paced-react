import "./App.css";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import AsideContainer from "./containers/AsideContainer.jsx";
import {useEffect, useState} from "react";

function App() {
    const [isModal, setIsModal] = useState({
        isOpen: false,
        restaurants: {
            name: "",
            description: "",
        }
    });
    const [isAddModal, setIsAddModal] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/restaurants");
            const data = await response.json();
            if(data !== restaurants){
                setRestaurants(data);
            }
        }
        void fetchData();
    }, [restaurants]);
    return (
        <>
            <HeaderContainer setIsAddModal={setIsAddModal}/>
            <MainContainer setIsModal={setIsModal} restaurants={restaurants} setIsAddModal={setIsAddModal}/>
            <AsideContainer
                isModal={isModal}
                setIsModal={setIsModal}
                isAddModal={isAddModal}
                setIsAddModal={setIsAddModal}
            />
        </>
    );
}

export default App;