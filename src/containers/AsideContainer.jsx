
import Aside from "../components/aside/Aside.jsx";

const AsideContainer = ({isModal,setIsModal,isAddModal,setIsAddModal}) => {
    return (
        <Aside
            isModal={isModal}
            setIsModal={setIsModal}
            isAddModal={isAddModal}
            setIsAddModal={setIsAddModal}
        />
    );
};

export default AsideContainer;