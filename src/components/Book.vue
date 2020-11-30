<template>
    <div class="book">
        <img class="book-image" :src="item.image">
        <div class="book-title">{{item.title}}</div>
        <div class="book-author">Автор: {{item.author}}</div>
        <div class="book-price">Цена: {{item.price}}₽</div>

        <button @click="add(item)" class="book-button button">Добавить в корзину</button>
    </div>
</template>

<script>
    export default {
        props:{
            item: Object,
        },
        methods:{
            add(item){
                this.$store.dispatch("pushItem", item);
            }
        }
    }
</script>

<style>

</style>