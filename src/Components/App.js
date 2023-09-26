import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotels from "../pages/Hotels/Hotels";
import Hotel from "../pages/Hotel/Hotel";
import ContactUs from "../pages/ContactUs/ContactUs";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import Signup from "../pages/Signup/Signup";
import Read from "../pages/Read/Read";
import Update from "../pages/Update/Update";
import Login from "../pages/Login/Login";
import Thankyou from "../pages/Thankyou/Thankyou";


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signup/read" element={<Read />} />
            <Route exact path="/signup/Update" element={<Update />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/thankyou" element={<Thankyou />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
