//MainPage
import React from 'react';
import pptxgen from "pptxgenjs";
import slide1 from './Slide1';


const PresentationComponent = () => {
    // 1. Create a new Presentation
    let pres = new pptxgen();

    // FirstSlide(pres);
    // FirstSlide(pres);
    // addSecondSlide(pres);
    // Thirdslide(pres);
    // ForthSlide(pres);
    // Fifthslide(pres);
    // SixSlide(pres);
    // SevenSlide(pres);
    // Eightslide(pres);
    // NinthSlide(pres);
    // TenthSlide(pres);
    slide1(pres);

    pres.writeFile();
}

export default PresentationComponent;