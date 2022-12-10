const citas = [
	{
		cita: "Buenas tardes",
		autor: "Paco"
	},
	{
		cita: "Buenas",
		autor: "Enrique"
	},
	{
		cita: "Hola",
		autor: "Casildo"
	},
	{
		cita: "Que tal",
		autor: "Federico"
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