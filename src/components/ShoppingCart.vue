<template>
    <div class="shopping-cart">
        <div class="shopping-cart--contact">
            <img src="@/assets/img/phone-book-without-circle.svg" alt="phone book">
            <h3>Contact</h3>
            <p class="shopping-cart--contact__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue.</p>
        </div>
        <div class="shopping-cart--cart">
            <img src="@/assets/img/shopping-cart.svg" alt="shopping cart">
            <h3> {{ `${!this.$store.state.cart.items.length <= 0 ? `Cart (${this.$store.state.cart.items.length})` : 'Cart'}` }} </h3>
            <div class="shopping-cart--cart__cart-magazine">
                <p v-if="this.$store.state.cart.items <= 0">Cart is empty</p>
                <ul
                        class="itemAdded"
                        v-if="this.$store.state.cart.items">
                    <div
                            class="itemAdded--list"
                            v-for="(item, index) in this.$store.state.cart.items"
                            :key="index">
                        <div class="price">24</div>
                        <div class="product"> {{ item }} </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShoppingCart"
    }
</script>

<style scoped lang="scss">
    .shopping-cart{
        margin: 20px auto 0 auto;
        padding: 0 0 20px 0;
        width: 100%;
        background-color: $light-blue;
        color: $white;
        .shopping-cart--contact{
            margin: 0 24px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            h3{
                margin-left: 20px;
                font-size: 16px;
                line-height: 19px;
            }
            .shopping-cart--contact__description{
                width: 100%;
                text-align: center;
                font-size: 13px;
                line-height: 16px;
                font-family: $second-font;
                color: rgba(255, 255, 255, 0.79);
            }
        }
        .shopping-cart--cart{
            margin: 0 24px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            h3{
                margin-left: 18px;
                font-size: 16px;
                line-height: 19px;
            }
            .shopping-cart--cart__cart-magazine{
                position: relative;
                margin-top: 9px;
                width: 100%;
                height: 131px;
                border: 1px dashed $white;
                p{
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .itemAdded{
                    margin: 0;
                    padding: 0;
                    height: 130px;
                    overflow-y: scroll;
                    .itemAdded--list{
                        margin: 5px auto;
                        padding: 10px 6px;
                        display: flex;
                        justify-content: space-around;
                        width: 80%;
                        background-color: $dark-blue;
                        font-size: 14px;
                        .price{
                            color: $accent;
                        }
                        .product{
                            width: 40px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
    }
    @media (orientation: landscape) and (min-width: 1200px){
        .shopping-cart{
            position: absolute;
            top: 140px;
            left: 55px;
            width: 260px;
        }
    }
</style>
