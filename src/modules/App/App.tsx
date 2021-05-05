import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Forecast from "../Forecast/Forecast";
import Search from "../Search/Search";
import colors from "../common/colors";

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
  color: ${colors.black};
}
body {
}

#root {
  
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Search />
      <Switch>
        <Route path="/:cityName" render={() => <Forecast />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
