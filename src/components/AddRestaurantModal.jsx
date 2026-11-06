import '../css/Modal.css';

import { CATEGORY_OPTIONS } from '../constants/categoryOptions';
import Modal from './Modal';

export default function AddRestaurantModal({ onAddRestaurant, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onAddRestaurant({
      id: Date.now(),
      name: formData.get('name'),
      description: formData.get('description'),
      category: formData.get('category'),
    });
  }

  return (
    <Modal title="새로운 음식점" onClose={onClose}>
      <form onSubmit={(event) => handleSubmit(event)}>
        {/*카테고리*/}
        <div className="form-item form-item--required">
          <label htmlFor="category">카테고리</label>
          <select name="category" id="category" required>
            <option value="">선택해 주세요</option>
            {CATEGORY_OPTIONS}
          </select>
        </div>
        {/*음식점이름*/}
        <div className="form-item form-item--required">
          <label htmlFor="name">이름</label>
          <input type="text" name="name" id="name" required />
        </div>
        {/*설명*/}
        <div className="form-item">
          <label htmlFor="description">설명</label>
          <textarea name="description" id="description" cols="30" rows="5"></textarea>
          <span className="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>
        {/*추가버튼*/}
        <div className="button-container">
          <button className="button button--primary text-caption" type="submit">
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
