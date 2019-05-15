<template>
    <div>
        <div class="shopping-products">
            <router-link :to="`/${data.id}?img=${data.img_src}&title=${data.camera.name}&description=${data.camera.full_name}`"
                         class="product"
                         v-for="data in setData"
                         :key="data.id">
                <img :src="data.img_src" alt="">
                <h4 class="title"> {{ data.camera.name }} </h4>
                <h5 class="description"> {{ data.camera.full_name }} </h5>
            </router-link>
        </div>
        <Loader v-if="this.$store.state.data.loader"/>
    </div>
</template>

<script>
    import Loader from '@/components/Loader'

    export default {
        name: "ShoppingProducts",
        components: { Loader },
        data(){
            return {
                isLoading: true
            }
        },
         created() {
             this.$store.dispatch('data/getData');
             if (this.$store.state.data.base !== ''){
                 this.isLoading = false;
             } else {
                 this.isLoading = true
             }
        },
        computed: {
            setData(){
                return this.$store.state.data.base;
            }
        }
    }
</script>

<style scoped lang="scss">
    .shopping-products{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .product{
            margin: 30px;
            display: flex;
            flex-direction: column;
            width: 216px;
            height: 302px;
            background-color: $white;
            box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.02);
            cursor: pointer;
            img{
                width: 100%;
                height: 216px;
            }
            .title{
                margin: 13px;
                font-size: 18px;
                line-height: 21px;
                color: $dark-text;
            }
            .description{
                margin: 0 0 14px 13px;
                font-size: 12px;
                color: $light-text;
            }
        }
    }
    @media (orientation: landscape) and (min-width: 1200px){
        .shopping-products{
            position: absolute;
            top: 130px;
            left: 370px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            .product{
                margin: 30px;
            }
        }
    }
    @media(orientation: landscape) and (min-width: 1440px){
        .shopping-products{
            top: 140px;
            .product{
                margin: 20px;
            }
        }
    }
</style>
