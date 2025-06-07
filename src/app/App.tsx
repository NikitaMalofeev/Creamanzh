import './styles/App.scss'
import './styles/reset.scss'
import { AppRouter } from './router/AppRouter'
import { Cover } from '../features/Cover/Cover'

function App() {

  return (
    <>
      <AppRouter />
      <Cover />
    </>
  )
}

export default App
