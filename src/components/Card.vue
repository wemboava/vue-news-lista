<template>
    <div>
        <div v-if="isArticle && hasImage" @click="() => setArticle(link)" class="card card--article">
            <div class="card__image" :style="{ background: `url(${image}) center no-repeat`, backgroundSize: 'cover' }"></div>
            <span class="card__category card__category--article">{{ name }}</span>
        </div>
        <div v-if="!isArticle" @click="() => getArticles(category)" class="card" :style="{ background: `url(/src/assets/images/${image}.jpg) center no-repeat`, backgroundSize: 'cover' }">
            <span class="card__category">{{ name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getArticles(category) {
            // this.$http.get(`https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=44c659bfd31544d886c311588297a5c5`).then(response => {
            this.$router.push(`/articles/${category}`)
        },
        setArticle(link) {
            window.open(link)
        }
    },
    computed: {
        hasImage() {
            return this.image ? this.image.indexOf('http') != -1 : null
        }
    },
    props: {
        image: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        isArticle: {
            type: Boolean,
            default: false
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

        &--article {
            height: 330px;
        }

        &__image {
            height: 250px;
            background-size: cover !important;
            background-repeat: no-repeat;
            background-position: top;
            border-radius: 8px 8px 0 0;
        }

        &:hover {
            box-shadow: 0px 7px 1px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);
            .card__category {
                height: 45px;
                font-size: 18px;
                &--article {
                    height: 110px;
                    font-size: 16px;
                }
            }
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
            transition: all ease .2s;
            vertical-align: middle;
            &--article {
                height: 100px;
                background-color: #fff;
                color: #2c3e50;
            }
        }
    }
</style>