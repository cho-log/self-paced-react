import "./App.css";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import AsideContainer from "./containers/AsideContainer.jsx";
import {useState} from "react";

function App() {
    const [isModal, setIsModal] = useState({
        isOpen: false,
        restaurants:{
            name:"",
            description:"",
        }
    });
    const [isAddModal, setIsAddModal] = useState(false);
    return (
        <>
            <HeaderContainer setIsAddModal={setIsAddModal} />
            <MainContainer setIsModal={setIsModal} />
            <AsideContainer
                isModal={isModal}
                setIsModal={setIsModal}
                isAddModal={isAddModal}
                setIsAddModal={setIsAddModal} />
        </>
    );
}

export default App;
