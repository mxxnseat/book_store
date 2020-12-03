<template>
    <div class="cart-item">
        <div class="cart-item-title">{{item.title}}</div>
        <div class="cart-item-author">{{item.author}}</div>
        <div class="cart-item-price">{{item.price}}₽</div>
        <div class="cart-item-count">x{{item.count}}</div>

        <button @click="removeCartItem(item.title)" class="remove-button button">Удалить</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
       props:{
           item: Object,
       },
       methods:{
           ...mapActions(['removeCartItem'])
       }
    }
</script>

<style>

</style>