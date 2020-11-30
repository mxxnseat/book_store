<template>
    <button @click="fetchBook()" class="load button">Загрузить еще</button>
</template>


<script>
    import {mapActions } from 'vuex';
    

    export default {
        methods:{
            ...mapActions(['fetchBook'])
        }
    }
</script>