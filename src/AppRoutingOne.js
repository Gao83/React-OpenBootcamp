import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingOne() {

  return (
    <div className="App">
      <Router>
       
          <Route exact path='/' element={HomePage}></Route>

    
      </Router>

    </div>
  );
}

export default AppRoutingOne;
