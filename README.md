<div align="center" >

  <img width="100" src="https://raw.githubusercontent.com/itso-wavy/jisun-collector/main/public/favicon.png?token=GHSAT0AAAAAABYF26BTGWX6SJGKGHSCIMLAZC3NZYQ" alt="busungbusung-heart">

  <h1 style="margin-top: 0px;">jisun-collector</h1>

<div align="left">

_휴일마다 영화를 5편씩 때려보던 딥한 취미러 W씨...<br>
개발에 재미를 붙인 뒤 영화 볼 시간이 없어 슬퍼하던 와중 `지선씨네마인드`를 접하게 되었다고 한다.<br>
앞으로 영화는 사랑스러운 지선님이 봐. 나는 그런 지선님을 볼게._

> <small>정보: 털난 하트 아이콘은 과거 구글의 공식 이모지입니다. 제 마음을 대변하는 건 아닙니다.</small>

</div>

![react](https://shields.io/badge/react-black?style=for-the-badge&logo=react)
![typescript](https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript)
![vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel)
![vite](https://img.shields.io/badge/vite-000000?style=for-the-badge&logo=vite)

  <!-- <img width="800" src="/" alt="시연영상" align="center"> -->
</div>

### start command

```shell
npm i

(front) npm run dev

(back) json-server --watch src/data/data.json --port 5000
```

### 목차

- [1. 목표🎯](#1-목표)
- [2. 개발 환경](#2-개발-환경)
  - [- 기간](#--기간)
  - [- 스펙](#--스펙)
- [3. 기능 명세](#3-기능-명세)
  - [1) 기타](#1-기타)
- [4. 트러블슈팅](#4-트러블슈팅)
  - [1. 트러블](#1-트러블)
  - [2. 트러블](#2-트러블)
- [5. 프로젝트를 통해 배운 것](#5-프로젝트를-통해-배운-것)
- [6. 참고 자료](#6-참고-자료)
- [7. 마치며](#7-마치며)

## 프로젝트 목표

- 바닐라 자바스크립트로 SPA 구현하기
- 객체 지향 프로그래밍 코드 작성하기
- 클래스/프로토타입/this/DOM 조작/이벤트 버블링 등 까다로운 문법과 친해지기
- 이전 리액트 프로젝트에서 아쉬웠던 점-동적 UI 구현(다크 모드/로딩 UI/무한스크롤/모달 UI 등)
- 그리드 레이아웃 적용하기
- 리팩토링 하기
<!-- * 모듈화/테스트 코드 작성? -->

## 구현 기능

### - 스타일링

- [x] 그리드를 이용한 반응형 레이아웃
- [x] 요소 전반에 호버 & 포커스 & 애니메이션 등 인터랙티브 효과주기

### - 헤더

- [x] 반응형 네브바
- [x] 테마 선택 메뉴
  - [x] `light`, `dark`, `color` 3가지 테마 제공
  - [x] 모바일뷰에서는 드롭다운 디자인으로 변형
  - [x] 첫방문시(로컬스토리지 내 저장 테마가 없을 때) 운영체제 설정에 따른 `light`/`dark` 설정이 적용됨
  - [x] 테마 선택시 로컬스토리지에 설정을 저장하여 테마 개인화
  - [x] 재방문시(로컬스토리지 내 저장 테마가 있을 때) 마지막 설정한 테마를 로컬스토리지에서 불러와 자동 적용

### - 메인

- [x] 데이터 분류 선택 메뉴
  - [x] `cute`, `pretty`, `serious` 3가지 분류 태그
  - [x] `favorite` 버튼으로 즐겨찾기한 데이터 모아보기
- [x] 시머 애니메이션을 적용한 로딩 스켈레톤 UI
- [x] 데이터 아이템 클릭시 모달 UI 등장
  - [x] `모달 X 버튼 클릭`, `모달 밖 화면 클릭`, `ESC 키 입력`시 모달 닫힘
- [ ] 즐겨찾기 기능
  - [ ] 모달 UI 내 즐겨찾기 버튼을 누르면 즐겨찾기 데이터에 추가됨
  - [ ] favorite 버튼을 누르면 결과 목록으로 보여줌

### - 푸터

## 트러블슈팅 기록

### 1.

즐겨찾기 기능을 추가하면서 imageInfo(모달 UI)을 일반 데이터 보여주기와 즐겨찾기용 데이터 보여주기에 중복으로 사용하게 되었다. 두 경우 UI는 같으나 약간의 기능 차이가 있었다.

일반 데이터용에서는 ❤︎를 누르면 즐겨찾기 목록에 아이템을 추가한 후 더 이상 버튼이 눌리지 않아야 했고, 즐겨찾기용에서는 ❤︎를 눌렀을 때 즐겨찾기 해제가 되어야 했다.

isFavorite이라는 새로운 state를 만들어 문제를 해결했다. 그 과정에서 state를 어디에 보관해서 어디로 전달하는 게 좋을지, 리액트에서 왜 JSX 문법을 사용하는 게 편한지를 몸소 느껴 배우게 되었다.

## 학습 자료

- 제주코딩베이스캠프 강의(Wade T) [note1](https://github.com/itso-wavy/likelion-FE3/blob/177c58a9489d6fd7d4c96718abb26a7ef5cf39a6/JS/OOP.js) / [note2](https://github.com/itso-wavy/likelion-FE3/blob/177c58a9489d6fd7d4c96718abb26a7ef5cf39a6/JS/OOP_todolist.html)

: 객체 지향 프로그래밍의 개념을 가장 쉽고 명쾌하게 가르쳐주셨음! 매번 class의 뼈대만 훑고 지나가다가 신문법의 등장과 사용 목적을 알게 된 계기.

- 무던한 개발자를 위한 모던한 자바스크립트 [note1](https://github.com/itso-wavy/JS-challenges/blob/main/javascript-impatient/ch3.%ED%95%A8%EC%88%98%EC%99%80%20%ED%95%A8%EC%88%98%ED%98%95%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.js) / [note2](https://github.com/itso-wavy/JS-challenges/blob/main/javascript-impatient/ch4.%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.js)

: 위의 강의를 기초로 하여 심화 지식을 습득할 수 있었음. 정말 많은 코드를 작성하고 콘솔에 돌려보게 해준 도서.
