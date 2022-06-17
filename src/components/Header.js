import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {

    const[mode, setMode]=useState("Light Mode");

    function changeMode(){

        setMode(mode === "Light Mode" ? "Dark mode" : "Light Mode");

    }

  return (
      <div className="d-flex p-4 justify-content-between">
          <h1>Where in the world?</h1>
          <div
              onClick={changeMode}
              role="button"
              style={{ userSelect: "none" }}
          >
              {/* <FontAwesomeIcon icon="fa-solid fa-sun" /> */}
              <span>{mode}</span>
          </div>
      </div>
  );
}

export default Header