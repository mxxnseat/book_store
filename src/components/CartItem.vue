<template>
    <div class="cart-item">
        <div class="cart-item-title">{{item.title}}</div>
        <div class="cart-item-author">{{item.author}}</div>
        <div class="cart-item-price">{{item.price}}</div>

        <button @click="remove(item)" class="remove-button button">Удалить</button>
    </div>
</template>

<script>
    export default {
       props:{
           item: Object,
       },
       methods:{
           remove(item){
               console.log(`remove button click ${item}`)
           }
       }
    }
</script>

<style>

</style>