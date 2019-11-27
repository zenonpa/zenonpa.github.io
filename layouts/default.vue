<template>
  <div class="container">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Registro from '@/components/Registro';
import Header from '@/components/Header';
import { firebase, db } from '@/plugins/firebase'

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
