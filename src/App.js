import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
