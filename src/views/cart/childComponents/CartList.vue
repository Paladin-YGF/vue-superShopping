<template>
    <div class="cartList">
        <scroll class="wrraper" :Type="0" :upload="false" ref="scrooll">
           <cart-list-item v-for="(item,index) in getCartList" :key="index" :item='item'></cart-list-item>
        </scroll>
        <cart-button></cart-button>
    </div>
</template>
<script>
import scroll from '../../../components/content/scroll/BScroll'
import CartListItem from './CartListItem'
import CartButton from './CartButtom'
export default {
    name: 'CartList',
    components:{
        scroll,
        CartListItem,
        CartButton
    },
    props: {
        getCartList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    activated() {
        console.log(this.$refs.scrooll.refresh())
    }
}
</script>

<style scoped>
    .cartList {
        height: 100vh;
        width: 100%;
    }
    .wrraper {
        height: calc(100% - 93px - 44px);
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;
    }
</style>