import React from 'react'

export const themes = {
	light: {
		background: "#FFFFFFF",
		color: "#000000"
	},
	dark: {
		background: "#000000",
		color: "#FFFFFFF"
	}
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext
