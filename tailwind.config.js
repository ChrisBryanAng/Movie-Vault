/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"MV-Red": "#FC4747",
				"MV-BLack": "#10141E",
				"MV-Blue": "#5A698F",
				"MV-Semi-Black": "#161D2F",
			},
			fontFamily: {
				OutfitLight: "Outfit",
			},
		},
	},
	plugins: [],
};
