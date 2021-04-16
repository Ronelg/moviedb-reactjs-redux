import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <Layout>
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
