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
        Nous vous souhaitons une bonne navigation sur votre nouvelle application
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
  background-color:#F8EFD5;
  max-width: 900px;
  margin: auto;
  padding: 5px;
}

.logo {
  min-width: 260px;
  min-height: 100px;
  margin: 5px;
  
}

main,
footer {
  text-align: center;
  h1 {
    font-size: 1.7rem;
    margin: 25px 0;
  }
   a {
    color:  #DED369;
    background-color: #192f01;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px;
    font-size: x-large;
    
    &:hover {
      font-weight: 700;
    }
  }
}


.texteAccueil {
  text-align: center;
  margin: 20px 0;;

}

.footer {
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 20px;
  font-style: italic;
  color: #192f01;
}
</style>
