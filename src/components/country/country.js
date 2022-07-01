import { useLocation, Link } from "react-router-dom";
import { StyledCountry, StyledContainer } from "./Country.styles";

export default function Country() {
    const { state } = useLocation();
    console.log(state);
    return (
        <StyledCountry>
            <div>
                <Link
                    to={"/"}
                    className="btn m-5 lowdark"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                    }}
                >
                    Back
                </Link>
            </div>

            <StyledContainer className="highdark">
                <div>
                    <img
                        src={state.flags.svg}
                        alt="flag"
                        style={{ width: "28rem" }}
                    />
                </div>
                <div>
                    <h4>{state.name}</h4>
                    <ul
                        style={{
                            listStyle: "none",
                            lineHeight: "2.2rem",
                            fontSize: ".9rem",
                        }}
                    >
                        <li>Native Name: {state.nativeName}</li>
                        <li>Population: {state.population}</li>
                        <li>Region: {state.region}</li>
                        <li>Sub Region: {state.subregion}</li>
                        <li>Capital: {state.capital}</li>
                    </ul>
                </div>
                <div>
                    <ul
                        style={{
                            listStyle: "none",
                            lineHeight: "2.2rem",
                            marginTop: "2.2rem",
                            fontSize: ".9rem",
                        }}
                    >
                        <li>Top Level Domain: {state.topLevelDomain}</li>
                        <li>
                            Currencies:{" "}
                            {state.currencies.map((ele) => ele.name + " ")}
                        </li>
                        <li>
                            Languages:{" "}
                            {state.languages.map((ele) => ele.name + " ")}
                        </li>
                    </ul>
                </div>
                {state.borders && <div>Border Countries: {state.borders.map((ele)=> <span className="btn">{ele}</span>)}</div>}
            </StyledContainer>
        </StyledCountry>
    );
}
