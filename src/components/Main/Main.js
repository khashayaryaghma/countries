import { useEffect, useState } from "react";
// import getData from "../../api/getData";
import StyledMain from "./Main.styles";
import Cards from "../Cards/Cards";
import Data from "../data";
import Form from "react-bootstrap/esm/Form";
function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // getData().then((data) => {
        //     setData(data)
        // });
        setData(Data);
    }, [data]);

    return (
        <>
            <div className="d-flex justify-content-between p-5 flex-wrap">
                <div
                    class="input-group mb-3"
                    style={{
                        width: "18rem",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                    }}
                >
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            🔍
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search for a country..."
                    />
                </div>

                <Form.Select
                    aria-label="Default select example"
                    style={{
                        width: "13rem",
                        height: "38px",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                    }}
                >
                    <option>Filter by Region</option>
                    <option value="1">Africa</option>
                    <option value="2">America</option>
                    <option value="3">Asia</option>
                    <option value="3">Europe</option>
                    <option value="3">Oceania</option>
                </Form.Select>
            </div>

            <StyledMain bgColor="gray">
                <Cards data={data} />
            </StyledMain>
        </>
    );
}
export default Main;
