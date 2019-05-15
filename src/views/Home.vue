<template>
  <div class="container">
    <Header />
    <ShoppingProducts />
    <ShoppingCart />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import ShoppingCart from '@/components/ShoppingCart'
  import ShoppingProducts from '@/components/ShoppingProducts'

export default {
  name: 'home',
  components: { Header, ShoppingCart, ShoppingProducts }
}
</script>
