
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import Home from "./pages/Home/Home";
import RequireUser from "./component/RequireUser";
function App() {
  return (
 <>
 <Routes>

  <Route element={
  <RequireUser/>}>
  <Route  path="/" element={ <Home/>} />
  </Route>
 


  <Route  path="/login" element={ <Login/>} />
  <Route path="/singup" element={<Singup/>}/>
 </Routes>

 
 </>
  );
}

export default App;
