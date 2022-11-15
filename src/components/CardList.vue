<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<section>
    <ul
    v-for="(film, index) in store.elementsContainer">
        <li><h2>FILM {{index + 1}}</h2></li>
        <li><strong>Titolo:</strong> {{film.title}} </li>
        <li><strong>Titolo originale:</strong> {{film.original_title}} </li>
        <li><strong>Lingua:</strong> {{film.original_language}} </li>
        <li><strong>Voto:</strong> {{film.vote_average}} </li>
    </ul>
</section>
</template>
<style lang="scss" scoped>
ul{
    margin-bottom: 1rem;
}
</style>