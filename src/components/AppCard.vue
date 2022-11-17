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
<div class="card">
    <div class="card_inner">
        <div class="back_card">
        <p><strong>Titolo:</strong> {{getTitle}} </p> 
        <p><strong>Titolo originale:</strong> {{getOriginalTitle}}</p>  
        <p><strong>Lingua:</strong>
            <img class="flag" v-if="availableFlags.includes(item.original_language)" :src="getImg(item.original_language)">
        {{item.original_language}} </p>
        <p><strong>Voto:</strong> {{item.vote_average}} 
            <i v-for="n in 5" :key="n" :class="n <= getStarsNumber ? 'fa-solid' : 'fa-regular'"
                class="fa-star"></i></p>
        <p><strong>Overview:</strong> {{item.overview}} </p>
        </div>                    
        <div class="front_card">
            <img v-if="item.poster_path === null" src="../assets/img/no-image.jpeg" alt="not-found">
            <img :src="getCoverImg()" alt="" v-else>
        </div>
    </div>
    
</div>
</template>
<style lang="scss" scoped>
.card{
    width:100%;
    perspective: 1000px;
    .card_inner{
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform .8s;       
        .back_card{
            width: 100%;
            height: 100%;
            color: white;
            position: absolute;
            top: 0;
            left: 0;
            padding: .5rem;
            backface-visibility: hidden;
            background-color: #171616;
            transform: rotateY(180deg);
            overflow-y: hidden;
            
            .flag{
                width: 30px;
            }
            i{
                color: yellow;
            }
        }
   
        .front_card{
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            img{
                width: 100%;
            }
        }
        
    }
    &:hover .card_inner{
        transform: rotateY(180deg);
    }
       
}
</style>