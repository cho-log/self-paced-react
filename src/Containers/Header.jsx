import addButton from "../../templates/add-button.png";
import styles from "../css/Header.module.css";
const Header = () => {
    return (
        <header className={styles.gnb}>
            <h1 className={`${styles.gnb__title} text-title`}>
                점심 뭐 먹지
            </h1>
            <button className="gnb__btn" type="button" aria-label="음식점 추가">
                <img src={addButton} alt="음식점 추가"/>
            </button>
        </header>
    );
};

export default Header;