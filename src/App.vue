<template>
  <div id="main">
    <div id="nav">
      <router-link class="go-home" to="/">Home</router-link>
      <input class="toggle-checkbox" type="checkbox" id="toggle" />
      <label class="toggle" for="toggle">toggle</label>
      <ul class="organize">
        <div class="title-warp">
          <input type="checkbox" id="check2" />
          <label for="check2">About</label>
          <div class="menu-warp">
            <router-link to="/about">About</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check3" />
          <label for="check3">HTML</label>
          <div class="menu-warp">
            <router-link to="/HTML">HTML</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check4" />
          <label for="check4">CSS</label>
          <div class="menu-warp">
            <router-link to="/CSS">CSS</router-link>
            <router-link to="/CSS선택자">CSS선택자</router-link>
          </div>
        </div>
        <div class="title-warp">
          <input type="checkbox" id="check5" />
          <label for="check5">Vue</label>
          <div class="menu-warp">
            <router-link to="/vue">Vue</router-link>
          </div>
        </div>
      </ul>
    </div>
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

@mixin mobile() {
  @media screen and (max-width: 718px) {
    @content();
  }
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

#main {
  display: flex;
  justify-content: space-between;
  height: 100vh;

  @include mobile() {
    display: block;
    height: 100%;
  }
}

#nav {
  flex: none;
  width: 10rem;
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

    @include mobile() {
      padding: 3rem 1rem;
    }
  }

  & .toggle,
  .toggle-checkbox {
    display: none;
  }

  @include mobile() {
    width: 100vw;
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
      padding: 1.5rem 2rem;
      text-align: left;
    }

    & .toggle {
      display: block;
      color: white;
      padding: 0.5rem 0.5rem;
      position: absolute;
      top: 10px;
      right: 10px;
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
        color: blue;
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
  border-bottom: white 1px solid;

  & .menu-warp {
    height: 0px;
    padding: 1rem 0 0 0.5rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    transition: height 0.18s cubic-bezier(0.669, 0.443, 0.85, 0.975);

    & a {
      color: goldenrod;
      display: block;
      margin-bottom: 0.1rem;
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
      height: 100%;
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
  margin-top: 1rem;
  padding: 0 1rem 4rem;
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
