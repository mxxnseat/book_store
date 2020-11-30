import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        books: null,
        cart: [],
        cartShow: false,
        page: 1,
    },
    actions: {
        fetchBook: ctx => {
            axios.get("/books.json")
                .then(({ data }) => {
                    ctx.commit("setBooks", data.filter((book,index)=>index<ctx.state.page*5));
                })
                .catch(e => {
                    console.log("some trouble " + e.message)
                })
        },
        pushItem: (ctx, book) => {
            ctx.commit("pushItem", book);
        },
        cartToggle: ctx => {
            ctx.commit("cartToggle");
        },
    },
    mutations: {
        setBooks: (state, payload) => {
            state.books = payload;
            state.page++;
        },
        pushItem: (state, payload) => {
            state.cart.push(payload);
        },
        cartToggle: (state) => {
            state.cartShow = !state.cartShow;
        },
    },
    getters: {
        books: state => state.books,
        cart: state => state.cart,
        cartCount: state => state.cart.length,
        cartShow: state => state.cartShow,
        loadShow: state=> state.page<5 && true,
    }
});