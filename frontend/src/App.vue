<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/account">Mon Compte</router-link> |
      <router-link to="/forum">Forum</router-link>
    </div>
    <router-view/>

  </div>
</template>

<style lang="scss">

body{
  background-color: #122441;
  margin-top: 10px;
 
}

#nav{
  display: flex;
  justify-content: center;
  margin: 10px;
  padding-top: 10px;
  a {
    text-decoration: none;
    margin: 0 8px;
    color: #122441;
    font-weight: bold;
  }
}
</style>
