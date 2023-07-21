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
            else if (lang == 'es') {
                return 'https://flagicons.lipis.dev/flags/4x3/es.svg'
            }
            else if (lang == 'ja') {
                return 'https://flagicons.lipis.dev/flags/4x3/jp.svg'
            }
            else if (lang == 'fr') {
                return 'https://flagicons.lipis.dev/flags/4x3/fr.svg'
            }
            else if (lang == 'de') {
                return 'https://flagicons.lipis.dev/flags/4x3/de.svg'
            }
            else if (lang == 'zh') {
                return 'https://flagicons.lipis.dev/flags/4x3/cn.svg'
            }
            else if (lang == 'hi') {
                return 'https://flagicons.lipis.dev/flags/4x3/in.svg'
            }
            else if (lang == 'pt') {
                return 'https://flagicons.lipis.dev/flags/4x3/pt.svg'
            }
            else if (lang == 'ko') {
                return 'https://flagicons.lipis.dev/flags/4x3/kr.svg'
            }
            else {
                return 'https://flagicons.lipis.dev/flags/4x3/aq.svg'
            }
        },
        getVote(vote) {
            return Math.ceil(vote / 2);
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <section class="discover" v-if="store.movies == 0 && store.series == 0">
                <div>
                    <h2>I FILM POPOLARI</h2>
                    <div class="row">
                        <div class="my-col" v-for="(discover, index) in  store.discoverMovies" :key="index">
                            <div class="cards">
                                <div class="card">
                                    <img v-if="discover.poster_path == null"
                                        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'"
                                        alt="">
                                    <img v-else :src="` https://image.tmdb.org/t/p/w342${discover.poster_path} `" alt="">
                                    <div class="infos">
                                        <p>
                                            Titolo: {{ discover.name }}
                                        </p>
                                        <p>
                                            Titolo Originale: {{ discover.original_name }}
                                        </p>
                                        <p>
                                            Lingua: <img class="flag" :src="getFlag(discover.original_language)"
                                                :alt="discover.original_language">
                                        </p>
                                        <div>
                                            Voto: {{ getVote(discover.vote_average) }}
                                            <template v-if="getVote(discover.vote_average) > 0">
                                                <span v-for="(star) in 5" :key="star">
                                                    <i class="stars"
                                                        :class="star <= getVote(discover.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                                                </span>
                                            </template>
                                        </div>
                                        <p>
                                            Trama: {{ discover.overview }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h2>LE SERIE POPOLARI</h2>
                    <div class="row">
                        <div class="my-col" v-for="(discover, index) in  store.discoverSeries" :key="index">
                            <div class="cards">
                                <div class="card">
                                    <img v-if="discover.poster_path == null"
                                        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'"
                                        alt="">
                                    <img v-else :src="` https://image.tmdb.org/t/p/w342/${discover.poster_path} `" alt="">
                                    <div class="infos">
                                        <p>
                                            Titolo: {{ discover.name }}
                                        </p>
                                        <p>
                                            Titolo Originale: {{ discover.original_name }}
                                        </p>
                                        <p>
                                            Lingua: <img class="flag" :src="getFlag(discover.original_language)"
                                                :alt="discover.original_language">
                                        </p>
                                        <div>
                                            Voto: {{ getVote(discover.vote_average) }}
                                            <template v-if="getVote(discover.vote_average) > 0">
                                                <span v-for="(star) in 5" :key="star">
                                                    <i class="stars"
                                                        :class="star <= getVote(discover.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                                                </span>
                                            </template>
                                        </div>
                                        <p>
                                            Trama: {{ discover.overview }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="search-section" v-else>
                <section class="movies">
                    <h2>FILM</h2>
                    <div v-if="store.movies == 0">
                        NESSUN FILM TROVATO
                    </div>
                    <div v-else class="row">
                        <div class="my-col" v-for="(movie, index) in  store.movies " :key="index">
                            <div class="cards">
                                <div class="card">
                                    <img v-if="movie.poster_path == null"
                                        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'"
                                        alt="">
                                    <img v-else :src="` https://image.tmdb.org/t/p/w342${movie.poster_path} `" alt="">
                                    <div class="infos">
                                        <p>
                                            Titolo: {{ movie.title }}
                                        </p>
                                        <p>
                                            Titolo Originale: {{ movie.original_title }}
                                        </p>
                                        <p>
                                            Lingua: <img class="flag" :src="getFlag(movie.original_language)"
                                                :alt="movie.original_language">
                                        </p>
                                        <div>
                                            Voto: {{ getVote(movie.vote_average) }}
                                            <template v-if="getVote(movie.vote_average) > 0">
                                                <span v-for="(star) in 5" :key="star">
                                                    <i class="stars"
                                                        :class="star <= getVote(movie.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                                                </span>
                                            </template>
                                        </div>
                                        <p>
                                            Trama: {{ movie.overview }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <hr>
                <section class="series">
                    <h2>
                        SERIE TV
                    </h2>
                    <div v-if="store.series == 0">
                        NESSUNA SERIE TROVATA
                    </div>
                    <div v-else class="row">
                        <div class="my-col" v-for="(serie, index) in  store.series " :key="index">
                            <div class="cards">
                                <div class="card">
                                    <img v-if="serie.poster_path == null"
                                        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'"
                                        alt="">
                                    <img v-else :src="` https://image.tmdb.org/t/p/w342/${serie.poster_path} `" alt="">
                                    <div class="infos">
                                        <p>
                                            Titolo: {{ serie.name }}
                                        </p>
                                        <p>
                                            Titolo Originale: {{ serie.original_name }}
                                        </p>
                                        <p>
                                            Lingua: <img class="flag" :src="getFlag(serie.original_language)"
                                                :alt="serie.original_language">
                                        </p>
                                        <div>
                                            Voto: {{ getVote(serie.vote_average) }}
                                            <template v-if="getVote(serie.vote_average) > 0">
                                                <span v-for="(star) in 5" :key="star">
                                                    <i class="stars"
                                                        :class="star <= getVote(serie.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                                                </span>
                                            </template>
                                        </div>
                                        <p>
                                            Trama: {{ serie.overview }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <hr>
            </section>

        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: black;
    color: white;
    padding: 20px 0;
    min-height: calc(100vh - 60px);

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 0;

        & h2 {
            margin: 20px 0;
        }
    }

    section {
        margin-bottom: 50px;
    }

    .container .row {
        display: flex;
        flex-wrap: wrap;
    }

    .my-col {
        width: calc(100% / 5 - 20px);
        margin: 10px;
    }

    .card {
        position: relative;
        display: block;
        height: 350px;
    }

    .infos {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &>* {
            padding: 2px 5px;
        }

        & .flag {
            display: inline-block;
            width: 10px;
            height: 10px;
        }

    }

    .card:hover .infos {
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.9);
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    .stars {
        color: yellow;
    }

    .discover>div {
        margin-bottom: 80px;
    }
}
</style>
