import './App.css'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import GlobalStyle, { Container } from './styles'
import GithubMetrics from './components/GithubMetrics'
import styled from 'styled-components'

function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Sidebar></Sidebar>
      <Main>
        <Sobre></Sobre>
        <GithubMetrics trophy={true} gitHubStatus={true} gitHubStreak={true}></GithubMetrics>
        <Projetos></Projetos>
      </Main>
    </Container>
    </>
  )
}

const Main = styled.main`
  margin-left: 50px;
`
export default App
