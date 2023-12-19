# muncCode

코딩하기 복잡한데, <br>
코드 번들링까지 직접할 필요 없잖아요! <br>
<br>
**실시간 코드 번들링 사이트 muncCode.**<br>
<img width="2029" alt="image" src="https://github.com/TaeHyeon47/muncCode/assets/96715209/9e1dfddd-d133-40e9-a7f7-a32568ab504d">

<br>
https://esbuild.github.io/

## 🐼 프로젝트 실행 방법
- 프로젝트 다운로드 후
- npm install
- npm start

## 🐼 프로젝트 소개

### 👨‍👧‍👧 개발 기간
- 2023년 01월 01일 ~ 12월 31일 (총 1년) : 회사 근무와 병행

### 👨‍👧‍👧 사용 기술 스택
- Typescript, JavaScript
- React, Redux, 
- ESBuild, Localforage
- HTML5, CSS

### 👨‍👧‍👧 NPM 사용 패키지
- ESBuild wasm
  - 브라우저 내에서 코드 Bundling을 위해 사용
  - ESBuild는 Babel의 Transpiling 과정과 Webpack의 Bundling 과정을 통합시켜 브라우저 내에서 코드 Bundle을 가능하게 함.
- Localforage
  - IndexedDB를 쉽게 사용하기 위해 사용
- Redux, Redux-thunk
  - 중첩된 컴포넌트 구조 안에서, 데이터 참조와 상태 관리를 효율적으로 하기 위한 목적
  - 미들웨어로 서버와의 비동기 액션 보다 편하게 다루기 위해 redux-thunk, 개발환경에서 state / action 등 쉽게 추적하고 관리하기 위해 
- Axios
  - 서버와의 HTTP 통신을 위해 사용
- React-resizable
  - 코드 번들링 창의 크기를 늘렸다 줄였다하기 위해서 사용.
- Bulmaswatch
  - 테마 적용을 위해 사용
- Jscodeshift
  - Meta(Faceboob)에서 만들었으며, Javascript/TypeScript 수정 도구. 국내에서는 토스에서 사용 중.

### 👨‍👧‍👧 ESBuild란?
- 바벨과 웹팩을 한번에 동작시켜 코드를 번들링해주는 모듈.
<img width="834" alt="image" src="https://github.com/TaeHyeon47/muncCode/assets/96715209/7008af89-af80-45b4-9db9-360323d1f4f7">

### 👨‍👧‍👧 ESBuild를 통한 코드 번들링 과정
- ESBuild를 웹에서 동작하기 위해서 Webassembly 버전인 'ESBuild wasm'을 사용.
- 웹에서 ESBuild를 사용하여 React 코드를 번들링하는 경우 React 모듈 파일을 찾을 수 없음. 따라서 아래의 그림과 같이 Plugin을 사용하여 별도의 NPM 저장소에서 React 모듈을 가져오는 방식으로 구현  
<img width="896" alt="image" src="https://github.com/TaeHyeon47/muncCode/assets/96715209/aa57b942-a667-4c19-8fe9-285e60e81444">

### 👨‍👧‍👧 아키텍쳐 개선
- 코드 번들링 과정을 모두 API 통신으로 처리하는 Code Pen과 같은 일반적인 코딩 툴 사이트는 아래와 같은 구조로 되어 있다.
![image](https://github.com/TaeHyeon47/muncCode/assets/96715209/29878dd3-9819-4a67-aa52-a213bb9e028d)

- ESBuild를 사용한 코드 번들링을 추가하고, iframe의 옵션값을 활용하여 아래와 같이 아키텍처를 개선 (더 자세한 내용은 블로그 링크 참조) 
![image](https://github.com/TaeHyeon47/muncCode/assets/96715209/f7f37517-bcaa-4b5a-8dc8-4738e63f8c8d)



