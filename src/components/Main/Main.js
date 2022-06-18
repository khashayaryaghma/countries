import { useEffect, useState } from "react";
// import getData from "../../api/getData";
import StyledMain from "./Main.styles";
import Cards from "../Cards/Cards";
import Data from "../data";
import Form from "react-bootstrap/esm/Form";
function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // getData().then((firstData) => {
        // setData(firstData);
        // });
        setData(Data);
    }, []);

    function select(e) {
        if (e.target.value !== "none") {
            let newData = Data.filter((ele) => {
                return (
                    ele.region.toLowerCase() === e.target.value.toLowerCase()
                );
            });
            setData(newData);
        } else {
            setData(Data);
        }
    }

    function search(e) {
        if (e.target.value !== "") {
            let newData = Data.filter((ele) => {
                return ele.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
            });
            setData(newData);
        } else {
            setData(Data);
        }
    }
    return (
        <div className="back">
            <div className="d-flex justify-content-between p-5 flex-wrap">
                <div
                    className="input-group mb-3"
                    style={{
                        width: "18rem",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                    }}
                >
                    <span className="input-group-text">🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a country..."
                        onKeyUp={(e) => search(e)}
                    />
                </div>

                <Form.Select
                    aria-label="Default select example"
                    style={{
                        width: "13rem",
                        height: "38px",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                    }}
                    onChange={(e) => select(e)}
                >
                    <option value="none">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </Form.Select>
            </div>

            <StyledMain bgColor="gray">
                <Cards data={data} />
            </StyledMain>
        </div>
    );
}
export default Main;
