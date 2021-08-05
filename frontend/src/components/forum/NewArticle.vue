<template>
  <div>
    <form>
      <div class="form-div">
        <div v-if="edit">
          <h1>{{ article.title }}</h1>
        </div>
        <div v-else>
          <label for="title">Titre :</label><br />
          <input type="text" v-model="article.title" id="title" />
        </div>
      </div>
      <div v-if="addSharedArticle" class="sharedArticle">
        <h1 class="sharedArticle_title">
          <img
            src="../../assets/share-icon.png"
            alt="Logo de partage d'articles"
            class="sharedArticle_title--img"
          />{{ sharedArticle.title }}
        </h1>
      </div>
      <div class="form-div">
        <label for="content">Contenu :</label><br />
        <textarea
          id="content"
          v-model="article.content"
          rows="20"
          cols="100"
          maxlength="20000"
        ></textarea>
      </div>
      <div class="form-div-btn">
        <div v-if="edit">
          <input
            type="submit"
            value="Éditer"
            class="submit"
            @click.prevent="update"
          />
        </div>
        <div v-else>
          <input
            type="submit"
            value="Publier"
            class="submit"
            @click.prevent="publish"
          />
        </div>
        <button class="button" @click="cancelPublishRequest">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewArticle",
  props: {
    article: {
      type: Object,
      required: true,
    },
    cancelPublishRequest: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapState(["edit", "addSharedArticle", "sharedArticle"]),
  },
  methods: {
    ...mapActions(["publish", "update"]),
  },
};
</script>

<style lang="scss">
#title {
  width: 200px;
}

.form-div-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .submit,
  button {
    width: 120px;
    margin: 10px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-weight: bolder;
    box-shadow: 2px 2px 2px #192f01;
  }

  .submit {
    background: linear-gradient(to bottom right, #192f01, 80%, #ded369);
    &:hover {
      box-shadow: 5px 5px 5px #192f01;
      transform: translateY(2px);
    }
  }
  button {
    background: linear-gradient(to bottom right, #e0475b, 80%, #ded369);
    &:hover {
      box-shadow: 5px 5px 5px #e0475b;
      transform: translateY(2px);
    }
  }
}

</style>