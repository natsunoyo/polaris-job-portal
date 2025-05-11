// core styles are required for all packages
import '@mantine/core/styles.css';
import "@mantine/dates/styles.css";
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import './App.css'
import { Notifications } from '@mantine/notifications';
import { DatesProvider } from '@mantine/dates';
import 'dayjs/locale/uk';
import { createTheme, MantineProvider } from '@mantine/core'
import Store from './Store';
import { Provider } from 'react-redux';
import AppRoutes from './Pages/AppRoutes';

function App() {

  // Creating a theme to use for customizing Mantine components
  const theme = createTheme({
    colors: {
      'woodSmoke': ['#f6f7f9', '#eceef2', '#d4d8e3', '#aeb6cb', '#828fae',
        '#627195', '#4e5a7b', '#404964', '#373e55', '#323748', '0b0c10'],
      'pictonBlue': ['#eff9ff', '#def1ff', '#b6e5ff', '#75d2ff', '#2cbcff',
        '#00a6fb', '#0082d4', '#0067ab', '#00578d', '#064974', '#042e4d'],
      'purpleHeart': ['#edf0ff', '#dfe2ff', '#c5caff', '#a1a6ff', '#807cfd',
        '#6e5df7', '#5f3fec', '#5d3fd3', '#432ba8', '#392b84', '#23194d'
      ]
    },

    fontFamily: "Commissioner"
  })
  return (
    <Provider store={Store}>
      < DatesProvider settings={{ locale: 'uk' }}>
        <MantineProvider defaultColorScheme='dark' theme={theme}>
          <Notifications position='top-center' zIndex={1000} />
          {/* Routing for dynamic change of web pages */}
          <AppRoutes />
        </MantineProvider>
      </DatesProvider >
    </Provider>
  )



}

export default App
