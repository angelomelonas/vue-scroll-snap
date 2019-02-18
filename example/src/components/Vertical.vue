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
      name: "Vertical",
        components: {VueScrollSnap},
    };
</script>

<style scoped>

    .item {
        /* Set the minimum height of the items to be the same as the height of the container.*/
        min-height: 50vh;
    }

    .scroll-snap-container {
        /* Set the container size. */
        width: 50vw;
        height: 50vh;

        /* Center the div in the middle of the screen. */
        right: 50%;
        bottom: 50%;
        transform: translate(50%, 50%);
    }
</style>
