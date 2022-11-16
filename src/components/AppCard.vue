<script>
import { store } from "../store";
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            store,
            availableFlags: ['en', 'it', 'es'],
            imgUrl: ""
        }
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getStarsNumber() {
            return Math.ceil(this.item.vote_average / 2);
        }
    },
    methods: {
        getImg(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        },
        getCoverImg() {
            return this.imgUrl = `${this.store.urlImgCover}${this.store.imgCoverSize}${this.item.poster_path}`;;
        }
    }
}
</script>
<template>
<div>
<ul>
    <li><strong>Titolo:</strong> {{getTitle}} </li>
    <li><strong>Titolo originale:</strong> {{getOriginalTitle}} </li>
    <li><strong>Lingua:</strong>
        <img class="flag" v-if="availableFlags.includes(item.original_language)" :src="getImg(item.original_language)">
     {{item.original_language}} </li>
    <li><strong>Voto:</strong> {{item.vote_average}} 
        <i v-for="n in 5" :key="n" :class="n <= getStarsNumber ? 'fa-solid' : 'fa-regular'"
                        class="fa-star"></i></li>
</ul>
<p><strong>Copertina:</strong></p>
<img v-if="item.poster_path === null" src="../assets/img/no-image.jpeg" alt="not-found">
<img :src="getCoverImg()" alt="" v-else>
</div>
</template>
<style lang="scss" scoped>
.flag{
    width: 30px;
}
</style>