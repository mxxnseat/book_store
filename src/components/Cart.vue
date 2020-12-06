<template>
    <div class="background" @click.self="cartToggle()">
        <div class="modal-window">
            <div @click="cartToggle()" class="modal-window-close">&times;</div>
            <div class="fa fa-trash clear-cart" aria-hidden="true"
            @click="checkClear()"
            >   Очистить корзину
            </div>
            <div class="cart-wrapper">
                <CartItem 
                    v-for="(item, index) of cart"
                    :key="index"
                    :item="item"
                /> 
            </div>
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
           ...mapActions(["cartToggle", 'clearCart']),
           checkClear(){
               if(confirm("Вы точно хотите удалить все книги с корзины?")){
                   this.clearCart();
                }
           }
       },
       computed:{
           ...mapGetters(["cart"])
       }

    }
</script>

<style>

</style>