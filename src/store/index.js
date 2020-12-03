import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        books: null,
        cart: [],
        cartShow: false,
        page: 1
    },
    actions: {
        fetchBook: ctx => {
            axios.get("/books.json")
                .then(({ data }) => {
                    ctx.commit("setBooks", {
                        books: data.filter((book, index) => index < ctx.state.page * 5),
                        length: data.length
                    });
                })
                .catch(e => {
                    console.log("some trouble " + e.message)
                })
        },
        search: (ctx, searchText) => {
            axios.get("/books.json").then(({ data }) => {
                ctx.commit("setBooks", {
                    books: data.filter(book => {
                        return book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchText.toLowerCase())
                    }),
                });
            })
                .catch(e => {
                    console.log("some trouble " + e.message)
                })
        },
        filter: (ctx, filterBy) => {
            axios.get("/books.json").then(({ data }) => {
                ctx.commit("setBooks", {
                    books: data.sort((book, nextBook) => {
                        switch (filterBy) {
                            case 'title':
                                return (book.title.toLowerCase() > nextBook.title.toLowerCase() ? 1 : -1);
                                break;
                            case 'author':
                                return (book.author.toLowerCase() > nextBook.author.toLowerCase() ? 1 : -1);
                                break;
                            case 'price':
                                return book.price - nextBook.price;
                                break;
                        }
                    })
                })
            })
                .catch(e => {
                    console.log("some trouble " + e.message)
                })
        },
        pushItem: (ctx, book) => {
            ctx.commit("pushItem", book);
        },
        clearCart: ctx=>{
            ctx.commit("clearCart");
        },
        cartToggle: ctx => {
            ctx.commit("cartToggle");
        },
        removeCartItem: (ctx, id) => {
            ctx.commit("removeCartItem", id);
        }
    },
    mutations: {
        setBooks: (state, payload) => {
            state.books = payload;
            state.page++;
        },
        pushItem: (state, payload) => {
            let index = state.cart.findIndex(item => item.title == payload.title);

            console.log()

            if (index != -1) {
                state.cart[index].count++;
            }
            else {
                state.cart.push({ count: 1, ...payload });
            }

        },
        clearCart: state=>{
            state.cart = [];
            state.cartShow = false;
        },
        cartToggle: (state) => {
            state.cartShow = !state.cartShow;
        },
        removeCartItem: (state, payload) => {
            state.cart = state.cart.filter(item => item.id != payload);
            if (!state.cart.length) {
                state.cartShow = false;
            }
        }
    },
    getters: {
        books: state => state.books && state.books.books,
        cart: state => state.cart,
        cartCount: state => state.cart.length,
        cartShow: state => state.cartShow,
        loadShow: state => state.books && state.books.books.length < state.books.length && true,
    }
});