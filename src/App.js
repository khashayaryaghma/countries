import Home from "./components/Home";
import Country from "./components/Country/Country";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:name" element={<Country/>} />
            </Routes>
        </Router>
    );
}

export default App;
