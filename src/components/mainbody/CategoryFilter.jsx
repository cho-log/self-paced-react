import styles from "../../css/Category.module.css"; // CSS 모듈을 불러옵니다
import {options} from "../../datas/restaurantData.js";
/* 카테고리/정렬 필터 */

const CategoryFilter = () => {
    return (
        <section className={styles.restaurantFilterContainer}>
            <select
                name="category"
                id="category-filter"
                className={styles.restaurantFilter}
                aria-label="음식점 카테고리 필터"
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default CategoryFilter;
