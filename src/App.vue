<template>
  <div id="main">
    <div id="nav">
      <router-link class="go-home" to="/">Home</router-link>
      <input class="toggle-checkbox" type="checkbox" id="toggle" />
      <label class="toggle" for="toggle">toggle</label>
      <ul class="organize">
        <div class="title-warp">
          <input type="checkbox" id="check2" />
          <label for="check2">임시탭</label>
          <div class="menu-warp">
            <router-link to="/about">About</router-link>
            <router-link to="/임시">임시</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check3" />
          <label for="check3">HTML</label>
          <div class="menu-warp">
            <router-link to="/HTML">HTML</router-link>
            <router-link to="/기본구조">기본구조</router-link>
            <router-link to="/시멘틱태그">시멘틱태그</router-link>
            <router-link to="/HTML_텍스트관련">텍스트관련</router-link>
            <router-link to="/HTML_목록관련">목록관련</router-link>
            <router-link to="/HTML_링크_이미지_관련">링크_이미지</router-link>
            <router-link to="/HTML_테이블관련">테이블관련</router-link>
            <router-link to="/HTML_폼관련">폼관련</router-link>
            <router-link to="/HTML_멀티미디어관련">멀티미디어</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check4" />
          <label for="check4">CSS</label>
          <div class="menu-warp">
            <router-link to="/css/root의사클래스">root의사클래스</router-link>
            <router-link to="/css/CSS함수">CSS함수</router-link>
            <router-link to="/css/CSS선택자">CSS선택자</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check5" />
          <label for="check5">SCSS</label>
          <div class="menu-warp">
            <router-link to="/media쿼리">Media쿼리</router-link>
            <router-link to="/SCSS데이터">데이터</router-link>
            <router-link to="/중첩">중첩</router-link>
            <router-link to="/라이브러리">라이브러리 가져오기</router-link>
            <router-link to="/mixins">Mixins</router-link>
            <router-link to="/Extend">Extend</router-link>
            <router-link to="/Function">Function</router-link>
            <router-link to="/조건문_반복문">조건문_반복문</router-link>
            <router-link to="/SCSS_내장함수">내장함수</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check100" />
          <label for="check100">CSS 디자인</label>
          <div class="menu-warp">
            <router-link to="/css디자인/text">text</router-link>
            <router-link to="/css디자인/image">image</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check101" />
          <label for="check101">정규식 표현</label>
          <div class="menu-warp">
            <router-link to="/regexp">정규식</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check101" />
          <label for="check101">애니메이션</label>
          <div class="menu-warp">
            <router-link to="/anima">정리전</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check6" />
          <label for="check6">Vue</label>
          <div class="menu-warp">
            <router-link to="/vue">Vue</router-link>
            <router-link to="/템플릿_문법">템플릿_문법</router-link>
            <router-link to="/classStyle">Class_Style_바인딩</router-link>
            <router-link to="/DOM접근">DOM접근</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check7" />
          <label for="check7">Vuex</label>
          <div class="menu-warp">
            <router-link to="/vuex/파일구조">파일 구조</router-link>
            <router-link to="/vuex/모듈정의">모듈 정의</router-link>
            <router-link to="/vuex/파일정리">파일 정리</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check8" />
          <label for="check8">Vue-Router</label>
          <div class="menu-warp"></div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check9" />
          <label for="check9">기타</label>
          <div class="menu-warp">
            <router-link to="/함수_Promise_리턴값"
              >함수_Promise_리턴값</router-link
            >
          </div>
        </div>

        <div class="title-warp">
          <input type="checkbox" id="check10" />
          <label for="check10">CS기술 면접</label>
          <div class="menu-warp">
            <router-link to="/cs기술면접/link">link</router-link>
            <!-- <router-link to="/cs기술면접/think">개발상식</router-link>
            <router-link to="/cs기술면접/network">네트워크</router-link>
            <router-link to="/cs기술면접/운영체재">운영체재</router-link> -->
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check11" />
          <label for="check11">Markdown</label>
          <div class="menu-warp">
            <router-link to="/markdown/README">README</router-link>
            <router-link to="/markdown/글자">글자</router-link>
            <router-link to="/markdown/링크_줄바꿈">링크_줄바꿈</router-link>
            <router-link to="/markdown/선_강조">선_강조</router-link>
            <router-link to="/markdown/이미지">이미지</router-link>
            <router-link to="/markdown/인용글_목록">인용글_목록</router-link>
            <router-link to="/markdown/코드">코드</router-link>
          </div>
        </div>
      </ul>
    </div>
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const mobileHeigthSize = () => {
      const dh = window.innerHeight;

      document.documentElement.style.setProperty("--mobile--full", `${dh}px`);
    };

    onMounted(() => {
      window.addEventListener("load", mobileHeigthSize);
      window.addEventListener("resize", mobileHeigthSize);
    });

    return {};
  },
});
</script>

