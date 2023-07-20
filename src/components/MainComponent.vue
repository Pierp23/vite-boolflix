<script>
import { store } from '../store'

export default {
    name: "MainComponent",
    data() {
        return {
            store
        }
    },
    props: {},
    methods: {

    }
}
</script>

<template>
    <main>
        <ul>
            <li v-for="(movie, index) in store.movies" :key="index">
                Titolo: {{ movie.title }}
                <br>
                Titolo Originale: {{ movie.original_title }}
                <br>
                Lingua: {{ movie.original_language }}
                <br>
                Voto: {{ movie.vote_average }}

            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped></style>
