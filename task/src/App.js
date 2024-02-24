import { Route,Routes } from "react-router-dom";
<<<<<<< Updated upstream
import PresentationComponent from "./Day9_19_Feb/Mainpage";
=======
import PresentationComponent from "./Component/Main";
>>>>>>> Stashed changes
// import PresentationComponent from "./Day7_16_Feb/Mainpage";
// import PresentationComponent from "./Day8_17_Feb/MainSlide";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<PresentationComponent/>}/> */}
        <Route path="/" element={<PresentationComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
