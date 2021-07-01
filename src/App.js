import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/post/:postId" exact component={Details} />
          <Route>404 not Found !!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
