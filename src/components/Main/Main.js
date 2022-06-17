// import { useEffect, useState } from "react";
// import getData from "../../api/getData";
import StyledMain from "./Main.styles";
import Cards from "../Cards";
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
            <Cards/>
        </StyledMain>
    )

}
export default Main;