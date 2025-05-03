import styles from "/src/styles/Head.module.css"

export default function Header({ setIsModalOpen, setActiveIndex }) {
    const handleClick = () => {
        setIsModalOpen(true);
        setActiveIndex(1);
    }

    return (
        <header className={styles["gnb"]}>
            <h1 className={`${styles["gnb__title"]} text-title`}>점심 뭐 먹지</h1>
            <button type="button" className={styles["gnb__button"]} aria-label="음식점 추가" onClick={handleClick}>
                <img src="/assets/images/button/add-button.png" alt="음식점 추가" />
            </button>
        </header>
    );
}