import { Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./Pages/Home/RootLayout";
import Home from "./Pages/Home/Home";
import Contact from "./components/rootComponents/Contact";
import Login from "./components/authComponents/Login";
import Signup from "./components/authComponents/Signup";
import AuthLayout from "./Pages/AuthLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
