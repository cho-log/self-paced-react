import RestaurantInfoModal from "../components/RestaurantInfoModal.jsx";
import RestaurantAddModal from "../components/RestaurantAddModal.jsx";

const Aside = () => {
    return (
        <aside>
            <RestaurantInfoModal/>
            <RestaurantAddModal/>
        </aside>
    );
};

export default Aside;