<template>
    <footer class="footer">
        <span class="footer__text">Developed by <a class="footer__text__link" href="">Willian Emboava</a>.</span>
    </footer>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
    .footer {
        width: 100%;
        height: 50px;
        background-color: #fff;
        box-shadow: 0px -1px 20px 0px rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        &__text {
            color: #bbb;
            &__link {
                color: #19aaff;
                text-decoration: none;
            }
        }
    }
</style>