<template>
  <div class="container">
    <Header />
    <Registro />
    <nuxt />
  </div>
</template>

<script>
import Registro from '@/components/Registro';
import Header from '@/components/Header';

export default { 
  components: {
    Registro,
    Header
  },
  head () {
      return {
          meta: [
              {name: 'ScreenOrientation', content: "autoRotate:disabled"}
          ]
      }
  }  
}

</script>

<style>

</style>
