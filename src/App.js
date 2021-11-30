import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./components/Home";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(15,37,81,255)",
        },
        secondary: {
            main: "#fff",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="App">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
