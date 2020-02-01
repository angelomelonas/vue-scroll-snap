# Vue Scroll Snap

A super simple Vue component that allows both fullscreen and horizontal scroll snapping.

[![NPM](https://nodei.co/npm/vue-scroll-snap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-scroll-snap/)

## Showcase

Check out the [live demo](https://angelomelonas.github.io/vue-scroll-snap/) to see the scroll snapping in action. 

## Installation

`npm install vue-scroll-snap --save`

## Usage

There are four ways of using Vue Scroll Snap. They are described below. For more a more detailed description, see the `example` directory.

### Vertical 

```vue
<template>
  <vue-scroll-snap>
    <div class="item"></div>
    <div class="item"></div>
    ...
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
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 500px;
  }

  .scroll-snap-container {
    height: 500px;
    width: 500px;
  }
</style>
```

### Horizontal 

```vue
<template>
  <vue-scroll-snap :horizontal="true">
    ...
  </vue-scroll-snap>    
</template>

<script>...</script>

<style>

  .item {
    /* Set the minimum width of the items to be the same as the width of the scroll-snap-container.*/
    min-width: 500px;
  }

  .scroll-snap-container {...}
</style>
```

### Fullscreen Vertical

```vue
<template>
  <vue-scroll-snap :fullscreen="true">
    ...
  </vue-scroll-snap>
</template>

<script>...</script>
<style>/* No styling required. */</style>
```

### Fullscreen Horizontal
```vue
<template>
  <vue-scroll-snap :fullscreen="true" :horizontal="true">
    ...
  </vue-scroll-snap>
</template>

<script>...</script>
<style>/* No styling required. */</style>
```

### Props

## Optional Props
| Prop          | Type          | Default       |
| ------------- |:-------------:|:-------------:|
| fullscreen    | Boolean       | false         |
| horizontal    | Boolean       | false         |

### License
MIT
