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
<header>
    <div class="container">
        <div class="headerbar">
            <img src="../assets/img/Logonetflix.png" alt="">
                <div class="searchbar">
                    <label for="search-movie">inserisci il titolo del film</label>
                    <input type="text" id="search-movie"
                    placeholder="insersci il titolo del film"
                    v-model="store.searchKey">
                    <button id="search"
                    @click="$emit(`performSearch`)">Cerca</button>
                </div>
        </div>    
    </div>
</header>
</template>
<style lang="scss" scoped>
header{
    width: 100%;
    height: 10vh;
    background-color: #171616;
    .container{
        height: 100%;
        .headerbar{
            height: 100%;
            width: 100%;
            padding: .5em 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                height: 100%;
            }
            .searchbar{
                label{
                    display: none;
                }
            }
        }
    }
}

</style>