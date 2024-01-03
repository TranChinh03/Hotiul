import { Route, Routes } from "react-router-dom";
import LoginScreen from "../../views/Authentication/LoginScreen";
export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" index element={ <LoginScreen/>} />
    </Routes>
  );
}
