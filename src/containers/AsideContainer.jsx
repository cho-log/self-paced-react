
import Aside from "../components/aside/Aside.jsx";

const AsideContainer = ({isModal,setIsModal}) => {
    return (
        <Aside isModal={isModal} setIsModal={setIsModal} />
    );
};

export default AsideContainer;