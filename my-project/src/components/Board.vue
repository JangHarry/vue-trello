<template>
  <div>
    <section class="board-wrapper">
      <div class="board-head">
        <div class="header-title"></div>
        <div class="header-menu">
          <a href="" class="show-menu-btn" @click.prevent="onClickShowMenuBtn">
            <i class="fas fa-ellipsis-h dot"></i> &nbsp; Show Menu
          </a>
        </div>
      </div>
      <div class="list-wrapper">
        <div class="list-section">
          <div
            class="list-wrapper"
            v-for="(list, index) in lists"
            :key="index"
            :data-list-id="list.id"
          >
            <List :list="list" />
          </div>
          <div class="add-list">
            <AddList />
          </div>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import List from "./List.vue";
import AddList from "./AddList.vue";

export default {
  computed: {
    ...mapState(["lists"]),
  },
  data() {
    return {
      loading: false,
      bid: "",
      title: "",
      inputTitle: "",
      isTitleEdit: false,
      listDragger: "",
      cardDragger: "",
    };
  },
  components: { List, AddList },
  created() {
    this.GET_LIST();
  },
  methods: {
    ...mapActions([
      "GET_LIST",
      "UPDATE_BOARD",
      "CREATE_LIST",
      "UPDATE_LIST",
      "UPDATE_CARD",
    ]),
    ...mapMutations(["SET_OPEN_BOARD_MENU", "SET_THEME"]),
    onClickTitle() {
      this.isTitleEdit = true;
    },
  },
};
</script>

<style>
.board-wrapper .list-wrapper .list-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.board-wrapper .board-head {
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.board-wrapper .header-menu {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px 0px 0px 10px;
  width: 120px;
  height: 30px;
  border-radius: 1ch;
}
.board-wrapper .header-menu:hover {
  background-color: white;
}

.list-wrapper .add-list {
  background-color: #ff9f74;
  width: 150px;
  height: 30px;
  border-radius: 4ch;
  text-align: center;
  padding: 10px 10px 0px 10px;
  margin: 10px 0px 0px 30px;
  color: white;
}

.header-menu .dot {
  font-size: 12px;
}

.list-wrapper .add-list .add-text:hover {
  cursor: pointer;
}

.board-wrapper .header-title {
  margin: 10px;
  width: 200px;
  border-bottom: dashed;
}
</style>
