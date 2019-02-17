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
        components: {VueScrollSnap}
    };
</script>

<style scoped>
    .item {
        /* Set the minimum width of the items to be the same as the height of the container.*/
        min-width: 50vw;
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
