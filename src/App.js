import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import IssuesPage from "./components/IssuesPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:team/:repo/issues">
                    <IssuesPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
