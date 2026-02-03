import LoginPage from "./component/LoginPage"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import SignupPage from "./component/SignupPage"
import Home from "./component/Home"
import Wealth from "./component/homeComponent/Wealth"
import Me from "./component/Me"
import HomePage from "./component/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="wealth" element={<Wealth />} /> 
          <Route path="me" element={<Me />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
