import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import EmployeeTable from "./components/employeetable/EmployeeTable";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/employee">
          <EmployeeTable />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
