<template>
    <div class="list">
        <Book
            v-for="book of books"
            :key="book.id"
            :item="book"
        />
    </div>
</template>

<script>
    import Book from "./Book.vue";
    import {mapGetters} from "vuex";

    export default {
        components:{Book},
        computed: {
            ...mapGetters(['books'])
        }
    }
</script>

<style>

</style>