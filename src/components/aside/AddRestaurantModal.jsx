import { CATEGORIES } from "../../data/categories";
import { useRef } from "react";
import Modal from "../modal/Modal";

function AddRestaurantModal({ onCloseAddModal, onAddRestaurant }) {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newRestaurant = {
      id: 'a' + Date.now(),
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value
    };
    onAddRestaurant(newRestaurant);
    onCloseAddModal();
  }

  return (
    <Modal onClose={onCloseAddModal}>
      <h2 className="modal-title text-title">새로운 음식점</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item form-item--required">
          <label htmlFor="category">카테고리</label>
          <select name="category" id="category" ref={categoryRef} required>
            <option value="">선택해 주세요</option>
            {CATEGORIES.map((category) => (
              <option key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-item form-item--required">
          <label htmlFor="name" className="text-caption">이름</label>
          <input type="text" name="name" id="name" ref={nameRef} required />
        </div>
        <div className="form-item">
          <label htmlFor="description" className="text-caption">설명</label>
          <textarea name="description" id="description" ref={descriptionRef} cols="30" rows="5"></textarea>
          <span className="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>
        <div className="button-container">
          <button type="submit" className="button button--primary text-caption">추가하기</button>
        </div>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal
