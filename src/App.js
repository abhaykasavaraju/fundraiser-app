import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import FRList from './components/FRList'
import CompletedCarousel from './components/CompletedCarousel'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CompletedDescription from './components/CompletedDescription';

function App() {
  return (
    <div className="App">
        
        <main>
            <Switch>
            <Route exact path='/knowmore' component={CompletedDescription} />
            <Route exact path ='/' component={FRList} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