<style lang="scss">
:root {
  --mobile--full: 100vh;
}

* {
  margin: 0;
  padding: 0;
}

html {
  // 모바일
  @include mobile() {
    font-size: 15px;
  }
}

a {
  all: unset;
  color: black;
  cursor: pointer;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.4rem;
  margin-top: 2rem;
}

li {
  transform: translateX(1.5rem);
  padding-right: 1.5rem;
}

details {
  summary {
    cursor: pointer;
    padding: 0.5rem;

    border: 1px solid black;
    & ~ .content {
      padding: 0.5rem;
      border: 1px solid black;
      border-top: 0px;
    }
  }
}

table {
  border: 1px solid black;
  padding: 0 0.5rem;
}

tr {
  th {
    padding: 0 0.5rem;
  }

  th ~ th {
    border-left: 1px solid black;
  }
}

th {
  font-size: 0.7rem;
}

blockquote {
  padding-left: 1rem;
  position: relative;

  &::before {
    display: inline-block;
    content: "";
    position: absolute;
    background-color: rgb(173, 173, 173);
    height: 100%;
    width: 0.4rem;
    top: 0;
    left: 0;
  }
}

.deco-none {
  text-decoration: none;
}

#main {
  display: flex;
  justify-content: space-between;
  height: var(--mobile--full);
  overflow: hidden;

  @include mobile() {
    display: block;
    height: 100%;
  }
}

#nav {
  flex: none;
  width: 30vw;
  max-width: 14rem;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: rgb(0, 3, 11);

  & .go-home {
    text-align: center;
    padding: 1rem;
    color: darkslateblue;
    border-bottom: white 1px solid;
  }

  & .toggle,
  .toggle-checkbox {
    display: none;
  }

  @include mobile() {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    position: sticky;
    top: 0px;

    // 스크롤바 없애기
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    //

    & .go-home {
      padding: 2.4rem 2rem;
      text-align: left;
    }

    & .toggle {
      display: block;
      color: white;
      padding: 1rem 1rem;
      position: absolute;
      top: 1rem;
      right: 1rem;
      border: 1px solid pink;
      cursor: pointer;
    }

    & .organize {
      height: 100%;
      transition: max-height 0.4s cubic-bezier(0.669, 0.443, 0.85, 0.975);
      max-height: 0px;
    }

    & .toggle-checkbox:checked {
      & ~ label {
        color: goldenrod;
      }

      & ~ .organize {
        max-height: 100vh;
      }
    }
  }
}

.organize .title-warp {
  padding: 0rem 1rem;
  margin: 0.5rem 1rem 0;
  &:not(:last-child) {
    border-bottom: white 1px solid;
  }

  & .menu-warp {
    height: 100%;
    max-height: 0px;
    padding: 1rem 0 0 0.5rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.669, 0.443, 0.85, 0.975);

    & a {
      color: goldenrod;
      display: block;
      margin-bottom: 0.1rem;

      // ...처리
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  & input[type="checkbox"] {
    display: none;

    & + label {
      width: 100%;
      height: 100%;
      display: block;
      color: darksalmon;
      cursor: pointer;
    }
  }

  & input[type="checkbox"]:checked {
    & + label {
      color: hotpink;
    }

    & ~ .menu-warp {
      max-height: 100vh;
    }
  }
}

// flex
// flex : 0 0 auto ( none ) = width와 height속성에 정해지고 크기가 안변함
// flex : 0 1 auto ( initial ) = width와 height속성에 정해지고 남은 공간을 채우기위해 늘어나진 않지만 줄어 들수도 있음
// flex : 1 1 auto ( auto ) = 컨테이너에 맞춰 크기가 줄어들기도하고 , 남은공간을 채우기위해 늘어나기도 함

#view {
  flex: auto;
  overflow: auto;
  margin: 0 auto;
  height: 100%;
  padding: 0 1rem;
  // 줄바꿈
  word-break: break-all;
  white-space: pre-line;
}

.view-warp {
  & p {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;

    &.title {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
}
</style>
