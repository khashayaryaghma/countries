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
    const searc = document.querySelector(".search")
    function select(e) {
        searc.value = ""
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
    const sele = document.querySelector(".select")
    function search(e) {
        sele.value = "none";
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
        <div className="highdark">
            <div className="d-flex justify-content-between p-5 flex-wrap">
                <div
                    className="input-group mb-3"
                    style={{
                        width: "18rem",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                    }}
                >
                    <span className="input-group-text lowdark">🔍</span>
                    <input
                        type="text"
                        className="form-control lowdark search"
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
                    className="lowdark select"
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
