import { Routes, Route } from "react-router-dom";
import YourInfo from "./YourInfo/YourInfo.jsx";
import SelectPlan from "./SelectPlan/SelectPlan.jsx";
import Addons from "./Addons/Addons.jsx";
import Summary from "./Summary/Summary.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import ThankYou from "./ThankYou/ThankYou.jsx";
import { Navigate } from "react-router-dom";


function App() {

  return (
    <div className="container">
      <SideBar/>
      <Routes>
        <Route exact path="/" element={<YourInfo />}/> {/**why this line doesn't produce expected result. I want /multi-step-form and /multi-step-form/your-info both to direct to the same webpage */}
        {/* <Route path="/your-info" element={<YourInfo/>}/> this line refuses to work always */}
        <Route path="/select-plan" element={<SelectPlan/>}/>
        <Route path="/add-ons" element={<Addons/>}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
  )
}

export default App
