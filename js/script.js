const { createApp } = Vue;

createApp({
	data() {
		return {
			toDoList: [
				`Fare la spesa`,
				`Guardare la partita`,
				`Pulizia della camera`,
				`Preparare la cena`,
			],
			addToDo: ``,
			myH1Style: `text-center fw-bold display-3 text-warning my-4`,
			myLiStyle: `fw-bold fs-5`,
		};
	},
	methods: {
		addItem() {
			this.toDoList.push(this.addToDo);
			this.addToDo = ``;
		},
	},
}).mount("#app");
