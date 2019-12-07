<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script>
import { firebase, db } from '@/plugins/firebase'

export default { 
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
