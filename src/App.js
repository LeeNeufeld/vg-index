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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/game/:name" component={GameDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
