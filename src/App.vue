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
        .then(result => {
          console.log(result.data)
          this.store.movies = result.data.results
        })
    }

  }
}
</script>

<template>
  <HeaderComponent @searchMovie="searchMovie()" />

  <MainComponent />

  <FooterComponent />
</template>

<style lang="scss"></style>
