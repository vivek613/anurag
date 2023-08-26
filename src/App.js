import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import { AdminDashboard } from "./Components/Admin/AdminDashboard";

import { useContext } from "./Context/useContext";

import { createContext } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

export const Context = createContext(useContext);
function App() {
  const value = useContext(Context);
  return (
    <>
      <BrowserRouter>
        {/* <Context.Provider value={value}> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          {/* <Route path="/user/admin/:id" element={<AdminDashboard />} /> */}
        </Routes>
        {/* </Context.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
