<template>
  <div class="container">
    <div>
      <TheHeader />

      <logo />
      <h1 class="title">
        Embajada de Venezuela
      </h1>
      <h2 class="subtitle">
        Lima - Peru
      </h2>
      <button v-on:click='userConectado'> Test </button>
      <div class="links" v-if="usuario !== null">
        
         <nuxt-link :to="`/registro`" class="button--grey"> Registro        </nuxt-link> 


       <!-- <nuxt-link v-for="post in posts" 
                   :to="{name: 'posts-id', params: {id: post.id}}"
                   :key="post.id"
                   class="button--grey">
          {{post.title}}
        </nuxt-link>  -->

      </div>
    </div>

  <TheFooter />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  data () {
    return {
      authUser: null
    }
  },
  props: [
    { usuario: null }
  ],
  components: {
    Logo,    
    TheHeader, 
    TheFooter
  },
  head () { 
    return {
      title: 'Embajada de Venezuela'
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.all
    }
  },
  methods: {
    userConectado: function() { 
      alert(this.usuario);
    }
  } 
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
