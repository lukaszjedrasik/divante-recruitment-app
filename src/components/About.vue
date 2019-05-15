<template>
    <div>
        <Header />
        <div class="about">
            <div class="about__content">
                <img src="@/assets/img/phone-book.svg" alt="phone book">
                <h2>about</h2>
                <p class="about__content--description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: "About",
        components: { Header }
    }
</script>

<style scoped lang="scss">
    .about{
        margin: 20px 0 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vw;
        .about__content{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
            background-color: $white;
            img{
                margin-top: 57px;
            }
            h2{
                margin: 45px 0 16px 0;
                color: $dark-text;
                font-size: 24px;
                text-transform: uppercase;
            }
            .about__content--description{
                width: 90%;
                font-family: $second-font;
                line-height: 22px;
                font-size: 18px;
                text-align: justify;
                color: rgba(50, 50, 50, 0.64);
            }
        }
    }
    @media(orientation: landscape){
        .about{
            .about__content{
                width: 50%;
            }
        }
    }
    @media(orientation: landscape) and (min-width: 1200px){
        .about{
            min-height: 100%;
            .about__content{
                width: 668px;
                height: 448px;
            }
        }
    }
</style>
