<template>
    <input type="text" class="search" placeholder="Ваша книга или любимый автор"
    @input="search(searchText)"
    v-model="searchText">
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    

    export default {
        methods:{   
            ...mapActions(['search']),
        },
        data(){
            return{
                searchText: '',
            }
        }
    }
</script>

<style>

</style>