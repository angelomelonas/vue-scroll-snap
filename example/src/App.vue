<template>
  <div id="app">

    <div id="nav">
      <router-link
        class="link"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
      >{{ item.title }}
      </router-link>
    </div>

    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        menuItems: [
          {title: "Fullscreen Vertical", link: "/"},
          {title: "Fullscreen Horizontal", link: "/fullscreenhorizontal"},
          {title: "Vertical", link: "/vertical"},
          {title: "Horizontal", link: "/horizontal"}
        ]
      };
    },
  };
</script>

<style>
  html {
    background: #ecf0f1;
  }

  #app {
    font-family: "Fira Code Retina";
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    padding-top: 10px;
  }

  #nav a {
    text-decoration: none;
    margin: 10px;
    font-size: 1.2em;
    text-transform: uppercase;
    color: #34495e;
    opacity: 0.5;
  }

  #nav a:hover {
    color: #34495e;
    border-top: 8px solid #34495e;
    padding-top: 1px;
    opacity: 1;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }

  #nav a.router-link-exact-active {
    color: #34495e;
    opacity: 1;

  }

  /* Colour the scroll panels. */
  #one {
    background: #1e91d6;
  }

  #two {
    background: #db5461;
  }

  #three {
    background: #fc7753;
  }

  #four {
    background: #ffffff;
  }
</style>
