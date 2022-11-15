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
            availableFlags: ['en', 'it', 'es']
        }
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        }
    },
    methods: {
        getImg(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
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
    <li><strong>Voto:</strong> {{item.vote_average}} </li>
</ul>
</div>
</template>
<style lang="scss" scoped>
.flag{
    width: 30px;
}
</style>