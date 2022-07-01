import { useLocation } from "react-router-dom"

export default function Country() {
  const {state} = useLocation();
  console.log(state);
  return (
    <>
        {/* <h1>hi</h1> */}
    </>
  )
}
