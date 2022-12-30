/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			// responsive screen (custom size)
			desk: { max: "1280px" },
			tab: { max: "1024px" },
			med: { max: "768px" },
			mob: { max: "640px" }
		},
		extend: {
			fontFamily: {
				inter: ["'Inter', sans-serif"],
				poppins: ["'Poppins', sans-serif"],
				noto: ["'Noto Serif', serif"],
				raleway: ["'Raleway', sans-serif"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
};