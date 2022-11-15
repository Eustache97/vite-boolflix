import { reactive } from "vue";
export const store = reactive({
    searchKey: "",
    searchStatus: "",
    loading: false,
    movies: [],
    series: [],
    urlMovie: "https://api.themoviedb.org/3/search/movie?",
    urlSeries:"https://api.themoviedb.org/3/search/tv?",
    urlKey: "api_key=d5e6ce8e07b5f1bdce71217cc18cfd92",
    urlImgCover: "https://image.tmdb.org/t/p/",
    imgCoverSize: "w342"
})