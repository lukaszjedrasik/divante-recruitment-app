<template>
    <div class="hamburger" @click="$emit('hamburgerAction')">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "Hamburger"
    }
</script>

<style scoped lang="scss">
    .hamburger {
        position: relative;
        top: 35px;
        right: 20px;
        width: 30px;
        height: 30px;
        z-index: 9999;
        cursor: pointer;
        div {
            position: absolute;
            top: 0;
            width: 30px;
            height: 2px;
            background-color: $light-text;
            transition: 0.3s;
            &:nth-child(2) {
                top: 10px;
                right: 0;
                width: 15px;
            }
            &:nth-child(3) {
                top: 20px;
            }
        }
    }
    @media (min-width: 1023.99px){
        .hamburger{
            display: none;
        }
    }
</style>
