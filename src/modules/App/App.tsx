import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Forecast from "../Forecast/Forecast";
import Search from "../Search/Search";
import colors from "../common/colors";
import { AppWrapper } from "./App.components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
    color: ${colors.black};
  }
  body {
    margin: 0;
    padding: 0;
  }

  #root {
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <GlobalStyle />
        <Switch>
          <Route
            path="/:cityName"
            render={() => (
              <>
                <Search />
                <Forecast />
              </>
            )}
          />
          <Route
            path="/"
            render={() => (
              <>
                <Search />
              </>
            )}
          />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
