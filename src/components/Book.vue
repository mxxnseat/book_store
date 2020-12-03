<template>
    <div class="book">
        <img class="book-image" :src="item.image">
        <div class="book-title">{{item.title}}</div>
        <div class="book-author">Автор: {{item.author}}</div>
        <div class="book-price">Цена: {{item.price}}₽</div>

        <button @click="pushItem(item)" class="book-button button">Добавить в корзину</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        props:{
            item: Object,
        },
        methods:{
            ...mapActions(['pushItem'])
        }
    }
</script>

<style>

</style>