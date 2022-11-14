<script>
import { store } from './store';
import axios from "axios";
export default {
  data() {
    return{
      store
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=d5e6ce8e07b5f1bdce71217cc18cfd92')
    .then((resp) => {
      console.log(resp.data.results);
    });
  }
}
</script>

<template>
<h1>ciao</h1>
</template>

<style lang="scss" scoped>
</style>
