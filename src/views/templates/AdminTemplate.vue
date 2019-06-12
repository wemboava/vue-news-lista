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
        position: relative;
        min-height: 100vh;
    }
</style>
