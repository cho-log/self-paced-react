import React from "react";
import styles from "../../css/Body.module.css";

const CategorySortFilter = () => {
    return (
        <section className={styles["restaurant-filter-container"]}>
          <select name="category" id="category-filter" className={`${styles["restaurant-filter"]} ${styles["restaurant-filter-container-select"]}`} aria-label="음식점 카테고리 필터">
            <option value="전체">전체</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </select>
        </section>
    )
}

export default CategorySortFilter;