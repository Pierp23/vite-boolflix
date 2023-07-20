import { reactive } from "vue";

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    flags: {
        uk: '< span class= "fi fi-gb" ></span>',
        usa: '<span class="fi fi-us"></span>',
        ita: '<span class="fi fi-it"></span>',
        jp: '<span class="fi fi-jp"></span>',
    }



})