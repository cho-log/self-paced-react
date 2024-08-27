import MainBody from "../components/mainbody/MainBody.jsx";

const MainContainer = ({setIsModal,restaurants}) => {
    return (
        <>
            <MainBody setIsModal={setIsModal} restaurants={restaurants} />
        </>
    );
};

export default MainContainer;