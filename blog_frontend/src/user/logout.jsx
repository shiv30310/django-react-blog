import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextAPI/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { authed, logout } = useAuth();

  const handleLogin = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Logout</h1>
      {authed && <button onClick={handleLogin}>Log Out</button>}
    </div>
  );
};

export default Logout