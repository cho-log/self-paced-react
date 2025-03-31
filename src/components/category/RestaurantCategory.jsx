import CategoryModal from "./CategoryModal"

export default function RestaurantCategory({ excludedCategories }) {
    const categoryList = [
        {
            id: "00",
            name: "선택해 주세요"
        },
        {
            id: "01",
            name: "전체"
        },
        {
            id: "02",
            name: "한식"
        },
        {
            id: "03",
            name: "중식"
        },
        {
            id: "04",
            name: "일식"
        },
        {
            id: "05",
            name: "양식"
        },
        {
            id: "06",
            name: "아시안"
        },
        {
            id: "07",
            name: "기타"
        }
    ]

    return (
        categoryList
            .filter((category) => !excludedCategories.includes(category.name))
            .map((category) =>
                <CategoryModal
                    key={category.id}
                    name={category.name}
                />
            )
    );
}