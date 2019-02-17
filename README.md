# Vue Scroll Snap

A super simple Vue component that allows both fullscreen and horizontal scroll snapping.

[![NPM](https://nodei.co/npm/vue-scroll-snap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-scroll-snap/)

## Showcase
###### Coming Soon

## Installation

`npm install vue-scroll-snap --save`

## Usage

There are three ways of using Vue Scroll Snap. They are outlined below.

### Basic Component

```vue
<template>
  <vue-scroll-snap>
    <div class="item" id="one"></div>
    <div class="item" id="two"></div>
    <div class="item" id="three"></div>
    <div class="item" id="four"></div>
  </vue-scroll-snap>
</template>

<script>
  import VueScrollSnap from "vue-scroll-snap";

  export default {
    components: {VueScrollSnap},
  };
</script>

<style>

  .item {
    /* Set the minimum height of the items to be the same as the height of the container.*/
    min-height: 500px;
  }

  .snap-container {
    height: 500px;
    width: 500px;
  }

  #one {
    background: #ecf0f1;
  }

  #two {
    background: #2980b9;
  }

  #three {
    background: #8e44ad;
  }

  #four {
    background: #e74c3c;
  }
</style>
```

### Fullscreen

```vue
<template>
  <vue-scroll-snap :fullscreen="true">
    <div class="item" id="one"></div>
    <div class="item" id="two"></div>
    <div class="item" id="three"></div>
    <div class="item" id="four"></div>
  </vue-scroll-snap>
</template>

<script>
  import VueScrollSnap from "vue-scroll-snap";

  export default {
    components: {VueScrollSnap},
  };
</script>

<style>
  #one {
    background: #ecf0f1;
  }

  #two {
    background: #2980b9;
  }

  #three {
    background: #8e44ad;
  }

  #four {
    background: #e74c3c;
  }
</style>
```

### Horizontal
```vue
<template>
  <vue-scroll-snap :horizontal="true">
    <div class="item" id="one"></div>
    <div class="item" id="two"></div>
    <div class="item" id="three"></div>
    <div class="item" id="four"></div>
  </vue-scroll-snap>
</template>

<script>
  import VueScrollSnap from "vue-scroll-snap";

  export default {
    components: {VueScrollSnap},
  };
</script>

<style>
  .item {
    /* Set the minimum width of the items to be the same as the height of the container.*/
    min-width: 500px;
  }

  .snap-container {
    height: 500px;
    /*width: 500px;*/
  }
  
  #one {
    background: #ecf0f1;
  }

  #two {
    background: #2980b9;
  }

  #three {
    background: #8e44ad;
  }

  #four {
    background: #e74c3c;
  }
</style>
```

### Fullscreen Horizontal
```vue
<template>
  <vue-scroll-snap :fullscreen="true" :horizontal="true">
    <div class="item" id="one"></div>
    <div class="item" id="two"></div>
    <div class="item" id="three"></div>
    <div class="item" id="four"></div>
  </vue-scroll-snap>
</template>

<script>
  import VueScrollSnap from "vue-scroll-snap";

  export default {
    components: {VueScrollSnap},
  };
</script>

<style>
  #one {
    background: #ecf0f1;
  }

  #two {
    background: #2980b9;
  }

  #three {
    background: #8e44ad;
  }

  #four {
    background: #e74c3c;
  }
</style>
```

### Props

#### fullscreen

## Optional Props
| Prop          | Type          | Default       |
| ------------- |:-------------:|:-------------:|
| fullscreen    | Boolean       | false         |
| horizontal    | Boolean       | false         |
Enables horizontal scrolling.

### License
MIT