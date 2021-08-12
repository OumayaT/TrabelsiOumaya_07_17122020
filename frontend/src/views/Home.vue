<template>
  <div class="home">
    <header>
      <img src="../assets/logo.svg" alt="Groupomania Logo" class="logo" />
    </header>
    <main>
      <h1>Bienvenue dans votre nouveau réseau social</h1>
      <p class="texteAccueil">
        Vous pourrez créer et vous connecter à votre compte grâce à la section </p>
      <router-link to="/account"> Accéder à l'application</router-link>
      <p class="texteAccueil">
        Nous vous souhaitons une bonne navigation sur votre nouvelle application<br>
        Groupomania !
      </p>
    </main>
    <footer class="footer">
      {{ copyright }}
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright Groupomania ${currentYear}`;
    },
  },
};
</script>


<style lang="scss">
header {
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
}
#app {
  background-color:WHITE;
  max-width: 900px;
  margin: auto;
  padding: 5px;
  border-radius: 20px;
  

}

.logo {
  min-width: 260px;
  min-height: 100px;
  margin: 5px;
}


main,
footer {
  text-align: center;
  font-style: italic;
  color: #022E51;
  h1 {
    font-size: 1.7rem;
    margin: 25px 0;
  }
   a {
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    padding: 8px;
    font-size: x-large;
    background: linear-gradient(to bottom right, #122441, 90%, #D1515A);
    box-shadow: 2px 2px 2px #D1515A;
    &:hover{
        box-shadow: 5px 5px 5px #122441;
        color: #D1515A;
      }
    

  }
}


.texteAccueil {
  text-align: center;
  margin: 30px 0;;

}


</style>
