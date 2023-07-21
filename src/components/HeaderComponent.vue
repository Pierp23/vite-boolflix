<script>
import { store } from '../store'

export default {
    name: "HeaderComponent",
    data() {
        return {
            store
        }
    },
    props: {},
    methods: {
        reset() {
            this.store.movies = 0;
            this.store.series = 0
        }

    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="logo" @click="reset()">
                <img src="https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix">
            </div>
            <div class="div-input">
                <input @keyup.enter="$emit('searchMovie')" v-model="store.searchText" type="text"
                    placeholder="Cerca un film o una serie TV">
                <button class="search-btn" @click="$emit('searchMovie')">Cerca</button>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    color: white;
    height: 60px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .logo {
        width: 200px;
    }

    .logo:hover {
        cursor: pointer;
    }

    .div-input {
        & input {
            width: 200px;
            height: 20px;
            border-radius: 20px;
            margin-right: 10px;
        }

        & .search-btn {
            height: 20px;
            padding: 10px;
            line-height: 0;
            border-radius: 20px;
            margin-right: 10px;
        }

        & .search-btn:hover,
        & input:hover {
            cursor: pointer;
        }
    }
}
</style>