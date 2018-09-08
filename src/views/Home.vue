<template>
    <div class="container">
        <card category="Esportes" image="sports"></card>
        <card category="Tecnologia" image="technology"></card>
        <card category="Saude" image="saude"></card>
        <card category="Ciência" image="ciencia"></card>
        <card category="Negócios" image="negocios"></card>
        <card category="Entreterimento" image="entreterimento"></card>
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
