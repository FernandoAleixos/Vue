const citas = [
	{
		cita: "Buenas tardes",
		autor: ""
	}
]

const app = Vue.createApp({
	data() {
		return {
			citas,
			nuevaCita: ""
		}
	},

	methods: {
		anyadeCita() {
			this.citas.unshift(
				{
					cita: this.nuevaCita,
					autor: ""
				}
			)
		}
	}
})

app.mount("#app")