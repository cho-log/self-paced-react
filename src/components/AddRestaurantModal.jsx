import "../styles/components/Modal.css";
import "../styles/components/Form.css";
import Modal from "./Modal.jsx";

export default function AddRestaurantModal({ onAdd, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onAdd({
      category: String(fd.get("category") || ""),
      name: String(fd.get("name") || ""),
      description: String(fd.get("description") || ""),
    });
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="modal-title text-title">새로운 음식점</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-item form-item--required">
          <label className="text-caption" htmlFor="category">
            카테고리
          </label>
          <select name="category" id="category" required defaultValue="">
            <option value="" disabled>
              선택해 주세요
            </option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="form-item form-item--required">
          <label className="text-caption" htmlFor="name">
            이름
          </label>
          <input id="name" type="text" name="name" required />
        </div>

        <div className="form-item">
          <label className="text-caption" htmlFor="description">
            설명
          </label>
          <textarea
            id="description"
            name="description"
            cols={30}
            rows={5}
            placeholder="메뉴 등 추가 정보를 입력해 주세요."
          />
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className="button-container">
          <button className="button button--primary text-caption" type="submit">
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
