import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FRList from './components/FRList'
import CompletedCarousel from './components/CompletedCarousel'
import Events from './components/Events'
import Services from './components/Services'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import CompletedDescription from './components/CompletedDescription';
import CardSample from './components/CardSample';
import Job from './components/Job';
import NavigationBar from './components/NavigationBar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {useState} from 'react'
import UserProfile from './components/UserProfile';
function App() {
  const location = useLocation();
  const [name, setName] = useState();
  const usernameCallBack = (childData)=>{
    setName(childData);
  }
  return (
  
    <div className="App">
        
        <main>

          {location.pathname !== '/login' && location.pathname!=='/'  && location.pathname !=='/signup' && <NavigationBar name = {name}/>}

            <Switch>  

              <Route exact path ='/'  render={() => <Signin usernameCallBack={usernameCallBack} />}/>
              <Route exact path ='/login'  render={() => <Signin usernameCallBack={usernameCallBack} />}/>
              <Route exact path ='/signup' component={Signup} />
              <Route exact path = '/home' render={() =><CardSample name ={name}/>}/>
              <Route exact path ='/jobs' component={Job} />
              <Route exact path='/knowmore' component={CompletedDescription} />
              <Route exact path ='/fundraisers' component={FRList} />
              <Route exact path ='/events' component={Events} />
              <Route exact path ='/services' component={Services}/>
              <Route exact path ='/profile' component={UserProfile}/>
              <Route component ={NavigationBar}></Route>

            </Switch>
        </main>
    </div>
  );
}

export default App;