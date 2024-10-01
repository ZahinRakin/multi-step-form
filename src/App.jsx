import { Routes, Route } from "react-router-dom";
import YourInfo from "./YourInfo/YourInfo.jsx";
import SelectPlan from "./SelectPlan/SelectPlan.jsx";
import Addons from "./Addons/Addons.jsx";
import Summary from "./Summary/Summary.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import ThankYou from "./ThankYou/ThankYou.jsx";

function App() {

  return (
    <div className="container">
      <SideBar/>
      <Routes>
        <Route path="/multi-step-form/" element={<Navigate to="/multi-step-form/your-info" />}/>
        <Route path="/multi-step-form/multi-step-form/your-info" element={<YourInfo/>}/>
        <Route path="/multi-step-form/select-plan" element={<SelectPlan/>}/>
        <Route path="/multi-step-form/add-ons" element={<Addons/>}/>
        <Route path="/multi-step-form/summary" element={<Summary/>}/>
        <Route path="/multi-step-form/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
  )
}

export default App
