import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./ components/NavBar";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path ="/about">
          <About />
        </Route>
        <Route exact path ="/discover">
          <Discover/>
        </Route>
        <Route exact path ="/search">
          <Search/>
        </Route>
        <Route exact path ="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
