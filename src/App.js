
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import RecommentVideo from './Components/RecommentVideo/RecommentVideo';
import SideBar from './Components/SideBar/SideBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = ()=>setSidebar(!sidebar);
  return (
    <div className="App">
      <Router>
        <Header handleSidebar={handleSidebar}/>
        <Switch>
          <Route path="/search/:searchItem">
          <div className="app__row">
            <SideBar sidebar={sidebar}/>
            <SearchPage sidebar={sidebar}/>
          </div>
       
          </Route>
          <Route path="/">
         
            <div className="app__row">
              <SideBar sidebar={sidebar}/>
              <RecommentVideo sidebar={sidebar}/>
            </div>
          </Route>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
