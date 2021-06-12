import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import RachatDeCreditPage from './components/pages/RachatDeCreditPage';
import AssuranceEmprunteurPage from './components/pages/AssuranceEmprunteurPage';
import CreditImmobilierPage from './components/pages/CreditImmobilierPage';

import AboutPage from './components/pages/AboutPage';

import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/services/rachat' exact component={RachatDeCreditPage} />
          <Route path='/services/assuranceemprunteur' exact component={AssuranceEmprunteurPage} />
          <Route path='/services/creditimmobilier' exact component={CreditImmobilierPage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
