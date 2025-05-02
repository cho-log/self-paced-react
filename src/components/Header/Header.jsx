import { useState } from "react";
import styles from "./Header.module.css";
import AddRestaurantModal from "../Sidebar/AddRestaurantModal";

function Header() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const handleClickedAddModalButton = () => {
    setIsAddModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsAddModalVisible(false);
  };

  return (
    <>
      <header className={styles.gnb}>
        <h1 className={`${styles.gnb__title} text-title`}>점심 뭐 먹지</h1>
        <button
          type="button"
          className={styles.gnb__button}
          aria-label="음식점 추가"
          onClick={handleClickedAddModalButton}
        >
          <img src="/templates/add-button.png" alt="음식점 추가" />
        </button>
      </header>
      {isAddModalVisible && <AddRestaurantModal onClose={handleCloseModal} />}
    </>
  );
}

export default Header;
