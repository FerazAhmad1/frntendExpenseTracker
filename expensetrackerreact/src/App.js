import logo from "./logo.svg";
import "./App.css";
import { SignupForm } from "./components/SignupForm";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupForm buttontype={"Signup"} />} />
      <Route path="/login" element={<SignupForm buttontype={"Login"} />} />
    </Routes>
  );
}
