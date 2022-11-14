<script>
import { store } from './store';
import AppSearch from './components/AppSearch.vue';
import axios from "axios";
export default {
  components: {
    AppSearch
  },
  data() {
    return{
      store
    }
  },
  methods: {
    getElements: function(){
      axios.get(`"https://api.themoviedb.org/3/search/movie?api_key=d5e6ce8e07b5f1bdce71217cc18cfd92&query=${store.searchKey}"`)
    .then((resp) => {
      console.log(resp.data.results);
    });
    }
  },
  created() {
  }
}
</script>

<template>
<AppSearch />
</template>

<style scoped>
</style>
