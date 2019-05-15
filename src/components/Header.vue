<template>
    <header>
        <router-link to="/" tag="h1">logo</router-link>
        <NavigationMobile />
        <NavigationDesktop />
    </header>
</template>

<script>
    import NavigationMobile from '@/views/NavigationMobile'
    import NavigationDesktop from '@/views/NavigationDesktop'

    export default {
        name: "Header",
        components: { NavigationMobile, NavigationDesktop }
    }
</script>

<style scoped lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        &::after{
            content: '';
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            border-bottom: 1px solid $gray;
        }
        h1{
            margin: 35px 20px;
            color: #6E6E6E;
            font-size: 24px;
            font-weight: $main-weight;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
    @media (min-width: 1024px){
        header{
            h1{
                margin: 35px 50px;
            }
        }
    }
</style>
