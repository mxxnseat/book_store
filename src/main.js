import './scss/index.scss';

import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";


new Vue({
    el: "#app",
    store,
    components: { App },
    template: '<App />',
    mounted() {
        this.$store.dispatch('fetchBook');
        this.$store.dispatch('getCart');
    }
});
