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
        // setData(Data);
        
    }, [data]);


    function select(e){
        console.log(e.target.value);
        let newData = Data.filter((ele)=>{
            return ele.region === e.target.value
        })
        console.log(newData);
        setData(newData)
    }
    return (
        <>
            <div className="d-flex justify-content-between p-5 flex-wrap">
                <div
                    className="input-group mb-3"
                    style={{
                        width: "18rem",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                    }}
                >
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            🔍
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
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
                    onChange={(e)=>select(e)}
                >
                    <option>Filter by Region</option>
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
        </>
    );
}
export default Main;
