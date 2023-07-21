<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

import { store } from './store'
import axios from 'axios'

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent

  },
  data() {
    return {
      store
    }
  },
  props: {},
  methods: {
    searchMovie() {
      console.log(this.store.searchText)
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '5681814f5f4aea923eacb9d58dc889ea',
          query: this.store.searchText
        }
      })
        .then(response => {
          console.log(response.data)
          this.store.movies = response.data.results
          this.store.searchText = ""
        })
    },
    searchSeries() {
      console.log(this.store.searchText)
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '5681814f5f4aea923eacb9d58dc889ea',
          query: this.store.searchText
        }
      })
        .then(response => {
          console.log(response.data)
          this.store.series = response.data.results
          this.store.searchText = ""
        })
    },
    discoverMovies() {
      axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '5681814f5f4aea923eacb9d58dc889ea'
        }
      })
        .then(response => {
          this.store.discoverMovies = response.data.results
        })
    },
    discoverSeries() {
      axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: '5681814f5f4aea923eacb9d58dc889ea'
        }
      })
        .then(response => {
          this.store.discoverSeries = response.data.results
        })
    }


  },
  created() {
    this.discoverMovies(),
      this.discoverSeries()
  }
}
</script>

<template>
  <HeaderComponent @searchMovie="searchMovie(), searchSeries()" />

  <MainComponent />

  <!-- <FooterComponent /> -->
</template>

<style lang="scss">
@use './assets/scss/reset.scss';
@use './assets/scss/main.scss'
</style>
