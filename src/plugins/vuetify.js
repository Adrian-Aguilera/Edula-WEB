// vuetify.js

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Define tu tema oscuro personalizado con tonos grises y el color naranja
const miTemaOscuroGris = {
  dark: true, 
  colors: {
    // Colores de fondo (Gris)
    background: '#3a3a3aff', 
    surface: '#424242ff',    
    
    // Colores de tu aplicación (Naranja)
    // Usamos 'primary' para definir el color principal de la aplicación. 
    primary: '#FF9800', // Un tono de naranja (puedes ajustar el valor si usas otro)
    
    // Otros colores (mantén o ajusta según necesites)
    secondary: '#424242',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
  },
};

const miTemaClaro = {
  dark: false,
  colors: {
    // Definiciones del tema claro
    primary: '#FF9800',
    background: '#ffffffff',
    surface: '#ffffffff',
    // ...
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'light', 
    themes: {
      miTemaOscuroGris,
      light: miTemaClaro,
    },
  },
})