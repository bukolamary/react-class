import { Route, Routes } from "react-router-dom"
import Count from "./Component/Count"
import Counter from "./Component/Counter"
import Countering from "./Component/Countering"
import Navbar from "./Component/Navbar"
import Homepage from "./Pages/Homepages"
import LoginPage from "./Pages/LoginPage"
import Aboutpage from "./Pages/Aboutpage"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
{/*      
      <LoginPage /> */}
      
    </div>   
  )
}

export default App
