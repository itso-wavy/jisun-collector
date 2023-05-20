# 리드미 작성 중...😴

<div align="center" >

  <img width="100" src="./public/favicon.png" alt="busungbusung-heart">

  <h1 style="margin-top: 0px;">jisun-collector</h1>

<div align="left">

_휴일마다 영화를 5편씩 때려보던 딥한 취미러 W씨...<br>
개발에 재미를 붙인 뒤 영화 볼 시간이 없어 슬퍼하던 와중 `지선씨네마인드`를 접하게 되었다고 한다.<br>
앞으로 영화는 사랑스러운 지선님이 봐. 나는 그런 지선님을 볼게._

> <small>정보: 털난 하트 아이콘은 과거 구글의 공식 이모지입니다. 제 마음을 대변하는 건 아닙니다.</small>

</div>

![javascript](https://shields.io/badge/javascript-black?style=for-the-badge&logo=javascript)
![scss](https://shields.io/badge/scss-black?style=for-the-badge&logo=sass)
![vite](https://img.shields.io/badge/vite-000000?style=for-the-badge&logo=vite)
![glitch](https://img.shields.io/badge/glitch-000000?style=for-the-badge&logo=glitch)

  <!-- <img width="800" src="/" alt="시연영상" align="center"> -->
</div>

## 1. 프로젝트 목표

- [x] 바닐라 자바스크립트로 SPA 구현하기
- [x] 객체 지향 프로그래밍 코드 작성하기
- [x] 클래스/프로토타입/this/DOM 조작/이벤트 버블링/모듈 등 까다로운 문법과 친해지기
- [x] 이전 리액트 프로젝트에서 아쉬웠던 점-동적 UI 구현(다크 모드/로딩 UI/무한스크롤/페이드 모달 UI/호버 툴팁 등)
- [x] 효율적인 api 관리 고민하고 에러 처리하기
- [x] 그리드 레이아웃 활용하기
- [x] 리팩토링 하기

## 2. 개발 환경

### - 기간

23/05/06 - 23/05/14

### - FE

`vanilla javascript`, `scss`

### - BE

`json-server`

## 3. 구현 기능

### - 헤더

- 반응형 네브바

- 테마 선택 메뉴
  - `light`, `dark`, `color` 3가지 테마 제공
  - 모바일뷰에서는 드롭다운 디자인으로 변형
  - 첫방문시(로컬스토리지 내 저장 테마가 없을 때) 운영체제 설정에 따른 `light`/`dark` 설정이 적용됨
  - 테마 선택시 로컬스토리지에 저장하여 개인화 설정
  - 재방문시(로컬스토리지 내 저장 테마가 있을 때) 개인 설정 테마 자동 적용

### - 메인

- 태그 선택 메뉴

  - `cute`, `pretty`, `serious`, `dull` 4가지 분류 태그
  - 태그 버튼 클릭시 요청값에 맞는 데이터를 fetch
  - 맞는 데이터가 없다면 결과 없음을 안내

- 로딩 UI

  - 시머 애니메이션을 적용한 로딩 스켈레톤 적용

- 결과 리스트

  - 데이터 아이템에 호버시 즐겨찾기 여부 미리보기 가능
  - 데이터 아이템 클릭시 모달 UI 등장

- 모달 UI

  - `모달 X 버튼 클릭`, `모달 밖 화면 클릭`, `ESC 키 입력`시 모달 닫힘
  - 모달 여닫기에 fade 효과 적용

- 즐겨찾기 기능
  - `favorite` 버튼으로 즐겨찾기한 데이터 모아보기 가능
  - 모달 UI 내 즐겨찾기(❤︎) 버튼을 한번 클릭시 즐겨찾기 추가, 두번 클릭시 즐겨찾기 취소됨
  - favorite 버튼을 누르면 결과 목록으로 보여줌

### - 푸터

- 저작권 표시

### - 기타

- 접근성을 위해 시맨틱 태그 활용, css 가시성 고려
- 그리드를 이용한 반응형 레이아웃
- 요소 전반에 호버 & 포커스 & 애니메이션 등 인터랙티브 효과

## 4. 폴더 구조

```shell
│  index.html
│
└─src
    │  main.js
    │
    ├─🎫api
    │      api.js
    │
    ├─🎫components
    │  │  App.js
    │  │  Footer.js
    │  │  Header.js
    │  │  Main.js
    │  │
    │  ├─🏷️header
    │  │      StyleTheme.js
    │  │
    │  └─🏷️main
    │          Empty.js
    │          Favorites.js
    │          ImageInfo.js
    │          LoadingShimmer.js
    │          SearchInput.js
    │          SearchResult.js
    │
    └─🎫style
            style.css
            style.scss
```

## 5. 배운 점

### 1. state 관리와 setState 함수 사용

새로운 기능을 추가할 때마다 어떤 state가 필요한지 생각하게 되었다. 또한 state를 끌어올리기보다는 상위 컴포넌트에서 내려주는 방식으로 사용하는 게 훨씬 편하다는 걸 경험하였다. 다만 전역 상태 관리 도구를 사용하지 않으므로 state의 적절한 위치를 고민해야 했다.

일례로 `결과없음`을 나타내기 위해 `isEmpty`라는 state를 만들어야 했는데 이를 `Empty` 클래스 내에 만들었다가 상위 컴포넌트인 `SearchResult` 클래스로 옮겼다가 다시 `Empty` 클래스로 옮겨 랜더링하기로 결정하는 식이었다.

일관된 관리 방법이 필요했고 결론적으로 되도록 해당되는 클래스 내에 state 변수를 선언한 뒤 전달되는 데이터에 따라 setState 메서드를 통해 새로운 state 값을 할당하는 식으로 컨벤션을 통일했다.

```js
class Class {
  state = null;
  // ...
  setState(newState) {
    this.state = newState;
  }
}
```
