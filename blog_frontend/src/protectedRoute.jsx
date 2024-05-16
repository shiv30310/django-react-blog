import AuthConsumer from "./contextAPI/useAuth";
import { useLocation } from "react-router-dom";

function RequireAuth({ children }) {
    const { authed } = AuthConsumer();
    const location = useLocation();
  
    return authed === true ? ( 
        children ) : (
        <Navigate to="/login" replace state={{path: location.pathname}} /> 
    );
  }

export default RequireAuth