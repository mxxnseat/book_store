<template>
    <div class="filter-wrapper">
        <button class="button filter-by"
        @click="filter('title')">По названию</button>
        <button class="button filter-by"
        @click="filter('author')">По автору</button>
        <button class="button filter-by"
        @click="filter('price')">По цене</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    

    export default {
        methods:{   
            ...mapActions(['filter'])
        }
    }
</script>

<style>

</style>