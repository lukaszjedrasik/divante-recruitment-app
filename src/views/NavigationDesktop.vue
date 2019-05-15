<template>
    <div class="navigation-desktop">
        <ul class="nav__desktop">
            <router-link to="/" tag="li" active-class="active" exact>Home</router-link>
            <router-link to="/about" tag="li" active-class="active">About</router-link>
            <router-link to="/contact" tag="li" active-class="active">Contact</router-link>
            <div class="magnifier">
                <img src="@/assets/img/magnifier.svg" alt="magnifier">
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavigationDesktop"
    }
</script>

<style scoped lang="scss">
    .navigation-desktop{
        display: none;
    }
    @media(min-width: 1024px){
        .navigation-desktop{
            position: relative;
            height: 90px;
            display: flex;
            .nav__desktop{
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                li{
                    margin-right: 50px;
                    cursor: pointer;
                }
                .active{
                    color: $light-blue
                }
                .magnifier{
                    display: flex;
                    justify-content: center;
                    margin-right: 50px;
                    width: 90px;
                    height: 100%;
                    background-color: $white;
                }
            }
        }
    }
</style>
