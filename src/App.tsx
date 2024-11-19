import './App.css'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import GlobalStyle, { Container } from './styles'
import GithubMetrics from './components/GithubMetrics'

function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Sidebar></Sidebar>
      <main>
        <Sobre></Sobre>
        <GithubMetrics trophy={true} gitHubStatus={true} gitHubStreak={true}></GithubMetrics>
        <Projetos></Projetos>
      </main>
    </Container>
    </>
  )
}

export default App
