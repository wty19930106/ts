import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoList: [
			{
				text: '学习TS全面解读',
				complete: false,
			},
			{
				text: '学习Vue全面解读',
				complete: false,
			},
		],
	},
	mutations: {
		updateTodoList(state, {index, content}) {
			state.todoList[index].text = content;
		},
		todoItemComplete(state, index) {
			state.todoList[index].complete = true;
		},
	},
	actions: {

	},
});
