const { createApp } = Vue;
createApp({
	data() {
		return {
			toDoList: [
				{
					string: `Fare la spesa`,
					done: true,
				},
				{
					string: `Guardare la partita`,
					done: true,
				},
				{
					string: `Pulizia della camera`,
					done: true,
				},
				{
					string: `Preparare la cena`,
					done: true,
				},
			],
			input: ``,
			myH1Style: `text-center fw-bold display-3 text-black py-3`,
			myIconStyle: `d-inline-block position-absolute end-0 mt-2 text-danger fs-3`,
			taskDone: `text-success`,
			ongoingTask: `text-danger`,
		};
	},
	methods: {
		addItem(text) {
			if (!this.input == ``) {
				this.toDoList.push({
					string: text,
					done: false,
				});
				this.input = ``;
			}
		},
		deleteItem(index) {
			this.toDoList.splice(index, 1);
		},
		done(element) {
			return element.done ? this.taskDone : this.ongoingTask;
		},
		changeToDo(element) {
			element.done ? (element.done = false) : (element.done = true);
		},
		clearList() {
			this.toDoList.splice(0);
		},
	},
	mounted() {},
}).mount("#app");
