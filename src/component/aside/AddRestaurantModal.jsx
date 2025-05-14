import React, { useState } from 'react';
import styles from '../../css/Aside.module.css';
import insertImgSrc from '../utils/insertImgSrc';
import Modal from './Modal';

const AddRestaurantModal = ({ isOpen, setIsAddModalOpen }) => {
  const initForm = {
    category: "",
    name: "",
    description: "",
    imgSrc: null,
  };
  const [form, setForm] = useState(initForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setForm({ ...form, category: value, imgSrc: insertImgSrc[value] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleUploadForm = async () => {
    if (!form.category || !form.name) {
      alert("레스토랑의 카테고리와 이름을 모두 입력해주세요!");
      return;
    }
    setLoading(true);

    try {
      await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm(initForm);
      setIsAddModalOpen(false);
      setLoading(false);
    } catch (error) {
      console.error('레스토랑 추가 실패:', error);
      alert("레스토랑 추가에 실패했습니다.");
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsAddModalOpen(false)}>
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
            placeholder="가게 이름을 입력해주세요."
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
            disabled={loading}
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;
