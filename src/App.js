import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/_main.scss';
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/cart'><Cart /></Route>
          <Route path='/checkout'><Checkout /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
