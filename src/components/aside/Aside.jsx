import AddModal from "./AddModal.jsx";
import InformationModal from "./InformationModal.jsx";

const Aside = ({isModal,setIsModal,isAddModal,setIsAddModal}) => {
    return (
        <aside>
            {isAddModal && <AddModal setIsAddModal={setIsAddModal}  />}
            {isModal.isOpen && <InformationModal isModal={isModal} setIsModal={setIsModal} />}
        </aside>
    );
};

export default Aside;