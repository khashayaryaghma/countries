import { useState } from "react";
import StyledHeader from "./Header.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
    const [mode, setMode] = useState("Light Mode");

    function changeMode() {
        setMode(mode === "Light Mode" ? "Dark Mode" : "Light Mode");
    }

    return (
        <StyledHeader variant="boxShadow" className="d-flex justify-content-between align-items-center">
            <h1 style={{fontSize:"23px"}}>Where in the world?</h1>
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

                <span>{mode}</span>
            </div>
        </StyledHeader>
    );
}

export default Header;
