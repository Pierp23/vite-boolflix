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
        getFlag(lang) {
            if (lang == 'en') {
                return 'https://flagicons.lipis.dev/flags/4x3/gb.svg'
            }
            else if (lang == 'it') {
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }
            else if (lang == 'ja') {
                return 'https://flagicons.lipis.dev/flags/4x3/jp.svg'
            }
            else if (lang == 'fr') {
                return 'https://flagicons.lipis.dev/flags/4x3/fr.svg'
            }
            else {
                return 'https://flagicons.lipis.dev/flags/4x3/aq.svg'
            }
        }
    }
}
</script>

<template>
    <main>
        <h2>FILM</h2>
        <ul>
            <li v-for="(movie, index) in store.movies" :key="index">
                Titolo: {{ movie.title }}
                <br>
                Titolo Originale: {{ movie.original_title }}
                <br>
                Lingua:
                <img :src="getFlag(movie.original_language)" alt="">
                <br>
                Voto: {{ movie.vote_average }}

            </li>
        </ul>
        <h2>SERIE TV</h2>
        <ul>
            <li v-for="(serie, index) in store.series" :key="index">
                Titolo: {{ serie.name }}
                <br>
                Titolo Originale: {{ serie.original_name }}
                <br>
                Lingua: <img :src="getFlag(serie.original_language)" :alt="serie.original_language">
                <br>
                Voto: {{ serie.vote_average }}

            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
img {
    display: inline-block;
    width: 10px;
    height: 10px;
}
</style>
