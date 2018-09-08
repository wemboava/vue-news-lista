<template>
    <div class="container">
        <card image="sports"></card>
        <card image="technology"></card>
        <card image="saude"></card>
        <card image="ciencia"></card>
        <card image="negocios"></card>
        <card image="entreterimento"></card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>
    .container {
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1100px;
        margin: auto;
    }
</style>
