import styles from '../../../css/Category.module.css';
import { CATEGORYOPTION } from '../../constants/CategoryOption';

const CategoryFilter = () => {
  return (
    <main>
      <section className={styles.restaurantFilterContainer}>
        <select
          name="category"
          id="category-filter"
          className={styles.restaurantFilter}
          aria-label="음식점 카테고리 필터"
        >
          <option value="전체">전체</option>
          {CATEGORYOPTION.map((option, idx) => {
            return (
              <option key={idx} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </section>
    </main>
  );
};

export default CategoryFilter;
