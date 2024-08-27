
import Aside from "../components/aside/Aside.jsx";

const AsideContainer = ({isModal,setIsModal,isAddModal,setIsAddModal,restaurants,setRestaurants}) => {
    return (
        <Aside
            isModal={isModal}
            setIsModal={setIsModal}
            isAddModal={isAddModal}
            setIsAddModal={setIsAddModal}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
        />
    );
};

export default AsideContainer;