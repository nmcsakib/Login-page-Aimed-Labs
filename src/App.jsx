import styled, { ThemeProvider } from 'styled-components'
import LoginPage from './Authentication/LoginPage'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  const theme = {
    color: {
      backgroundColor: "#fff",
      titleTextColor: "#04072F",
      primary1: "#0ecda0",
      primary2: "#19e7b7",
      secondary1: "#e5570d",
      secondary2: "#963501"
    },
    responsive: {
      mobile: "570px",
      tablet: "768px",
      laptop: "1024px",
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
