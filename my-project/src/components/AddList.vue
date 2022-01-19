<template>
  <div>
    <input
      type="text"
      v-if="isAddList"
      class="list-input"
      @blur="closeAddList"
      ref="listTitle"
      @keyup.enter="addList"
      v-model="inputListTitle"
    />
    <div class="add-text" v-else @click="onClickListTitle">+ Add List</div>
  </div>
</template>

<script>
import { postList } from "../api/trello";

export default {
  computed: {},
  data() {
    return {
      inputListTitle: "",
      isAddList: false,
    };
  },
  methods: {
    onClickListTitle() {
      this.isAddList = true;

      this.$nextTick(() => {
        this.$refs.listTitle.focus();
      });
    },
    closeAddList() {
      this.inputListTitle = "";
      this.isAddList = false;
    },
    addList() {
      postList().then(() => {
        this.isAddList = false;
      });
    },
  },
};
</script>

<style>
.list-input {
  color: white;
}

.list-wrapper .add-list .add-text:hover {
  cursor: pointer;
}
</style>
