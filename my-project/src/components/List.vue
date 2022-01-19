<template>
  <div
    class="list"
    :list="list"
    :data-list-id="list.id"
    :data-list-pos="list.pos"
  >
    <div class="header" id="list-header">
      <input
        type="text"
        v-if="isEdit"
        class="list-input"
        @blur="closeEdit"
        ref="title"
        @keyup.enter="updateTitle"
        v-model="inputTitle"
      />
      <div class="add-text" v-else @click="editTitle">{{ list.title }}</div>
      <a href="" class="list-del-btn" @click.prevent="deleteList">&times;</a>
    </div>
    <div class="line"></div>
    <div class="card-section">
      <div class="card-list">
        <Card v-for="card in cards" :key="card.id" :card="card" />
        <div class="add-card" v-if="isAddCard">
          <AddCard
            :lid="list.id"
            @test="this.getCardList"
            @close="isAddCard = false"
          />
        </div>
      </div>
      <div class="add-card-btn" @click.prevent="isAddCard = true">
        + Add anoter Card
      </div>
    </div>
  </div>
</template>

<script>
import AddCard from "./AddCard.vue";
import Card from "./Card.vue";
import { putList, card } from "../api/index";
export default {
  components: {
    AddCard,
    Card,
  },
  data() {
    return {
      inputTitle: this.list.title,
      isEdit: false,
      listId: this.list.id,
      isAddCard: false,
      cards: "",
    };
  },
  created() {
    this.getCardList();
  },

  methods: {
    getCardList() {
      card.fetch(this.listId).then((res) => {
        this.cards = res;
      });
    },
    editTitle() {
      this.isEdit = true;
      this.$nextTick(() => {
        this.$refs.title.focus();
      });
    },
    updateTitle() {
      const title = this.inputTitle;
      const preTitle = this.list.title;

      if (!title || title === preTitle) {
        this.closeEdit();
        return;
      }

      putList({ id: this.listId }, { title: title }).then((res) => {
        this.list.title = res.title;
        this.closeEdit();
      });
    },
    closeEdit() {
      this.isEdit = false;
      this.inputTitle = this.list.title;
    },
    deleteList() {
      if (confirm("list를 삭제 하실껀가요?")) {
        this.DELETE_LIST({ id: this.listId });
      }
    },
  },
  props: ["list"],
};
</script>

<style>
.list {
  margin: 10px 30px 30px 20px;
  height: 80%;
}

.list .header {
  background-color: #ff9f74;
  width: 150px;
  height: 30px;
  border-radius: 4ch;
  text-align: center;
  padding: 5% 10px 0px 10px;
  color: white;
}

.list .card-section {
  background-color: #ffe7d0;
  padding: 5px 5px 20px 5px;
  border-radius: 3ch;
  border-top: solid #ff9f74 8px;
}

.list .line {
  position: relative;
  top: -5px;
  background-color: transparent;
  width: 90px;
  height: 25px;
  border-right: 5px dotted #ff9f74;
}

.card-section .add-card-btn {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 1ch;
  background-color: #ff9f74;
  color: white;
}

.add-card-btn:hover {
  cursor: pointer;
}

.list-del-btn {
  position: relative;
  top: -18px;
  left: 60px;
  color: #707070;
}

.list-del-btn:hover {
  color: white;
}
</style>
