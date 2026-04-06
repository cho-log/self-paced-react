import "../styles/default.css"
import "../styles/Header.css"
function Header({setAddBtnOn}) {
  return (
    <header>
      <h1 className="gnb_title text-title">점심 뭐 먹지</h1>
      <button type="button" onClick={()=>setAddBtnOn(true)} className="gnb__button" aria-label="음식점추가">
        <img src="../../../templates/add-button.png" alt="음식점 추가"></img>
      </button>
    </header>
  );
}

export default Header;
