<template>
  <div class="container">
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import Registro from '@/components/Registro';
import TheHeader from '@/components/TheHeader';
import { firebase, db } from '@/plugins/firebase'

export default { 
  components: {
    Registro,
    TheHeader
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
