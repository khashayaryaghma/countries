import { useEffect, useState } from "react";
import getData from "../api/getData";

export default function Cards() {

    const [data, setData]=useState([])

    useEffect(() => {
        getData().then((data) => {
            setData(data)
        });
    }, [data]);

  return (
      <main>
          {data?.map((country) => {
              
          })}
      </main>
  );
}
