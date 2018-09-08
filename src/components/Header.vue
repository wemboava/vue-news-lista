<template>
    <header class="header">
        <img class="header__logo" src="../assets/images/news-logo.png" alt="" />
        <div class="header__options">
            <span class="header__options__item">Home</span>
            <span class="header__options__item">Grupo da Familia</span>
        </div>
    </header>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 50px;
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        box-shadow: 0px -1px 20px 0px rgba(0, 0, 0, 0.2);
        &__logo {
            max-width: 80px;
        }
        &__options {
            &__item {
                margin-left: 40px;
                cursor: pointer;
                transition: color ease .5s;
                &:hover {
                    color: #19aaff;
                }
            }
        }
    }
</style>