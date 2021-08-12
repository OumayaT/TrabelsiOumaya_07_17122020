<template>
  <div class="home-user">
    <div class=logo_home>
    <img src="../../assets/logo.svg" alt="Groupomania Logo"  />
    </div>
    <p >Bonjour <span>{{ user.pseudo }} ! </span><br>
    Vous êtes désormais connecté.<br>
    Vous pouvez dès à présent vous rendre sur le <span>Forum</span> afin d'échanger avec vos collègues en toute convivialité !</p>
    <button @click="disconnectUser" class="btn-logout">Déconnexion</button>
    <button  @click="getDeleteRequest" class="button-delete">Supprimer mon compte</button>
    <div v-if="deleteQuery">
      <form class="form">
        <div class="form-div">
          <label for="confirmPassword"  class="confirmPassword" >Par mesure de sécurité, veuillez saisir votre mot de passe :</label><br>
          <input type="password" v-model="user.password" maxlength="20" id="confirmPassword" class="confirmPassword"><br>
          <input type="submit" value="Confirmer la suppression" class="validate" @click.prevent="deleteUser">
          <button class="button" @click="cancelDeleteRequest">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'; 
  
  export default {
    name: 'Dashboard',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        deleteQuery: false
      }
    },
    methods: {
      ...mapActions(['disconnectUser', 'deleteUser']),
      getDeleteRequest() {
        this.deleteQuery = true;
      },
      cancelDeleteRequest() {
        this.deleteQuery = false;
      }
    }
  }
</script>

<style lang="scss">

.home-user{
  font-size: x-large;
  text-align: center;
  font-weight: medium;
  margin: auto;
  max-width: 600px;
  padding: 20px;
  .logo_home{
    margin: auto;
    border-bottom: 5px solid red;
    @media (max-width: 600px){
      border-bottom: 2px solid red;
      img{
        height: 50px;
      } 
    }
  }
 
  button{
    border-radius: 5px;
    padding: 10px;
    font-size: medium;
    font-weight: bold ;
    width: 200px;
    margin: 15px;
    border: none;
  }

}

.button-delete{
    background-color: #D1515A;
    color: #122441;
    box-shadow: 2px 2px 2px #122441;
     &:hover{
        box-shadow: 5px 5px 5px red;
        transform: translateY(2px);
      
      }
  }
 .btn-logout {
    
    background: #122441;
    color: white;
    box-shadow: 2px 2px 2px #AEAEB0;
    &:hover {
      box-shadow: 5px 5px 5px #D1515A;
      transform: translateY(2px);
    }
 }
</style>