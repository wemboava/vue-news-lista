<template>
    <div class="card" :style="{ background: `url(/src/assets/images/${image}.jpg) center no-repeat`, backgroundSize: 'cover' }">
        <span class="card__category">Esportes</span>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .card {
        width: 300px;
        height: 250px;
        position: relative;
        border-radius: 8px;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
        transition: all ease .4s;
        cursor: pointer;
        margin: 20px;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &:hover {
            box-shadow: 0px 7px 1px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);
        }

        &__category {
            width: 300px;
            height: 40px;
            position: absolute;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.27);
            padding: 10px;
            left: calc(50% - 150px);
            bottom: 0;
            font-weight: bold;
            border-radius: 0 0 8px 8px;
        }
    }
</style>