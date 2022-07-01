import { useLocation } from "react-router-dom"
import StyledCountry from "./Country.styles";

export default function Country() {
  const {state} = useLocation();
  console.log(state);
  return (
      <StyledCountry>

      </StyledCountry>
  )
}
