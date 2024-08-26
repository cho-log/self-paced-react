import addButton from "../../../templates/add-button.png";
import styles from "../../css/Header.module.css";

const Header = () => {
    return (
        <header className={styles.gnb}>
            <h1 className={`${styles.gnb__title} styles.textTitle`}>점심 뭐 먹지</h1>
            <button type="button" className={styles.gnb__button} aria-label="음식점 추가">
                <img src={addButton} alt="음식점 추가"/>
            </button>
        </header>
    );
};

export default Header;
