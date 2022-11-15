<script>
import { store } from './store';
import AppSearch from './components/AppSearch.vue';
import CardList from './components/CardList.vue';
import axios from "axios";
export default {
  components: {
    AppSearch,
    CardList
  },
  data() {
    return{
      store
    }
  },
  methods: {
    search() {
      const searchParam = `&query=${this.store.searchKey}`;
      this.getMovies(searchParam);
      this.getSeries(searchParam);
    },
    getMovies(param) {
      axios.get(`${this.store.urlMovie}${this.store.urlKey}${param}`)
    .then((resp) => {
      this.store.movies = resp.data.results; 
      console.log(this.store.movies);
    }); 
    },
    getSeries(param) {
      axios.get(`${this.store.urlSeries}${this.store.urlKey}${param}`)
    .then((resp) => {
      this.store.series = resp.data.results; 
      console.log(this.store.series);
    });
    }
  },
  created() {
  }
}
</script>

<template>
<AppSearch @performSearch="search()"/>
<CardList />
</template>

<style lang="scss" scoped>
</style>
