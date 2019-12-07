
<template>
  <div class="piepagina" >
    <a class="opcion" href="https://www.flexcus.pe" target="_blank">{{ msg }}</a>
    <span class="opcion2"><small>© 2019 FLEXCUS.pe. Todos los derechos reservados</small></span>
  </div>
</template>

<script>
export default {
  name: 'Piepagina',
  data () {
    return {
      msg: 'FLEXCUS.pe'
    }
  }  
}
</script>

<style scoped>
  .piepagina {
    position: fixed;
    bottom: 0;
    /*padding-top: 2px;
    padding-left: 15px;*/
    width: 100%;
    height: 20px;
    background-color: #858585;
    font-size: 13px;
  }
  .opcion {
      color: #fff;
      float:left;
      margin-left: 2%;
      margin-right: 2%;
      margin-top: -3px;
  }  
  
  .opcion2 {
      color: rgb(255, 255, 255);
      /*margin-left: 2%;*/
      float:right;
      margin-right: 30px;
      margin-top: -3px;
  }  
  @media (max-width: 700px) and (orientation: portrait){
    .piepagina{
      display: none;
    }    
  }

  @media screen and (max-width: 640px) {
    .piepagina{
      display: none;  
    }
  }
</style>
