import asianFoodIcon from "../assets/category-asian.png";
import chineseFoodIcon from "../assets/category-chinese.png";
import etcFoodIcon from "../assets/category-etc.png";
import japaneseFoodIcon from "../assets/category-japanese.png";
import koreanFoodIcon from "../assets/category-korean.png";
import westernFoodIcon from "../assets/category-western.png";

export default function getCategoryIcon(category) {
  const iconMap = {
    아시안: asianFoodIcon,
    중식: chineseFoodIcon,
    일식: japaneseFoodIcon,
    한식: koreanFoodIcon,
    양식: westernFoodIcon,
    기타: etcFoodIcon,
  };

  return iconMap[category] || etcFoodIcon;
}
