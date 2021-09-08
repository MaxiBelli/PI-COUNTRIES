
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"//
import LandingPage from "./components/LandingPage"//
import Home from "./components/Home"//
import ActivityCreate from './components/ActivityCreate';
import Detail from './components/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path= "/" component= {LandingPage}/>
       <Route path= "/countries" component= {Home}/>
       <Route path= "/details/:id" component= {Detail}/>
       <Route path= "/activity" component= {ActivityCreate}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
