import HeaderComp from "./Component/HeaderComp"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Couter from "./Component/Couter";
import QuoteHolder from "./Component/QuoteHolder";
import StateManage from "./Component/StateManage";
import State2 from "./Component/State2";
import State1 from "./Component/State1";



function App() {
  return (
  <Router>
  <Switch>
  <Route path="/" exact component={HeaderComp} />
  <Route path="/Couter" exact component={Couter} />
  <Route path="/quote" exact component={QuoteHolder} />
  <Route path="/state" exact component={StateManage} />
  <Route path="/state2" exact component={State2} />
<Route path="/state1" exact component={State1}/>

     </Switch>
  </Router>
  );
}

export default App;
