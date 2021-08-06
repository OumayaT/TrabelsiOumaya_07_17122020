<template>
  <div class="comment">
    <div v-if="article.getComments">
      <div v-for="item in comments" :key="item.id">
        <p class="editor">
          <strong>{{ item.author }}</strong
          >, le <em>{{ item.publicationDate }}</em> à
          <em>{{ item.publicationTime }}</em>
        </p>
        <div
          v-if="
            item.publicationDate !== item.modificationDate ||
            item.publicationTime !== item.modificationTime
          "
        >
          <p>
            <em
              >Mis à jour le {{ item.modificationDate }} à
              {{ item.modificationTime }}</em
            >
          </p>
        </div>
        <p
          v-for="(paragraph, index) in item.content"
          :key="index"
          class="comment-txt"
        >
          {{ paragraph }}
        </p>
        <div class="manag_comment">
          <button
            v-if="item.author === user.pseudo"
            class="button"
            @click="editComment(item), newComment(article)">
            Modifier
          </button>
          <button
            v-else-if="user.admin"
            class="btnAdmin"
            @click="editComment(item), newComment(article)"
          >
            Modérer
          </button>
          <button
            v-if="item.author === user.pseudo"
            class="button"
            @click="deleteComment(item)">
            Supprimer
          </button>
          <button
            v-else-if="user.admin"
            class="btnAdmin"
            @click="deleteComment(item)">
            Supprimer le commentaire
          </button>
          <button class="button" @click="newComment(article)">Commenter</button>
        </div>
      </div>
    </div>
    <div v-if="article.noComment" class="add-comment" >
      <p>Aucun commentaire</p>
      <button  @click="newComment(article)">
        Ajouter un commentaire
      </button>
    </div>
    <div v-if="article.newComment">
      <form>
        <div class="form-div">
          <label for="comment">Votre commentaire :</label><br />
          <textarea
            id="comment"
            v-model="comment.content"
            rows="10"
            cols="50"
            maxlength="2000"
          ></textarea>
        </div>
        <div class="form-div-comment">
          <div v-if="article.getComments || article.noComment">
            <input
              type="submit"
              value="Poster"
              class="modifier"
              @click.prevent="addComment(article)"
            />
            <button @click="cancelComment(article)" class="annuler">
              Annuler
            </button>
          </div>
          <div v-else>
            <input
              type="submit"
              value="Modifier"
              class="modifier"
              @click.prevent="updateComment(article)"
            />
            <button @click="cancelComment(article)" class="annuler">
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowComments",
  props: {
    user: {
      type: Object,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
    comment: {
      type: Object,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
    editComment: {
      type: Function,
      required: true,
    },
    addComment: {
      type: Function,
      required: true,
    },
    updateComment: {
      type: Function,
      required: true,
    },
    deleteComment: {
      type: Function,
      required: true,
    },
  },
  methods: {
    newComment(article) {
      if (this.comment.content !== null) {
        article.getComments = false;
        article.noComment = false;
      }
      article.newComment = true;
    },
    cancelComment(article) {
      article.newComment = false;
    },
  },
};
</script>

<style lang="scss">
.comment {
  border-top: 2px solid rgba(222, 211, 105, 0.3);
  margin: 20px 0;
}
.comment-txt {
  border: 1px solid grey;
  padding: 5px;
  font-size: small;
  border-radius: 5px;
  background-color: rgba(222, 211, 105, 0.3);
}

.editor {
  font-size: small;
  color: #192f01;
}
.add-comment {
  text-align: center;
  p{
      color: #192f01;
  }
  button{
    border: none;
    background-color: white;
    color: grey;
    border-top: 3px solid #f2f2f2;
    padding: 5px;
    &:hover {
      border-top: 3px solid #192f01;
      color: #192f01;
    }
  }
}
.manag_comment {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  button{
    border: none;
    background-color : white;
    color: grey;
    border-top: 3px solid #f2f2f2;
    padding: 5px;
    &:hover {
      border-top: 3px solid #192f01;
      color: #192f01;
    }
  }
}
.form-div-comment{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.annuler,
.modifier {
  width: 100px;
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  font-weight: bolder;
  box-shadow: 2px 2px 2px #192f01;
}

.annuler {
  background: linear-gradient(to bottom right, #e0475b, 80%, #ded369);
  &:hover {
    box-shadow: 5px 5px 5px #e0475b;
    transform: translateY(2px);
  }
}

.modifier {
  background: linear-gradient(to bottom right, #192f01, 80%, #ded369);
  &:hover {
    box-shadow: 5px 5px 5px #192f01;
    transform: translateY(2px);
  }
}
</style>