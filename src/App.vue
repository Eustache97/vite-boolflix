<script>
import { store } from './store';
import AppSearch from './components/AppSearch.vue';
import AppLoader from './components/AppLoader.vue';
import CardList from './components/CardList.vue';
import axios from "axios";
export default {
  components: {
    AppSearch,
    AppLoader,
    CardList
  },
  data() {
    return{
      store
    }
  },
  methods: {
    search() {
      this.store.loading = true;
      const searchParam = `&query=${this.store.searchKey}`;
      this.getMovies(searchParam);
      this.getSeries(searchParam);
      this.store.loading = false;
    },
    getMovies(param) {
      axios.get(`${this.store.urlMovie}${this.store.urlKey}${param}`)
    .then((resp) => {
      this.store.movies = resp.data.results; 
      console.log(this.store.movies);
    })
    .catch(err => {
      console.log(err);
    }); 
    },
    getSeries(param) {
      axios.get(`${this.store.urlSeries}${this.store.urlKey}${param}`)
    .then((resp) => {
      this.store.series = resp.data.results; 
      console.log(this.store.series);
    })
    .catch(err => {
      console.log(err);
    });
    }
  },
  created() {
  }
}
</script>

<template>
  <div class="wrapper">
    <AppSearch @performSearch="search()"/>
    <div class="content">
      <AppLoader v-if="store.loading"/>
      <CardList v-else/> 
  </div>
    
  </div>

</template>

<style lang="scss">
@use "./styles/general.scss"as*;
.wrapper{
  .content{
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  }
}

</style>
