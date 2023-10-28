import { ThemeProvider } from 'styled-components'
import LoginPage from './Authentication/LoginPage'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  const theme = {
    color: {
      backgroundColor: "#fff",
      primary: "#0ecda0",
      secondary: "#e5570d"
    },
    responsive: {
      mobile: "481 px",
      tablet: "768 px",
      desktop: "1280px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
     <main>
      <LoginPage/>
     </main>
    </ThemeProvider>
  )
}

export default App
