<template>
    <div>
        <Header />
        <div class="shopping-product">
                <img :src="this.details[0].query.img" alt="">
                    <h4 class="title"> {{ this.details[0].query.title }} </h4>
                <div class="interaction">
                    <h5 class="description"> {{ this.details[0].query.description }} </h5>
                    <button
                            @click="add"
                            :disabled="!addToCart"
                            :class="{added : !this.addToCart}">{{ addToCart ? 'Add to Cart' : 'Added' }}</button>
                </div>
        </div>
        <ShoppingCart />
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import ShoppingCart from '@/components/ShoppingCart'

    export default {
        name: "ShoppingProductDetails",
        components: { Header, ShoppingCart },
        data(){
            return{
                addToCart: true,
                details: [],
            }
        },
        created(){
             this.details.push(this.$route)
        },
        methods:{
            add(){
                this.$store.commit('cart/UPDATE_ITEMS_CART', this.details[0].query.description);
                this.addToCart = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .shopping-product{
        margin: 30px auto 60px auto;
        width: 90%;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.02);
        background-color: $light-blue;
        img{
            width: 100%;
        }
        .title{
            margin: 35px 0 15px 52px;
            font-size: 18px;
            line-height: 21px;
            color: $white;
        }
        .interaction{
            display: flex;
            flex-direction: column;
            align-items: center;
            .description{
                width: 80%;
                font-size: 13px;
                line-height: 16px;
                color: rgba(255, 255, 255, 0.79);
                font-weight: normal;
            }
            button{
                margin: 20px auto;
                width: 200px;
                height: 47px;
                border: none;
                background-color: $accent;
                color: $white;
                font-size: 18px;
                line-height: 21px;
                outline: none;
                cursor: pointer;
                transition: .3s;
            }
            .added{
                background-color: rgba(47, 218, 127, 0.47);;
            }
        }
    }
    @media(orientation: landscape) and (min-width: 1200px){
        .shopping-product{
            position: absolute;
            top: 130px;
            left: 370px;
            width: 850px;
            height: 660px;
            img{
                width: 100%;
                height: 470px;
            }
            .interaction{
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-around;
                align-items: center;
                .description{
                    width: 50%;
                }
                button{
                    margin: 0;
                    width: 200px;
                }
            }
        }
    }
    @media(orientation: landscape) and (min-width: 1440px){
        .shopping-product{
            width: 1013px;
        }
    }
</style>
