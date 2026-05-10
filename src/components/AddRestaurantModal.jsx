import { ALL_CATEGORIES } from "../constants/categories";

export default function AddRestaurantModal({ onAddRestaurant, onClose }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">새로운 음식점</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const restaurant = {
              id: crypto.randomUUID(),
              category: formData.get("category"),
              name: formData.get("name"),
              description: formData.get("description"),
            };
            onAddRestaurant(restaurant);
            onClose();
          }}
        >
          <div className="form-item form-item--required">
            <label htmlFor="category" className="text-caption">
              카테고리
            </label>
            <select name="category" id="category" required>
              {ALL_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-item form-item--required">
            <label htmlFor="name" className="text-caption">
              이름
            </label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-item">
            <label htmlFor="description" className="text-caption">
              설명
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
            <span className="help-text text-caption">
              메뉴 등 추가 정보를 입력해 주세요.
            </span>
          </div>

          <div className="button-container">
            <button
              className="button button--primary text-caption"
              type="submit"
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
