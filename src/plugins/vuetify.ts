import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export const theme = {
    dark: false,
    colors: {
        darkSquare: '#255225',
        lightSquare: '#c5c7c5',
        highlighted: '#d4d477',
        plain: '#284a2a',
        dark: '#586e59',
        light: '#98ab99', 
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'theme',
        themes: {
            theme,
        }
    }
})