module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				animated: "Roboto Mono, monospace",
				body: "Montserrat, sans-serif",
			},
			colors: {
				salmon: "#ffcbcb",
				lila: "#8454A2",
				amarillo: "#fffc00",
				azul: "rgb(91, 186, 226)",
				gris: "#2F3034",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
