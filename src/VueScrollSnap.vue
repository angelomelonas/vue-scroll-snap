<template>
    <div class="container" :class="{'full': full, 'horizontal': horizontal }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VueScrollSnap",
        props: {
            full: {
                type: Boolean,
                default: true,
                required: false
            },
            horizontal: {
                type: Boolean,
                default: false,
                required: false
            }
        }
    };
</script>

<style>
    .container {
        display: block;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        scroll-snap-points-y: repeat(100%);
        scroll-snap-destination: 0 0;
        scroll-snap-type: y mandatory;
        scroll-snap-type: mandatory;
    }

    .container.horizontal {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-y: hidden;
        overflow-x: scroll;
        scroll-snap-points-x: repeat(100%);
        scroll-snap-type: x mandatory;
    }

    .container.full {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: flex-start;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    .item {
        scroll-snap-align: start;
    }

    .container.full > .item {
        min-width: 100%;
        min-height: 100%;
        flex: 1;
    }

    .container.horizontal > .item {
        scroll-snap-align: center;
    }

    .container.full.horizontal > .item {
        scroll-snap-align: center;
        min-width: 100%;
        flex: 1;
    }
</style>
