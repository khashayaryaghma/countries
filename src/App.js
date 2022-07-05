import Home from "./components/Home";
import Country from "./components/Country/Country";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import {useState} from "react"
function App() {

    const [mode, setMode] = useState("Light Mode");
    const body = document.querySelector("body");
    body.style.backgroundColor = "rgb(250, 250, 250)";
    function changeMode() {
        setMode(mode === "Light Mode" ? "Dark Mode" : "Light Mode");

        const lowDark = document.querySelectorAll(".lowdark");
        const highDark = document.querySelectorAll(".highdark");
        
        if (mode === "Dark Mode") {
            body.classList.remove("bg-dark");
            lowDark.forEach((ele) => {
                ele.style.backgroundColor = null;
                ele.style.color = null;
            });
            highDark.forEach((ele) => {
                ele.classList.remove("bg-dark");
                ele.classList.remove("text-light");
            });
        } else {
            body.classList.add("bg-dark");
            lowDark.forEach((ele) => {
                ele.style.backgroundColor = "rgb(43, 55, 67)";
                ele.style.color = "rgb(255, 255, 255)";
            });
            highDark.forEach((ele) => {
                ele.classList.add("bg-dark");
                ele.classList.add("text-light");
            });
        }
    }
    return (
        <Router>
            <Header mode={mode} changeMode={changeMode} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/country/:name"
                    element={<Country />}
                />
            </Routes>
        </Router>
    );
}

export default App;
