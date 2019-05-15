<template>
    <div class="navigation-mobile">
        <Hamburger @hamburgerAction="onHamburgerAction" />
        <ul class="nav__mobile" :class="{ open : isOpen }">
            <router-link to="/" tag="li">Home</router-link>
            <router-link to="/about" tag="li">About</router-link>
            <router-link to="/contact" tag="li">Contact</router-link>
            <div class="magnifier">
                <img src="@/assets/img/magnifier.svg" alt="magnifier">
            </div>
        </ul>
    </div>
</template>

<script>
    import Hamburger from '@/components/Hamburger'
    export default {
        name: "NavigationMobile",
        components: { Hamburger },
        data(){
            return{
                isOpen: false
            }
        },
        methods:{
            onHamburgerAction(){
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigation-mobile{
        position: relative;
        top: 0;
        left: 0;
        .nav__mobile{
            position: absolute;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0;
            padding: 0;
            top: -100vw;
            right: 0;
            height: 250px;
            background-color: $light-blue;
            color: $white;
            z-index: 1;
            transition: .3s;
            li{
                width: 100vw;
                margin: 10px 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-self: center;
                text-align: center;
            }
        }
        .nav__mobile.open{
            top: 0;
            z-index: 1;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            li{
                align-self: center;
                text-align: center;
            }
        }
        .magnifier{
            margin: 20px auto;
            display: flex;
            justify-content: center;
            width: 100%;
            height:45px;
            background-color: $search;
        }
    }
    @media (min-width: 1023.99px){
        .navigation-mobile{
            display: none;
        }
    }
</style>
