import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyProvider from "./utils/context/MyProvider";
import { AuthProvider } from "./utils/authContext/authContext";
import Home from "./component/home/home";
import Scanner from "./component/scanner/scanner";
import ImageScanner from "./component/imageScanner/imageScanner";
import Products from "./component/products/products";
import SignIn from "./component/authentication/signIn/signIn";
import SignUp from "./component/authentication/signUp/signUp";
import Verification from "./component/authentication/verification/verification";
import Forget from "./component/authentication/forget/forget";
import About from "./component/about/about";
import Profile from "./component/profile/profile";
export default function App() {
  return (
    <AuthProvider>
      <MyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/imageScanner" element={<ImageScanner />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </MyProvider>
    </AuthProvider>
  );
}
