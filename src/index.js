import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import AppTheme from "./AppTheme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={AppTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
