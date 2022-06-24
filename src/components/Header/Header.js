import { useState } from "react";
import StyledHeader from "./Header.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    const [mode, setMode] = useState("Light Mode");

    function changeMode() {
        setMode(mode === "Light Mode" ? "Dark Mode" : "Light Mode");

        const lowDark = document.querySelectorAll(".lowdark");
        const highDark = document.querySelectorAll(".highdark");

        if (mode === "Dark Mode") {
            lowDark.forEach((ele) => {
                ele.style.backgroundColor = null;
                ele.style.color = null;
            });
            highDark.forEach((ele) => {
                ele.classList.remove("bg-dark");
            });
        } else {
            lowDark.forEach((ele) => {
                ele.style.backgroundColor = "rgb(43, 55, 67)";
                ele.style.color = "rgb(255, 255, 255)";
            });
            highDark.forEach((ele) => {
                ele.classList.add("bg-dark");
            });
        }
    }

    return (
        <StyledHeader
            variant="boxShadow"
            className="d-flex justify-content-between align-items-center lowdark"
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

                {mode === "Light Mode" ? "☀️ " : "🌙 "}

                <span>{mode}</span>
            </div>
        </StyledHeader>
    );
}

export default Header;
