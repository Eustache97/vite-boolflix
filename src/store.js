import { reactive } from "vue";
export const store = reactive({
    searchKey: "",
    searchStatus: "",
    loading: false,
    urlMovie: "https://api.themoviedb.org/3/search/movie?",
    urlSeries:"https://api.themoviedb.org/3/search/tv?",
    urlKey: "api_key=d5e6ce8e07b5f1bdce71217cc18cfd92"
})