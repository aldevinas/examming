
import Nav from "./components/Nav";
import Upload from "./components/Upload";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/upload'>
            <Upload/>
          </Route>
          <Route path='/storage'>
            <UserList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;