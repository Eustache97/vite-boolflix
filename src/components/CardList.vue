<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "CardList",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="container">
        <section>
            <h2>FILMS</h2>
            <div class="row">
                <div class="col" v-for="(movie, index) in store.movies" :key="movie.id">
                    <AppCard :item="movie"/>
                </div>  
            </div>
        </section>
        <section>
            <h2>SERIES</h2>
            <div class="row">
                <div class="col" v-for="(serie, index) in store.series" :key="serie.id">
                <AppCard :item="serie"/> 
                </div>
            </div>
        </section>
    </div>

</template>
<style lang="scss" scoped>
section{
    margin-bottom: 2em;
    h2{
        margin: 1em 0;
    }
    .row{
        display:flex;
        flex-wrap: wrap;
        width: 100%;
        .col{
            width: calc(100% / 4 - 1rem);
            margin-right: 1rem;
        }
    }
}
    
</style>