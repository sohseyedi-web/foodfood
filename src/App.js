import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Menu from "./Components/Menu/Menu";
import Empty from "./Components/Common/isEmpty/isEmpty";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Empty title={"این صفحه وجود ندارد"} />} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
