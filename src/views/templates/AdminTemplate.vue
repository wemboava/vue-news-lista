<template>
    <!-- <main-header></main-header> -->
    <div class="main_container">
    <main-header />
        <transition name="fade">
            <router-view></router-view>
        </transition>
    <main-footer />
    </div>
</template>

<script>
    // import { mapActions } from 'vuex'
    import MainHeader from '../../components/Header.vue'
    import MainFooter from '../../components/Footer.vue'

    export default {
        name: 'App',

        components: {
            MainHeader,
            MainFooter
        },

        mounted () {}
    }
</script>

<style lang="scss">

    .main_container {
        // background: $background-light;

        // @media screen and (max-width: 1025px){
        //     padding-top: 90px !important;
        // }

        // @media only screen and (min-width: $screen-xs) {
        //     min-height: $container-desk-height !important;
        // }
        // @media only screen and (max-width: $screen-xs) {
        //     min-height: $container-mobile-height !important;
        // }
    }
</style>
