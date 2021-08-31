<template>
  <div id="main">
    <div id="nav">
      <router-link class="go-home" to="/">Home</router-link>

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
          <router-link to="/vue">Vue</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/CSS">CSS</router-link>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check5" />
        <label for="check5">Vue</label>
        <div class="menu-warp">
          <router-link to="/vue">Vue</router-link>
        </div>
      </div>
    </div>
    <router-view id="view" />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
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
}

#nav {
  width: 10rem;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: pink;

  & .go-home {
    text-align: center;
    padding: 1rem;
    color: purple;
    border-bottom: white 1px solid;
  }
}

#nav .title-warp {
  width: 100%;
  padding: 0rem 1rem;
  margin: 0.5rem 0.2rem 0 0.2rem;
  border-bottom: white 1px solid;

  & .menu-warp {
    padding: 1rem 0 0 0.5rem;
    margin-bottom: 0.5rem;
    height: 0px;
    overflow: hidden;
    transition: height 0.18s cubic-bezier(0.669, 0.443, 0.85, 0.975);
    // transition: height 0.2s cubic-bezier(0.367, 0.2277, 0.85, 0.975);
  }

  & .menu-warp a {
    color: gray;
    display: block;
    margin-bottom: 0.1rem;
  }
}

#nav .title-warp input[type="checkbox"] {
  display: none;

  & + label {
    color: green;
    cursor: pointer;
  }
}

#nav .title-warp input[type="checkbox"]:checked {
  & + label {
    color: black;
  }

  & ~ .menu-warp {
    height: 100%;
  }
}

#view {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 1rem;
  // 줄바꿈
  word-break: break-all;
  white-space: pre-line;
}
</style>
