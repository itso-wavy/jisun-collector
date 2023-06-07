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

23/05/06 - 23/05/14 + 5/29

### - FE

`vanilla javascript`, `scss`

### - BE

`json-server`

## 3. 구현 기능

### - 헤더

https://github.com/itso-wavy/jisun-collector/assets/108520997/5f804705-73d6-45ae-b59c-965174d1095d

- 반응형 네브바

- 테마 선택 메뉴

  - `light`, `dark`, `color` 3가지 테마 제공
  - 모바일뷰에서는 드롭다운 디자인으로 변형
  - 첫방문시(로컬스토리지 내 저장 테마가 없을 때) 운영체제 설정에 따른 `light`/`dark` 설정이 적용됨
  - 테마 선택시 로컬스토리지에 저장하여 설정 개인화
  - 재방문시(로컬스토리지 내 저장 테마가 있을 때) 개인 설정 테마 자동 적용

- URL 라우팅을 통한 히든 페이지 이동(Easter Egg)

### - 메인

https://github.com/itso-wavy/jisun-collector/assets/108520997/6a4088bb-d5c8-4973-a716-54516bd6f36e

- 태그 선택 메뉴

  - `cute`, `pretty`, `serious`, `dull` 4가지 분류 태그
  - 태그 버튼 클릭시 요청값에 맞는 데이터를 fetch
  - 맞는 데이터가 없다면 결과 없음을 안내

- 로딩 UI

  - 시머 애니메이션을 적용한 로딩 스켈레톤 사용

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

- 저작권 표시, 레포지토리 링크

### - 기타

- URL 라우팅 처리
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
    │  │  HiddenPage.js
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
    ├─🎫router
    │      router.js
    │
    └─🎫style
            style.css
            style.scss
            _font.scss
            _footer.scss
            _global.scss
            _header.scss
            _hiddenpage.scss
            _main.scss
            _reset.scss
```

## 5. 개발 일지

### 1. state 관리와 setState 함수 사용

새로운 기능을 추가할 때 먼저 어떤 state에 의한 렌더링 변화가 필요한지 생각하게 되었다. 또한 state들을 어디에서 선언하고 관리하여 하위 컴포넌트로 내려주는 게 적절할지 계속해서 고민했다.

일례로 `결과없음`을 나타내기 위해 `isEmpty`라는 state를 만들어야 했는데 이를 `Empty` 클래스 내에 만들었다가 상위 컴포넌트인 `SearchResult` 클래스로 옮겼다가 다시 `Empty` 클래스로 옮겨 렌더링하기로 결정하는 식이었다.

일관된 관리 방법이 필요했고 결론적으로 되도록 해당되는 클래스 내에 state 변수를 선언하는 것으로 코드 컨벤션을 정했다. 그리고 전달되는 데이터에 따라 setState 메서드를 통해 새로운 state 값을 할당하고 render 메서드를 통해 렌더링 과정을 별도 관리했다.

```js
class Class {
  state = null;
  // ...
  setState(newState) {
    this.state = newState;
    render();
  }
  render() {
    // ...
  }
}
```

이렇게 컨벤션을 정하고서부터는 기능 구현을 단계별로 쪼개 생각하고 코드 재활용을 고민하는 능력이 생겼다.

### 2. 데이터의 자료형 결정 & 바닐라JS에서 리액트 문법 사용

작성 중...😴

> 다양한 인터랙티브 UI 고민

> json-server 데이터를 배포

### 5. 라이브러리(프레임워크) React 이해

자바스크립트 학습 후 리액트를 처음 만났을 때 나는 너무 낯설어서 새로운 언어를 0부터 다시 배우는 듯했다. 리액트에서는 JSX라는 문법을 쓰고, 클래스 컴포넌트란 복잡하게 생겼다는 등의 지식을 일방향으로 받아들였다.

그래서 리액트로 앱 하나를 만드는 프로젝트 후에도 근본적인 이해를 하지 못하는 수준이었는데 반대로 자바스크립트 프로젝트를 하면서 리액트의 구조를 이해하게 되었다. 아래는 작은 예시 코드이다.

```js
render() {
  if (this.data.length) {
    this.$resultList.innerHTML = this.data
      .map(
        item => `<li class="result-item">
                  <img src=${item.url} alt='${item.tag} jisun'>
                  <div class="preview"><span class="heart ${
                    item.isFavorite ? 'fav' : ''
                  }">❤︎</span></div>
                </li>`
      )
      .join('');
  } else {
    // ...
  }
}
```

순수한 자바스크립트이지만 언뜻 보면 리액트 코드 같다.

리액트를 배우기 전에는 이런 식으로 생각을 하지 못했는데, 라이브러리(프레임워크)는 프론트엔드 전체 생태계 뿐만 아니라 내게도 새로운 패러다임이었다.

그리고 패러다임을 전환하면서 겪은 학습 정체의 원인이 자바스크립트의 신문법과 함수형 프로그래밍에 대한 이해 부족임을 알게 되었다.

## 6. 프로젝트를 통해 배운 것

구현을 단계적으로 접근할 수 있고, 구현 대상을 state, props, component, rendering, functional programming의 관점으로 바라보게 되었고, 어떤 기능도 구현할 수 있다는 자신감이 생겼다.

직후 자바스크립트 프로젝트 [Algoview](https://github.com/Algorithm-Coding-Test-Data-Analysis/algoview)에 참여하면서 프론트엔드 27인팀의 개발 리딩을 하고 핵심 기능들을 전부 직접 구현하였다.

## 7. 참고한 자료

- 👨🏻‍🏫 위니브 객체지향프로그래밍 강의(Wade T) [note1](https://github.com/itso-wavy/likelion-FE3/blob/177c58a9489d6fd7d4c96718abb26a7ef5cf39a6/JS/OOP.js) / [note2](https://github.com/itso-wavy/likelion-FE3/blob/177c58a9489d6fd7d4c96718abb26a7ef5cf39a6/JS/OOP_todolist.html)
  - 객체 지향 프로그래밍의 개념을 가장 쉽고 명쾌하게 가르쳐주셨음! 매번 class의 뼈대만 훑고 지나가다가 신문법의 등장과 사용 목적을 알게 된 계기
- 📗 무던한 개발자를 위한 모던한 자바스크립트(카이 호스트만, 2021) [note1](https://github.com/itso-wavy/JS-challenges/blob/main/javascript-impatient/ch3.%ED%95%A8%EC%88%98%EC%99%80%20%ED%95%A8%EC%88%98%ED%98%95%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.js) / [note2](https://github.com/itso-wavy/JS-challenges/blob/main/javascript-impatient/ch4.%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.js)
  - 위의 강의를 기초로 하여 심화 지식을 습득할 수 있었음. 정말 많은 코드를 작성하고 콘솔에 돌려보게 해준 도서
- 📑 노마드코더 CSS 강의 [레포지토리](https://github.com/nomadcoders/css-masterclass): grid layout([note](https://github.com/itso-wavy/CSS-is-fun/tree/main/Grid_Responsive_Layouts))

- 📑 개발자 황준일 블로그: [Vanilla Javascript로 웹 컴포넌트 만들기](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%E1%84%8B%E1%85%B4-%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC)

## 8. 마치며

작성 중...😴

> (아쉬웠던 점: 무한스크롤 공부했으나 적용 못 함/호준님 피드백 내용)

> (이후 계획: react/redux/typescript 토이프로젝트)
