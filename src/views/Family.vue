<template>
    <div class="container">
        <div v-if="showLoader" class="spinner"></div>
        <div class="container__header">
            <h3>Como qualquer grupo da familia, aqui você pode procurar por qualquer notícia!</h3>
            <div class="container__header__actions">
                <input @keyup.enter="getNews" v-model="search" class="container__header__actions__input" type="search">
                <span @click="getNews" class="container__header__actions__button">Procurar</span>
            </div>
        </div>
        <card
            isArticle
            v-for="(article, index) in articles"
            :key="index"
            category="sports"
            :name="article.title"
            :image="article.urlToImage"
            :link="article.url"
        ></card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    components: {
        Card
    },
    methods: {
        getNews() {
            this.showLoader = true
            this.$http.get(`https://newsapi.org/v2/everything?q=${this.search}&apiKey=44c659bfd31544d886c311588297a5c5`)
                .then(response => {
                    this.articles = response.data.articles
                    this.showLoader = false
                })
        }
    },
    data() {
        return {
            showLoader: false,
            articles: [],
            search: ''
        }
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
        &__header {
            width: 100%;
            &__actions {
                margin-top: 20px;
                &__input {
                    height: 35px;
                    width: 500px;
                    border-radius: 50px;
                    border: solid 1px #ddd;
                    padding: 10px;
                    &:focus {
                        outline: none;
                    }
                }
                &__button {
                    background-color: #78a7ff;
                    padding: 5px 10px;
                    border-radius: 50px;
                    color: #FFF;
                    font-weight: bold;
                    transition: background-color ease .4s;
                    cursor: pointer;
                    &:hover {
                        background-color: #b1ccff;
                    }
                }
            }
        }
    }
    .spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        height:60px;
        width:60px;
        margin:0px auto;
        -webkit-animation: rotation .6s infinite linear;
        -moz-animation: rotation .6s infinite linear;
        -o-animation: rotation .6s infinite linear;
        animation: rotation .6s infinite linear;
        border-left:6px solid rgba(0,174,239,.15);
        border-right:6px solid rgba(0,174,239,.15);
        border-bottom:6px solid rgba(0,174,239,.15);
        border-top:6px solid rgba(0,174,239,.8);
        border-radius:100%;
    }

    @-webkit-keyframes rotation {
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(359deg);}
    }
    @-moz-keyframes rotation {
        from {-moz-transform: rotate(0deg);}
        to {-moz-transform: rotate(359deg);}
    }
    @-o-keyframes rotation {
        from {-o-transform: rotate(0deg);}
        to {-o-transform: rotate(359deg);}
    }
    @keyframes rotation {
        from {transform: rotate(0deg);}
        to {transform: rotate(359deg);}
    }
</style>
