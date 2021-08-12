<template>
  <div class="forum">
    <div v-if="main" >
      <div class="title_forum">
         <h1>Bienvenue sur le Forum ! </h1>
      </div>
     
      <p> Partager avec vos collègues des articles sur des sujets qui vous intéressent.</p>
      <p class="get-charter">NB : Avant de participer, merci de lire la <span class="get-charter--link" @click="getCharter">Charte</span> <br>
      indiquant les règles de convivialité à respecter.</p>
      <div class="container_btn">
        <button class="forum-btn" @click="newArticle">Publier un article</button>
        <button class="forum-btn" @click="showUserArticles">Mes articles</button>
        <button class="forum-btn" @click="readLatestArticles">Articles récents</button>
        <button class="forum-btn" @click="findArticle">Rechercher un article</button>
      </div>


      <div v-if="publication && connected">
        <NewArticle
          :article="article"
          :cancelPublishRequest="cancelPublishRequest"
        />
      </div>

      <div v-if="showArticles && connected">
        <ShowArticles
          :user="user"
        />
      </div>

      <div v-if="searchArticle">
        <SearchArticle 
          :user="user"
        /> 
      </div>
    </div>

    <div v-else-if="charter">
      <Charter 
        :returnToMain="returnToMain"
      />
    </div>

    <div v-else>
      <h1>{{ article.title }}</h1>
      <p v-for="(paragraph, index) in article.content" :key="index" class="article-txt">{{ paragraph }}</p>
      <button @click="returnToMain">Retour</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import NewArticle from '@/components/forum/NewArticle';
  import ShowArticles from '@/components/forum/ShowArticles';
  import SearchArticle from '@/components/forum/SearchArticle';
  import Charter from '@/components/forum/Charter';

  export default {
    name: 'Forum',
    components: {
      NewArticle,
      ShowArticles,
      SearchArticle,
      Charter
    },
    computed: {
      ...mapState(['user', 'connected', 'main', 'charter', 'article', 'publication', 'showArticles', 'searchArticle'])
    },
    methods: {
      ...mapActions(['connectUser', 'showUser', 'newPage', 'getCharter', 'newArticle', 'showUserArticles', 'readLatestArticles', 'findArticle', 'cancelPublishRequest', 'returnToMain']),
    },
    beforeMount() {
      if(localStorage.getItem('pseudo') !== null || sessionStorage.getItem('pseudo') !== null) {
        this.showUser();
        this.connectUser();
        this.newPage();
      } else {
        this.newPage();
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.publication === true) {
        this.cancelPublishRequest()
          .then(result => {
            if(result) {
              next();
            } else {
              next(false);
            }
          });
      } else {
        next();
      }     
    }
  };
</script>

<style lang="scss">

.forum{
  font-size:larger;
  text-align: center;
  .title_forum{
    color: #D1515A;
  }
}

.container_btn{
  @media(min-width: 600px){
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin: auto;
    max-width: 400px;
    margin: auto;
  }

}

.get-charter{
  font-size: smaller;
  font-style: italic;
 .get-charter--link{
   font-weight: bold;
 }
}

.forum-btn{
 width: 180px;
 margin: 10px;
 padding: 10px;
 border: none;
 
 color: white;
 border-radius: 10px;
 background: #122441;
 font-weight: bolder;
 box-shadow: 2px 2px 2px #AEAEB0;
  &:hover{
    box-shadow: 5px 5px 5px #AEAEB0;
    transform: translateY(2px);
  
  }
}



</style>