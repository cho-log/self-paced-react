import styles from "/src/styles/Head.module.css"
import Header from "./Header.jsx"

export default function HeadContainer() {
    return (
        <>
            <header className={styles["gnb"]}>
                <Header />
            </header>
        </>
    );
}