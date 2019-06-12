<template>
    <div class="container">
        <card category="sports" name="Esportes" image="sports"></card>
        <card category="technology" name="Tecnologia" image="technology"></card>
        <card category="health" name="Saude" image="saude"></card>
        <card category="science" name="Ciência" image="ciencia"></card>
        <card category="business" name="Negócios" image="negocios"></card>
        <card category="entertainment" name="Entreterimento" image="entreterimento"></card>
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
        padding: 30px 30px 60px 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1100px;
        margin: auto;
    }
</style>
