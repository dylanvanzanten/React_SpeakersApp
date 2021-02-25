import React from 'react'

const themes = {
	light: {
		background: "#FFFFFFF"
	},
	dark: {
		background: "#000000"
	}
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext
