<template>
  <div class="container"> 
    <form class="form">
      <div class="form-div">
        <label for="pseudo">Pseudo :</label>
        <input type="text" v-model="user.pseudo" maxlength="20" id="pseudo">
      </div>
      <div class="form-div">
        <label for="password">Mot de passe :</label>
        <input type="password" v-model="user.password" maxlength="20" id="password">
      </div>
      <div class="form-cxn">
        <input type="checkbox" @change="keepUserConnected" id="keepConnexion">
        <label for="keepConnexion" class="keepConnexion">Rester connecté</label>
      </div>
      <div class="form-div test">
        <input type="submit" value="Connexion" class="submit" @click.prevent="login">
      </div>
    </form>
    <p>Pas encore inscrit ? <br> Cliquez sur le bouton ci-dessous</p>
    <button @click="getSignup">Je m'inscris</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Login',
    props: {
      user: {
        type: Object,
        required: true
      },
      keepUserConnected: {
        type: Function,
        required: true
      }
    },
    methods: {
      ...mapActions(['getSignup', 'login'])
    }
  }
</script>

<style lang="scss">

.container{
  max-width: 500px;
  margin: auto;
  font-size: x-large;
  text-align: center;
  p {
    font-size: large;
  }
  button {
    border-radius: 5px;
    border: none;
    padding: 7px;
    font-size: large;
    font-weight: bold;
    width: 150px;
    margin: 20px;
    box-shadow: 2px 2px 2px #192f01;
    background: linear-gradient(to bottom right, #ded369,80%, #192f01);
    &:hover{
        box-shadow: 5px 5px 5px #192f01;
        transform: translateY(2px);
        color:#192f01;
      
      }
  }
}
form {
  padding : 20px 0;

}

.form-div {
  margin: 20px;
  display: flex;
  flex-direction: column;

  .submit {
    border: none;
    border-radius: 5px;
    padding: 7px;
    font-size: large;
     font-weight: bold;
    width: 150px;
    margin: auto;
    box-shadow: 2px 2px 2px #192f01;
    background: linear-gradient(to bottom right,#192f01, 80%,#ded369,);
    &:hover{
        box-shadow: 5px 5px 5px #192f01;
        transform: translateY(2px);
        color:  #ded369;
      
      }
  
  }
}

.form-cxn{
  margin: 20px;
  font-size: small;
}
</style>