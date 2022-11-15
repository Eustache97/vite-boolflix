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
    getElements: function(){
      let searchParam = `&query=${this.store.searchKey}`
      axios.get(`${this.store.urlMovie}${this.store.urlKey}${searchParam}`)
    .then((resp) => {
      this.store.elementsContainer = resp.data.results; 
      console.log(this.store.elementsContainer);
    });
   this.store.searchKey = ""; 
    }
  },
  created() {
  }
}
</script>

<template>
<AppSearch @performSearch="getElements"/>
<CardList />
</template>

<style lang="scss" scoped>
</style>
