import './styles/App.scss'
import './styles/reset.scss'
import { AppRouter } from './router/AppRouter'
import { Cover } from '../features/Cover/Cover'

function App() {

  return (
    <div>
      <AppRouter />
      <Cover />
    </div>
  )
}

export default App
