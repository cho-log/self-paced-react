# Development Log - step 1 (kor)

## 프로젝트중 궁금해진 점

- What is vite?
  - Vite를 사용해 본 적이 없어서 무슨 역할을 하는지 궁금하게 되었습니다.
    > a faster and leaner development experience for modern web projects.
- Why vite?
  - Vite를 들어 본 적은 있는데 사용하지 않다 보니까 "왜 vite를 사용할까?"라는 생각이 조금 들었습니다. 이전까지 하던 프로젝트는 다 NextJs를 사용하다 보니까 찾아본 적이 없던 것 같습니다. 그래서 이번 기회로 조금 찾아보니 React 를 처음 사용하는 사람들에게 Vite가 nextjs 보다 적합하다는 것을 알게 되었습니다.
    > Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a development server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.
- <React.Fragment> and <></>
  - 이 기능도 사용해 보았지만, 두 개의차이점을 생각해 본 적이 없었던 것 같습니다. 이번에 `Fragment`가 keyword에 들어가 있어서 알아보게 되었습니다.
    > You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.

## 진행방식/느낀점 및 시행착오

- 항상 리엑트 프로젝트를 할 때 Header 컴포넌트를 먼저 만들었던 것 같습니다. 다른 컴포넌트들보다 쉽게 만들 수 있고 깔끔한 헤더가 있으면 마음이 편해지는 느낌도 드는 것 같습니다.

- 이번 미션의 접근 방식은 다음과 같습니다. index.html과 README.md를 한번 훑어보고, 어느 부분들을 컴포넌트로 나눠야 할지 정했습니다. 이들을 각각 파일에 만들고 `class` 태그를 `ClassName`으로 바꾸고, CSS module을 사용해서 스타일링도 해주기로 했습니다.

- CSS가 여러 컴포넌트에 나타나는 경우에는 이를 global.css에 사용했습니다.

- CSS module을 처음 사용해 보는 것이어서 예시를 참고하면서 사용했습니다. CSS module을 새로운 파일을 만들어서 할지 고민하다가 오히려 파일 구성이 복잡해질 것 같아서 컴포넌트와 같은 파일에 놓기로 했습니다

- 처음에는 CSS module을 사용할 때 `style.styleName`을 사용했었지만, 여러 CSS가 kebab-case로 작성된것을 보고 `${style['style-name']`으로 변경해서 사용하게 되었습니다.

- 또 다른 문제는 image 파일들을 어디에 배치해 놓을지 고민하게 되었습니다. 찾아보니 public 파일에 넣으라는 얘기와 src 파일에 넣으라는 입장들이 있었습니다. 이중 제 이미지는 컴포넌트에 사용되기 때문에 src 파일에 assets를 만들어서 image들을 배치 해놓았습니다.

- 비슷한 문제로는 컴포넌트의 파일 구성을 어떻게 할지도 고민을 많이 했습니다. 각각 컴포넌트를 다른 파일에 넣어서 할지, 아니면 비슷한 컴포넌트는 묶어서 할지 고민했습니다. 두 가지의 방식을 다 해본 결과 묶어서 넣는 게 조금 더 보기 편하다고 생각해서 현재 파일 구성으로 진행해 왔습니다.

- Prettier가 처음에는 적용이 안 되다가 Vscode의 default formatter를 prettier로 설정하니 파일을 포매팅하는 것을 볼 수 있었습니다.

# Development Log - Step 1 (eng)

## Things to do:

- Make Each Component

  - Header
  - Category filter
  - Restaurant List
  - Restaurant Detail Modal
  - AddRestaurant Modal

- Make FigmaJam for project architecture design

- Result Image/Video

## Things that just peaked my interest:

- What is vite?
  - a faster and leaner development experience for modern web projects.
- Why vite?
  - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a development server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

# During the process

First thing I'm going to make is this Header Component. Personally feel like this is the easiest one to start with.

The approach was simple. I take sections that are divded and make them as a component. Then I just needed to rename from class to className and use the css module for styling.

I also added some of the css that seems to be used in multiple places in the global.css file.

This was the first time I used CSS modules. Had to look at some examples to figure out how to use it.

Had to use {`${style['class-name']}'} due to some of the css being named in kebab-case. I've taken this approach with the help of the docs.

Another issue was where to put the image files. I heard that some people put it in the public folder, but I found out that things that are used in the components should probably go in the src folder.

One of the problems I had was deciding how I should structure my components. I was wondering if I should make a component folder for each component or gather similar components in one folder. In the end I went for the latter.

Found out that my prettier wasn't working properly. After setting prettier as the default formatter for vscode, it formatted the code.
