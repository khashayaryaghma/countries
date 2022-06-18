// import { useEffect, useState } from "react";
// import getData from "../../api/getData";
import InputGroup from "react-bootstrap/esm/InputGroup";
import FormControl  from "react-bootstrap/esm/FormControl";
import StyledMain from "./Main.styles";
import Cards from "../Cards/Cards";
import data from "../data";

function Main() {
    // const [data, setData]=useState([])

    // useEffect(() => {
    //     getData().then((data) => {
    //         setData(data)
    //     });
    // }, [data]);

    return (
        <StyledMain bgColor="gray">
            
            <Cards data={data} />
        </StyledMain>
    );

}
export default Main;