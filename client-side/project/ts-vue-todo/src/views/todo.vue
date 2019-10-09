<template>
  <div class="todo-page">
    <ul>
      <todo-item
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        :edittingIndex="edittingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="handleComplete"
      ></todo-item>
    </ul>
    <a-button @click="turn">跳转</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "../components/todo-item";
import { State, Mutation } from 'vuex-class'
@Component({
  name: "TodoPage",
  components: {
    TodoItem
  }
})
export default class TodoPage extends Vue {
  @State('todoList') public list
  public edittingIndex = -1;
  @Mutation('updateTodoList') public updateList
  @Mutation('todoItemComplete') public handleComplete
  public handleSave({index, content}) {
    this.updateList({index, content})
    this.handleCancel()
  }
  public handleEdit(index) {
    this.edittingIndex = index
  }
  public handleCancel() {
    this.edittingIndex = -1
  }
  public turn() {
    this.$router.push({
      name:'show'
    })
  }
}
</script>
