// import AddModal from "./AddModal.jsx";
import InformationModal from "./InformationModal.jsx";

const Aside = ({isModal,setIsModal}) => {
    return (
        <aside>
            {/*<AddModal/>*/}
            {isModal.isOpen && <InformationModal isModal={isModal} setIsModal={setIsModal} />}
        </aside>
    );
};

export default Aside;