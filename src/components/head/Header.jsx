import "/src/styles/Head.css"

export default function Header() {
    return (
        <>
            <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
            <button type="button" className="gnb__button" aria-label="음식점 추가">
                <img src="./src/assets/images/button/add-button.png" alt="음식점 추가" />
            </button>
        </>
    );
}