<template>
    <div class="container">
        <card
            isArticle
            v-for="(article, index) in articles"
            :key="index"
            category="sports"
            :name="article.title"
            :image="article.urlToImage"
        ></card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    components: {
        Card
    },
    mounted() {
        this.$http.get(`https://newsapi.org/v2/top-headlines?country=br&category=${this.$router.history.current.params.category}&apiKey=44c659bfd31544d886c311588297a5c5`)
        // this.$http.get(`https://newsapi.org/v2/everything?q=google&apiKey=44c659bfd31544d886c311588297a5c5`)
            .then(response => {
                this.articles = response.data.articles
                console.log(this.articles)
            })
    },
    data() {
        return {
            articles: []
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
    }
</style>
