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
			myH1Style: `text-center fw-bold display-3 text-warning my-4`,
			myLiStyle: `fw-bold fs-5`,
		};
	},
}).mount("#app");
