<template>
    <div class="CartListItem">
        <!-- <check-button></check-button> -->
        <check-button :checked = "item.checked" @click.native="Checked"></check-button>
        <div class="img">
            <img :src="item.image"/>
        </div>
        <div class="right">
            <div class="top">
                {{item.title}}
            </div>
            <div class="center">
                {{item.desc}}
            </div>
              <div class="bottom">
                <span>￥{{item.price}}</span>
                <span>x{{item.count}}</span>
                <button @click="del(item.iid)">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from '../../../components/common/button/CheckButton'
export default {
    name: 'CartListItem',
    props: {
        item: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        Checked() {
            this.item.checked = !this.item.checked
            console.log(this.item)
            window.localStorage.setItem('cartList', JSON.stringify(this.$store.state.cartList))
        },
        del(iid) {
            const arrIndex = this.$store.getters.getCartList.findIndex(item => {
                return item.iid.includes(iid)
            })
            this.$store.getters.getCartList.splice(arrIndex, 1)
            // console.log(arrIndex,this.$store.getters.getCartList)
            window.localStorage.setItem('cartList', JSON.stringify(this.$store.getters.getCartList))
        }
    },
    components: {
        CheckButton
    },
    
}
</script>

<style scoped>
    .CartListItem {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgb(92, 88, 88);
        box-sizing: border-box;
        padding: 8px;
    }
    .check {
        width: 10%;
    }
    .CartListItem .img{
        /* width: 60%; */
        /* width: 50px; */
       width: 30%;
       height: 150px;
       box-sizing: border-box;
       padding: 0 5px;
    }
    img {
        height: 100%;
        border-radius: 10px;
    }
    .CartListItem .right {
        width: 60%;
        /* width: 40%; */
        display: flex;
        flex-direction: column;
    }
    .CartListItem .right .top,
    .CartListItem .right .center,
    .CartListItem .right .bottom {
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
         line-height: 50px;
    }
    .CartListItem .right .bottom{
        display: flex;
        text-align: center;
    }
    .CartListItem .right .bottom span {
        flex: 1;
        /* text-align: left; */
        color: red;
        font-weight: 800;
        justify-content: space-between；
    }
    .CartListItem .right .bottom span:last-child{ 
        
        margin-right: 15px;
    }
    button {
        height: 30px;
        margin: 10px 0 ;
        border-radius: 10px;
        text-align: center;
        padding: 6px;
        background: #fff;
    }
</style>