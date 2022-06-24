import { useState } from "react";
import StyledHeader from "./Header.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
    const [mode, setMode] = useState("Light Mode");

    function changeMode() {
        setMode(mode === "Light Mode" ? "Dark Mode" : "Light Mode");
        const main = document.querySelector(".back");
        const header = document.querySelector("header");
        const card = document.querySelector(".cards");
        
        if(mode === "Dark Mode"){
            header.style.backgroundColor = null;
            header.style.color = null;
            main.classList.remove("bg-dark")
        }else{
            header.style.backgroundColor = "rgb(43, 55, 67)"
            header.style.color = "rgb(255, 255, 255)";
            main.classList.add("bg-dark")
        }
    }

    return (
        <StyledHeader
            variant="boxShadow"
            className="d-flex justify-content-between align-items-center"
        >
            <h1 style={{ fontSize: "23px" }}>Where in the world?</h1>
            <div
                onClick={changeMode}
                role="button"
                style={{ userSelect: "none" }}
            >
                {/* {mode === "Light Mode" ? (
                    <FontAwesomeIcon icon="fa-solid fa-sun" />
                ) : (
                    <FontAwesomeIcon icon="fa-solid fa-moon" />
                )} */}

                {mode === "Light Mode" ? (
                    "☀️ "
                ) : (
                   "🌙 " 
                )}

                <span>{mode}</span>
            </div>
        </StyledHeader>
    );
}

export default Header;
