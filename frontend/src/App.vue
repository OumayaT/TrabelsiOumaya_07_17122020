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
  background-color: #192f01;
 

}

#nav{
  display: flex;
  justify-content: center;
  margin: 20px;
  a{
    text-decoration: none;
    margin: 0 8px;
    color: #192f01;
    font-weight: bold;
  }
}
</style>
