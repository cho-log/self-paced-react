# Development Log - Step 2 (kor)

## 해야 할 일:

- 레스토랑 데이터용 디렉토리 만들기

- 컴포넌트가 props로부터 데이터를 받도록 수정하기

## 작업 과정 중:

- getCategory와 getFilteredRestaurant을 위한 유틸 함수를 만들었습니다.

- 레스토랑 데이터와 카테고리 데이터용 디렉토리를 만들었습니다.

- RestaurantListItem이 반복되는 요소이므로 별도의 컴포넌트로 만들기로 결정했습니다.

- 카테고리가 변경될 때 필터링된 레스토랑을 어떻게 변경해야 할지 고민하는 문제가 있었습니다. filteredRestaurants를 상태(state)로 만들 필요가 없다는 것을 깨달았습니다. 그냥 상수로 설정하고 그것을 통해 사용하면 됩니다.

- 또한, 이번 단계의 요구 사항에 없었기 때문에 Modal에서는 아무것도 변경하지 않기로 결정했습니다. 모달을 수정하는 다음 단계에서 진행할 계획입니다.

## 헷갈렸던 점:

- 카테고리와 레스토랑의 명명이 올바른지 확실하지 않습니다. data라는 이름이 너무 일반적인 것 같습니다. 카테고리에 상수를 사용하는 것이 더 나은지 궁금합니다.

- 또 다른 생각했던 것은 카테고리를 배열로 사용할지 아니면 JSON 객체로 사용할지에 대한 것입니다. 처음 시도한 방식은 JSON 객체 배열로 만드는 것이었지만, 값이 하나뿐이므로 단순히 문자열 배열로 사용하는 것이 더 간단할 수도 있다는 것을 깨달았습니다. 하지만 카테고리의 키가 값과 동일하다는 점이 마음에 들지 않았습니다. 그래서 객체 배열로 되돌아가서 객체에 키를 추가했습니다.

# Development Log - Step 2 (eng)

## Things to do:

- Make directory for restaurant data
- Change component to receive data from props

## During the process:

- I've made util functions for getting getCategory and getFilteredRestaurant.

- Made a directory for restaurant data and category data.

- Decided to make RestaurantListItem as a seperate component since it's a repeating element.

- Sort of had a issue where I was wondering how to change filtered restaurants when category changes. I've realized that I don't need to make filteredRestaurants into a state. I just set it a const and use it through that.

- I've also decided not to change anything in the Modal for this step since it wasn't in the requirements. I plan to do it in the next step where we modify the modals.

## Things that made me confused:

- Im not sure if the naming for category and restaurant is correct. The name `data` seems too generic. Im wondering if using constants for category is a bit better.

- Another thing that I had in mind is whether to use category as a array or a json object. The first approach I did was making it into a json object array but realized that since it only has one value, it might just be simpler to use it as a string array. But then I didn't really like the fact that the key for the category was the same as the value. So I reverted back to an object array and added keys into the object.

