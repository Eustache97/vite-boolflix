<script>
import { store } from '../store';
export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<div class="searchbar">
    <label for="search-movie">inserisci il titolo del film</label>
    <input type="text" id="search-movie"
     placeholder="insersci il titolo del film"
     v-model="store.searchKey">
    <button id="search"
    @click="$emit(`performSearch`)">Cerca</button>
</div>
</template>
<style lang="scss" scoped>
.searchbar{
    label{
        display: none;
    }
}
</style>