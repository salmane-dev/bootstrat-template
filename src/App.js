import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// page components
import Menu from './components/Menu'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Unsubscribe from './pages/Unsubscribe'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return ( 
    <Router>
      <Menu /> 
          <Switch>
            <Route  path='/' component={Home} exact />
            <Route path='/privacy' component={Privacy} />
            <Route path='/unsubscribe' component={Unsubscribe} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>  
      <Footer />
    </Router>
  )
}

export default App
