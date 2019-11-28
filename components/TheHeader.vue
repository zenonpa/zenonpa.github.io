<template>
    <ul class="header1">
        <div v-if="authUser">
            <span class="btnLogout"> Iniciaste sesión como {{ authUser.email }}        </span>
            <button v-on:click="logout" class="btnLogout">Cerrar sesión</button>
        </div>
        <div v-else>
            <button v-on:click="signIn" class="btnLogin">Iniciar sesión</button>
        </div>

    
    </ul>
</template>

<script>
import firebase from 'firebase/app';    
import 'firebase/app';
import 'firebase/auth';
export default {
    data () {
        return {
            email: '',
            password: '',
            authUser:null
        }
    },
    name: 'TheHeader',
    methods: {
        signIn: function() {      
            var proveedor = new firebase.auth.GoogleAuthProvider();          
            firebase.auth().signInWithPopup(proveedor)
                .catch(error => alert('Error haciendo logIn: : ' + error.message)/*function (error) {//console.error('Error haciendo logIn: ', error);}*/)
                .then(data => this.authUser = data.user);
        },      
        logout: function() {
            var xxx = this;
            firebase.auth().signOut().then(() => {
                this.$router.replace('/')
                this.authUser = null;
            })
      },
        created () {
            firebase.auth().onAuthStateChanged(user => { this.authUser = user })
        }
    }
}
</script>
<style scoped>
.logoImg {
    position: absolute;
    left: 10%;
    
    left: 4rem;
    top: 2.8rem;
    width: 10%;    
}

.titEmbajada {
    top: 3rem;
    color: #711226!important;
    /* width: 100px;*/
    text-align: center;
    margin: auto!important;
    margin-top: 5rem!important;
}

.header1 {
    position: absolute;
    width: 100%;
    /*right: 3em;*/
    top: -2em;    
    margin: 0;
}

.btnLogin, .btnLogout  {
      background-color: #711226;
      cursor: pointer;
      border: none;
      border-radius: 0.5em;
      width: 11rem;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 1rem;
      float: right;
      margin-right: 11%;
      margin-top: 4rem;      
}

@media screen and (max-width:667px) {
    .header1 {
        position: absolute;
        right: -4rem;
        margin: 0;
    }

    .logoImg {
        position: absolute;      
        left: -3rem;
        top: 2.8rem;
        width: 40%;    
    }    

    .btnLogin, .btnLogout  {
        /* background-color: #711226;*/
        cursor: pointer;
        border: none;
        border-radius: 0.5em;
        width: 7rem;
        height: 4.5rem;
        color: yellow;
        /* padding: 15px 32px;*/
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        float: right;
        margin-right: 10%;    
    }
}

@media screen and (min-width: 668px) and (max-width:768px) {
    .header1 {
        position: absolute;
        right: -0.5rem;
        top: -3em;    
        margin: 0;
    }

    .btnLogin, .btnLogout  {
        /* background-color: #711226;*/
        cursor: pointer;
        border: none;
        border-radius: 0.5em;
        width: 11rem;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        float: right;
        margin-right: 11%;
        margin-top: 4rem;      
    }

}   
 




</style>