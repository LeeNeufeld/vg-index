import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GameDetail from "./pages/GameDetail/GameDetail";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/game/:name" render={(props) => <GameDetail {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
