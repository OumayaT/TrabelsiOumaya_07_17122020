<template>
  <div class="container">
    
    <form class="form">
      <p class="asterix">Les champs avec <span>*</span> sont obligatoires</p>
      <div class="form-div">
        <label for="nom">Nom : <span>*</span></label>
        <input type="text" v-model="user.lastName" maxlength="30" id="nom">
      </div>
      <div class="form-div">
        <label for="prenom">Prénom <span>*</span> :</label>
        <input type="text" v-model="user.firstName" maxlength="30" id="prenom">
      </div>
      <div class="form-div">
        <label for="email">E-mail :<span>*</span> </label>
        <input type="text" v-model="user.email" maxlength="50" id="email">
      </div>
      <div class="form-div">
        <label for="pseudo">Choisissez un pseudo : <span>*</span></label>
        <input type="text" v-model="user.pseudo" maxlength="20" id="pseudo">
      </div>
      <div class="form-div">
        <label for="password">Choisissez un mot de passe :<span>*</span> </label>
        <input type="password" v-model="user.password" maxlength="20" id="password">
        <p class="info">NB : Le mot de passe doit contenir au minimum 8 caractères, une lettre majuscule, 
        une lettre minuscule, un chiffre et ne doit pas contenir de symbole ni d'espace.</p>
      </div>
     
      
      
      
      <div class="form-div">
        <input type="submit" value="Inscription" class="submit" @click.prevent="signup">
      </div>
      <button class="button" @click="getLogin">Déjà inscrit ?</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'; 

  export default {
    name: 'Signup',
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
      ...mapActions(['getLogin', 'signup'])
    }
  }
</script>

<style lang="scss">
 .info, .asterix{
   text-align: justify;
   font-style: italic;
 }
span{
  color: red;
}

.form{
  p{
    font-size: small;
  }
}

</style>