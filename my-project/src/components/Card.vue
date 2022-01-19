<template>
  <div class="card-item" :data-card-id="card.id" :data-card-pos="card.pos">
    <div class="card-header">
      <div class="add-text">{{ card.title }}</div>
    </div>
    <a href="" class="card-del-btn" @click.prevent="deleteCard">&times;</a>
    <div class="card-body" v-if="card.description">
      <i class="fas fa-bars"></i>
    </div>
  </div>
</template>

<script>
import { card } from "../api/index";
export default {
  data() {
    return {
      isEdit: false,
      inputTitle: "",
    };
  },
  mounted() {
    this.inputTitle = this.card.title;
  },
  methods: {
    closeEdit() {
      this.isEdit = false;
      this.inputTitle = this.card.title;
    },

    deleteCard() {
      if (confirm("카드를 삭제하시겠습니까?")) {
        card.destroy({ id: this.card.id });
      }
      this.$emit("test");
    },

    editTitle() {
      this.isEdit = true;
      this.$nextTick(() => {
        this.$refs.title.focus();
      });
    },
  },
  props: ["card"],
};
</script>

<style>
.card-del-btn {
  position: relative;
  left: 130px;
  top: -20px;
}

.card-item .card-header {
  width: 120px;
}

.card-item {
  background-color: white;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 1ch;
  text-decoration: none;
  color: black;
}
</style>
