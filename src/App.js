import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import FRList from './components/FRList'
import CompletedCarousel from './components/CompletedCarousel'
import Events from './components/Events'
import Services from './components/Services'
import Test from './components/Test'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CompletedDescription from './components/CompletedDescription';
import CardSample from './components/CardSample';
import Job from './components/Job';
import NavigationBar from './components/NavigationBar'
import Signin from './components/Signin'
import Signup from './components/Signup'
function App() {
  return (
    <div className="App">
        
        <main>

          {/* <NavigationBar ></NavigationBar> */}

            <Switch>
              <Route exact path ='/login' component={Signin} />
              <Route exact path ='/signup' component={Signup} />
              <Route exact path ='/' component={CardSample} />
              <Route exact path ='/cards' component={CardSample} />
              <Route exact path ='/jobs' component={Job} />
              <Route exact path='/knowmore' component={CompletedDescription} />
              <Route exact path ='/fundraisers' component={FRList} />
              <Route exact path ='/events' component={Events} />
              <Route exact path ='/services' component={Services}/>
              <Route exact path ='/test' component={Test}/>
            </Switch>
        </main>
    </div>
  );
}

export default App;
