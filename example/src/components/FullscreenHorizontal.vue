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
        components: {VueScrollSnap}
    };
</script>