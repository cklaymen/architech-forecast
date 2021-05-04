import { BrowserRouter, Route, Switch } from "react-router-dom";

import Forecast from "../Forecast/Forecast";
import Search from "../Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Switch>
        <Route path="/:cityName" render={() => <Forecast />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
