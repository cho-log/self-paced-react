import styles from '../../../css/Restaurant.module.css';
import KoreanIcon from '../../../assets/category/category-korean.png';
import AsianIcon from '../../../assets/category/category-asian.png';
import ChineseIcon from '../../../assets/category/category-chinese.png';
import EtcIcon from '../../../assets/category/category-etc.png';
import JapaneseIcon from '../../../assets/category/category-japanese.png';
import WesternIcon from '../../../assets/category/category-western.png';

const RestaurantCard = ({ alt, name, description }) => {
  let image;
  switch (alt) {
    case '한식':
      image = KoreanIcon;
      break;
    case '중식':
      image = ChineseIcon;
      break;
    case '아시안':
      image = AsianIcon;
      break;
    case '일식':
      image = JapaneseIcon;
      break;
    case '양식':
      image = WesternIcon;
      break;
    case '기타':
      image = EtcIcon;
      break;
  }
  return (
    <li className={styles.restaurant}>
      <div className={styles.restaurant__category}>
        <img src={image} alt={alt} className={styles.categoryIcon} />
      </div>
      <div className={styles.restaurant__info}>
        <h3 className={`${styles.restaurant__name} text-subtitle`}>{name}</h3>
        <p className={`${styles.restaurant__description}  text-body`}>
          {description}
        </p>
      </div>
    </li>
  );
};
export default RestaurantCard;
