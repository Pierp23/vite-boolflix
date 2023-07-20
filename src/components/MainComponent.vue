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
        },
        getVote(vote) {
            return Math.floor(vote / 2);
        },
        getStar() {
            if (vote > 4.5) {

            }
        }
    }
}
</script>

<template>
    <main>
        <h2>FILM</h2>
        <ul>
            <li v-for="(movie, index) in  store.movies " :key="index">
                Copertina:
                <div>
                    <img class="poster" :src="` https://image.tmdb.org/t/p/w342/${movie.poster_path} `" alt="">
                </div>
                Titolo: {{ movie.title }}
                <br>
                Titolo Originale: {{ movie.original_title }}
                <br>
                Lingua:
                <img class="flag" :src="getFlag(movie.original_language)" alt="">
                <br>
                Voto: {{ getVote(movie.vote_average) }}
                <template v-if="getVote(movie.vote_average) > 0">
                    <span v-for="(star) in 5" :key="star">
                        <i :class="star <= getVote(movie.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                    </span>
                </template>


            </li>
        </ul>
        <h2>SERIE TV</h2>
        <ul>
            <li v-for="( serie, index ) in  store.series " :key="index">
                Copertina:
                <div>
                    <img class="poster" :src="` https://image.tmdb.org/t/p/w342/${serie.poster_path} `" alt="">
                </div>

                Titolo: {{ serie.name }}
                <br>
                Titolo Originale: {{ serie.original_name }}
                <br>
                Lingua: <img class="flag" :src="getFlag(serie.original_language)" :alt="serie.original_language">
                <br>
                Voto: {{ getVote(serie.vote_average) }}
                <template v-if="getVote(serie.vote_average) > 0">
                    <span v-for="(star) in 5" :key="star">
                        <i :class="star <= getVote(serie.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                    </span>
                </template>

            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
.poster {
    width: 150px;
    height: 150px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.flag {
    display: inline-block;
    width: 10px;
    height: 10px;
}
</style>
