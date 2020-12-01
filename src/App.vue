<template>
    <div class="container">
        <div class="top-bar">
            <div @click="cartCount && cartToggle()" class="cart fa fa-shopping-basket" aria-hidden="true">
                <div class="cart-count">{{ cartCount }}</div>
            </div>
            <Search />
        </div>
        <Filters />
        
        <Cart v-if="cartShow" />
        <List />
        <Load v-if="loadShow"/>
    </div>
</template>

<script>
    import List from "./components/List.vue";
    import Cart from "./components/Cart.vue";
    import Load from './components/Load.vue';
    import Search from './components/Search.vue';
    import Filters from './components/Filters.vue';
    import { mapGetters, mapActions } from 'vuex';
    

    export default {
        components:{List, Cart, Load, Filters, Search},
        methods:{   
            ...mapActions(['cartToggle'])
        },
        computed:{
            ...mapGetters(['cartCount', 'cartShow', 'loadShow'])
        }
    }
</script>

<style>

</style>