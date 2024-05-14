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
			myLiStyle: `fw-bold fs-5 text-success list-group-item `,
			myIconStyle: `d-inline-block position-absolute end-0 mt-1 me-2 text-danger fs-4`,
		};
	},
	methods: {
		addItem() {
			this.toDoList.push(this.addToDo);
			this.addToDo = ``;
		},
		deleteItem(index) {
			this.toDoList.splice(index, 1);
		},
	},
}).mount("#app");
