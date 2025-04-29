import React, { useState } from 'react';
import styles from '../../css/Aside.module.css';

const AddRestaurantModal = ({ setIsAddModalOpen }) => {
  const [form, setForm] = useState({
    category: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUploadForm = () => {

    setIsAddModalOpen(false);
  }

  return (
    <div className={`${styles['modal']} ${styles['modal--open']}`}>
      <div
        className={styles['modal-backdrop']}
        onClick={() => setIsAddModalOpen(false)}
      ></div>
      <div className={styles['modal-container']}>
        <h2 className={`${styles['modal-title']} ${styles['text-title']}`}>
          새로운 음식점
        </h2>
        <form>
          <div
            className={`${styles['form-item']} ${styles['form-item--required']}`}
          >
            <label htmlFor={`${styles['category']} ${styles['text-caption']}`}>
              카테고리
            </label>
            <select
              className={styles['category']}
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">선택해 주세요</option>
              <option value="한식">한식</option>
              <option value="중식">중식</option>
              <option value="일식">일식</option>
              <option value="양식">양식</option>
              <option value="아시안">아시안</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div
            className={`${styles['form-item']} ${styles['form-item--required']}`}
          >
            <label htmlFor="name text-caption">이름</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder='가게 이름을 입력해주세요.'
              required
            />
          </div>

          <div className={styles['form-item']}>
            <label htmlFor="description text-caption">설명</label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={5}
              value={form.description}
              onChange={handleChange}
            ></textarea>
            <span className={`${styles['help-text']} text-caption`}>
              메뉴 등 추가 정보를 입력해 주세요.
            </span>
          </div>

          <div className={styles['button-container']}>
            <button
              className={`${styles['button']} ${styles['button--primary']} text-caption`}
              onClick={handleUploadForm}
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
