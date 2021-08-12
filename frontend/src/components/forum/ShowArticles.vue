<template>
  <div class="container_articles">
    <div v-for="item in articles" :key="item.id" class="articles">
      <h1>{{ item.title }}</h1>
      <div v-if="item.author !== user.pseudo">
        <p><em>Article rédigé par {{ item.author }} le {{ item.publicationDate }} à {{ item.publicationTime }}</em></p>
        <div v-if="item.publicationDate !== item.modificationDate || item.publicationTime !== item.modificationTime">
          <p><em>Dernière modification le {{ item.modificationDate }} à {{ item.modificationTime }}</em></p>
        </div>
      </div>
      <div v-if="item.sharedArticleTitle !== null" class="sharedArticle">
        <h1 class="sharedArticle_title" @click="getArticle(item.sharedArticleId)"><img src="../../assets/share-icon.png" alt="Logo de partage d'articles" class="sharedArticle_title--img">{{ item.sharedArticleTitle }}</h1>
      </div>
      <p v-for="(paragraph, index) in item.content" :key="index" class="article-txt">{{ paragraph }} <span v-if="item.content !== item.fullContent && index === (item.content.length - 1)" class="readMore" @click="getArticle(item.id)">Lire la suite</span></p>
        <div class="reaction">
        <button @click="showComments(item)">Voir les commentaires</button>
        <button @click="share(item)">Partager</button>
        <button v-if="item.author === user.pseudo" @click="editArticle(item)">Modifier</button>
        <button v-else-if="item.author !== user.pseudo && user.admin" class="btnAdmin" @click="editArticle(item)">Modérer</button>
        <button v-if="item.author === user.pseudo" @click="deleteArticle(item)">Supprimer</button>
        <button v-else-if="item.author !== user.pseudo && user.admin" class="btnAdmin" @click="deleteArticle(item)">Supprimer l'article</button>
        </div>
      <ShowComments
        :user="user"
        :article="item"
        :comment="comment"
        :comments="comments"
        :editComment="editComment"
        :addComment="addComment"
        :updateComment="updateComment"
        :deleteComment="deleteComment"
      />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ShowComments from '@/components/forum/ShowComments.vue';

  export default {
    name: 'ShowArticles',
    components: {
      ShowComments
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapState(['comment', 'articles', 'comments'])
    },
    methods: {
      ...mapActions(['getArticle', 'share', 'editArticle', 'deleteArticle', 'showComments', 'editComment', 'addComment', 'updateComment', 'deleteComment'])
    }
  }
</script>

<style lang="scss">

.container_articles{
  padding: 5px;
}
.articles{
  text-align: justify;
  background-color: white;
  box-shadow: 0px 2px 2px 2px #D1515A;
  padding:10px;
  margin: 20px 0;
  border-radius: 25px;
  
  h1{
    color: #D1515A;
    font-size: 25px;
    border-bottom: 2px solid #D1515A;
  }
 em{
   color:grey;
   font-size: small;
 }
}

.reaction{
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  
  button{
    border: none;
    background-color: white;
    color: blue;
    border-top: 3px solid #F2F2F2;
    padding: 5px;
    &:hover{
      border-top: 3px solid #122441;
      color:#122441 ;
    }
  }

}
</style>