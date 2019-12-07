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
            proveedor.setCustomParameters({
                'login_hint': 'user@gmail.com',
                prompt: 'select_account'  
            });            
            firebase.auth().signInWithPopup(proveedor)
                .catch(error => alert('Error haciendo logIn: : ' + error.message)/*function (error) {//console.error('Error haciendo logIn: ', error);}*/)
                .then(data => {
                    this.authUser = data.user;
                    console.log(this.authUser);
                    this.$emit('usuario', this.authUser);
                });
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
    border: 0px;
    left:0;    
    width: 100%;
    top: 0;    
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
      margin-right: 8%;
      margin-top: 1rem;      
}

@media screen and (max-width:667px) {
    .logoImg {
        position: absolute;      
        left: -3rem;
        top: 2.8rem;
        width: 30%;    
    }    

    .btnLogin, .btnLogout  {
        /* background-color: #711226;*/
        cursor: pointer;
        border: none;
        border-radius: 0.5em;
        width: 7rem;
        height: 2.6rem;
        color: yellow;
        /* padding: 15px 32px;*/
        text-align: center;
        text-decoration: none;
        font-size: 1rem;
        float: right;
        margin: 5%;   
        padding-top: 0rem;
        padding-bottom: 0rem; 
        padding-left: 0rem;
        padding-right: 0rem;       
    }
}

@media screen and (min-width: 668px) and (max-width:768px) {
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