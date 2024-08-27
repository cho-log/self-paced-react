import AddModal from "./AddModal.jsx";
import InformationModal from "./InformationModal.jsx";

const Aside = ({isModal,setIsModal,isAddModal,setIsAddModal,restaurants,setRestaurants}) => {
    return (
        <aside>
            {isAddModal && <AddModal setIsAddModal={setIsAddModal} restaurants={restaurants} setRestaurants={setRestaurants} />}
            {isModal.isOpen && <InformationModal isModal={isModal} setIsModal={setIsModal} />}
        </aside>
    );
};

export default Aside;