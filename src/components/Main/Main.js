import { useEffect, useState } from "react";
// import getData from "../../api/getData";
import StyledMain from "./Main.styles";
import Cards from "../Cards/Cards";
import Data from "../data";

function Main() {
    const [data, setData]=useState([])

    useEffect(() => {
        // getData().then((data) => {
        //     setData(data)
        // });
        setData(Data);
    }, [data]);

    return (
        <StyledMain bgColor="gray">
            
            <Cards data={data} />
        </StyledMain>
    );

}
export default Main;