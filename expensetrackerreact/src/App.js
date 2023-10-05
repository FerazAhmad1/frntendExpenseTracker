import logo from "./logo.svg";
import "./App.css";
import { SignupForm } from "./components/SignupForm";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { ExpenseForm } from "./components/ExpenseForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<ExpenseForm />} />
      <Route path="/signup" element={<SignupForm buttontype={"Signup"} />} />
      <Route path="/login" element={<SignupForm buttontype={"Login"} />} />
    </Routes>
  );
}
