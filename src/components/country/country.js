import { useLocation ,Link} from "react-router-dom"
import StyledCountry from "./Country.styles";

export default function Country() {
  const {state} = useLocation();
  console.log(state);
  return (
      <StyledCountry>
        <div>
          <Link to={"/"} className="" style={{textDecoration:"none", color:"inherit"}}>Back</Link>
        </div>
      </StyledCountry>
  )
}
