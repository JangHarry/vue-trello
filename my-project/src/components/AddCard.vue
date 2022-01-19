<template>
  <div class="add-card-section">
    <input
      type="text"
      class="input"
      @keyup.enter="onEnterTitle"
      v-model="inputTitle"
    />
    <a href="" class="cancel-add-btn" @click.prevent="$emit('close')"
      >&times;</a
    >
  </div>
</template>

<script>
import { card } from "../api/index";
export default {
  props: ["lid"],
  data() {
    return {
      inputTitle: "",
    };
  },

  methods: {
    onEnterTitle() {
      if (this.inputTitle) {
        card.create({ listId: this.lid, title: this.inputTitle }).then(() => {
          this.inputTitle = "";
          this.$emit("close");
        });
      }
    },
  },
};
</script>

<style>
.add-card-section .input,
.add-list-input {
  width: 120px;
  border: none;
  border-bottom: solid gray 1px;
}

.add-card-section {
  background-color: white;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 1ch;
}

.add-card-section .cancel-add-btn {
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 15px;
}
</style>
