import pptxgen from "pptxgenjs";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
import Slide10 from "./Slide10";
import Slide11 from "./Slide11";
import Slide12 from "./Slide12";
import Slide13 from "./Slide13";
import Slide14 from "./Slide14";
import Slide15 from "./Slide15";

const PresentationComponent = () => {
    // 1. Create a new Presentation
    let pres = new pptxgen();

    Slide1(pres);
    Slide2(pres);
    Slide3(pres);
    Slide4(pres);
    Slide5(pres);
    Slide6(pres);
    Slide7(pres);
    Slide8(pres);
    Slide9(pres);
    Slide10(pres);
    Slide11(pres);
    Slide12(pres);
    Slide13(pres);
    Slide14(pres);
    Slide15(pres);

    pres.writeFile();
}

export default PresentationComponent;