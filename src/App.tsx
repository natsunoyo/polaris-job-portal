// core styles are required for all packages
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'
import './assets/ColorScheme.css'
import HomePage from './Pages/HomePage';
import FindJobPage from './Pages/FindJobPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentsPage from './Pages/FindTalentsPage';
import TalentProfilePage from './Pages/TalentProfilePage';

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
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      {/* Routing for dynamic change of web pages */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/talents' element={<FindTalentsPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path="/jobs" element={<FindJobPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
