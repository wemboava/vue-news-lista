<template>
    <div class="container">
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
            this.$http.get(`https://newsapi.org/v2/everything?q=${this.search}&apiKey=44c659bfd31544d886c311588297a5c5`)
                .then(response => {
                    this.articles = response.data.articles
                })
        }
    },
    data() {
        return {
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
</style>
