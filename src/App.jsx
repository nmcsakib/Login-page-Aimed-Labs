import styled, { ThemeProvider } from 'styled-components'
import LoginPage from './Authentication/LoginPage'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  const theme = {
    color: {
      backgroundColor: "#fff",
      titleTextColor: "#04072F",
      primary1: "#0ecda0",
      primary2: "#1b9e80",
      secondary: "#e5570d"
    },
    responsive: {
      mobile: "481 px",
      tablet: "768 px",
      desktop: "1280px"
    }
  }

  const MainWrapper = styled.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;

  `;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
     <MainWrapper>
      <LoginPage/>
     </MainWrapper>
    </ThemeProvider>
  )
}

export default App
