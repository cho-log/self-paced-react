import asianFoodIcon from "../assets/category-asian.png";
import chineseFoodIcon from "../assets/category-chinese.png";
import etcFoodIcon from "../assets/category-etc.png";
import japaneseFoodIcon from "../assets/category-japanese.png";
import koreanFoodIcon from "../assets/category-korean.png";
import westernFoodIcon from "../assets/category-western.png";

export default function getCategoryIcon(category) {
  switch (category) {
    case "아시안":
      return asianFoodIcon;
    case " 중식":
      return chineseFoodIcon;
    case "일식":
      return japaneseFoodIcon;
    case "한식":
      return koreanFoodIcon;
    case "양식":
      return westernFoodIcon;
    default:
      return etcFoodIcon;
  }
}
