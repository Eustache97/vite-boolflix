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
<section>
    <h2>FILMS</h2>
    <div v-for="(movie, index) in store.movies" :key="movie.id">
        <h3>FILM {{index + 1}} </h3>
        <AppCard :item="movie"/>
    </div>
</section>
<section>
    <h2>SERIES</h2>
    <div v-for="(serie, index) in store.series" :key="serie.id">
        <h3>SERIE {{index + 1}} </h3>
        <AppCard :item="serie"/>
    </div>
</section>
</template>
<style lang="scss" scoped>
ul{
    margin-bottom: 1rem;
}
</style>