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

    }
}
</script>

<template>
    <header>
        <input v-model="store.searchText" type="text" placeholder="Cerca un film">
        <button @click="$emit('searchMovie')">Cerca</button>
    </header>
</template>

<style lang="scss" scoped></style>