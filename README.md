# Vue Scroll Snap

A super simple Vue component that allows fullscreen and horizontal scroll snapping.

[![NPM](https://nodei.co/npm/vue-scroll-snap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-scroll-snap/)

## Installation

`npm install vue-scroll-snap --save`

## Usage

There are three ways of using Vue Scroll Snap. They are outlined below.

### Basic

```html
<template>
  <vue-scroll-snap :full="true" :horizontal="false">
    <div class="item" id="one">
    </div>
    <div class="item" id="two">
    </div>
    <div class="item" id="three">
    </div>
    <div class="item" id="four">
    </div>
  </vue-scroll-snap>
</template>

<script>
  import VueScrollSnap from "vue-scroll-snap";

  export default {
    components: {VueScrollSnap},
    data() {
      return {}
    },
  };
</script>

<style>

  .item {
    min-height: 500px;
  }

  #snap-container {
    height: 500px;
    width: 500px;
  }

  #one {
    background: white;
  }

  #two {
    background: red;
  }

  #three {
    background: green;
  }

  #four {
    background: blue;
  }
</style>

```

### Fullscreen
### Horizontal

### Props

#### fullscreen

- Type: `Boolean`
- Default: `false`

Enables fullscreen mode.

#### horizontal

- Type: `Boolean`
- Default: `false`

Enables horizontal scrolling.
