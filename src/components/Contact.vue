<template>
    <div>
        <Header />
        <div class="contact">
            <div class="contact__content">
                <img src="@/assets/img/phone-book.svg" alt="phone book">
                <h2>contact</h2>
                <p class="mail">divante@divante.pl</p>
                <p class="phone">tel. 123- 456 - 789</p>
                <p class="phone">tel. 887 - 236 - 324</p>
                <p class="adress">ul. Dmowskiego 17</p>
                <p class="adress">00 - 000 Wrocław</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: "Contact",
        components: { Header }
    }
</script>

<style scoped lang="scss">
    .contact{
        margin: 20px 0 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vw;
        .contact__content{
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
                margin: 45px 0 20px 0;
                color: $dark-text;
                font-size: 24px;
                text-transform: uppercase;
            }
            p{
                margin: 0;
                font-size: 18px;
                line-height: 22px;
                font-family: $second-font;
                color: rgba(50, 50, 50, 0.65);
                &.mail{
                    margin-bottom: 22px;
                }
                &.phone{
                    margin-bottom: 3px;
                }
                &.adress{
                    margin-top: 22px;
                    padding-bottom: 20px;
                }
            }
        }
    }
    @media(orientation: landscape){
        .contact{
            min-height: 0;
            .contact__content{
                width: 50%;
            }
        }
    }
    @media(orientation: landscape) and (min-width: 1200px){
        .contact{
            min-height: 100%;
            .contact__content{
                width: 668px;
                height: 448px;
            }
        }
    }
</style>
