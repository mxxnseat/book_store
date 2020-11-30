<template>
    <div class="background" @click.self="cartToggle()">
        <div class="modal-window">
            <div @click="cartToggle()" class="modal-window-close">&times;</div>
           <CartItem 
                v-for="item of cart"
                :key="item.id"
                :item="item"
            /> 
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import CartItem from "./CartItem.vue";

    export default {
       components:{
           CartItem
       },
       methods:{
           ...mapActions(["cartToggle"])
       },
       computed:{
           ...mapGetters(["cart"])
       }

    }
</script>

<style>

</style>