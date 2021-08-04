<template>
  <div class="home">
    <header>
      <img src="../assets/logo.png" alt="Groupomania Logo" class="logo">
    </header>
    <main>
      <h1>Bienvenue dans votre nouveau réseau social</h1>
      <p class="texteAccueil">Vous pourrez créer et vous connecter à votre compte grâce à la section <router-link to="/account">Mon Compte</router-link>.
      <br>Vous pourrez ensuite accéder au forum en vous rendant sur la section <router-link to="/forum">Forum</router-link>.</p>
      <p class="texteAccueil">Nous vous souhaitons une bonne navigation sur votre nouvelle application Groupomania !</p>
    </main>
    <footer class="footer">
      {{ copyright }}
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      copyright() {
        const currentYear = new Date().getFullYear();
        return `Copyright Groupomania ${currentYear}`;
      }
    }
  }
</script>

<style lang="scss">
header {
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
}
#app{
  background-color: burlywood;
  max-width: 900px;
  margin: auto;
  padding: 5px;
}

.logo
{
  background-color: black;
  min-width: 280px;
}

.texteAccueil {
  text-align: justify;
  a {
    color: #d14454;
    &:hover {
      font-weight: 700;
    }
  }
}

.footer {
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 20px;
  font-style: italic;
}
</style>
