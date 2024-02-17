//MainPage
import React from 'react';
import pptxgen from "pptxgenjs";
import addSecondSlide from "./SecondSlide";
import FirstSlide from './FirstSlide';
import Thirdslide from './Thirdslide';
import ForthSlide from './ForthSlide';
import Fifthslide from './Fifthslide';
import SixSlide from './SixSlide';
import SevenSlide from './SevenSlide';
import Eightslide from './Eightslide';
import NinthSlide from './NinthSlide';
import TenthSlide from './TenthSlide';

const PresentationComponent = () => {
    // 1. Create a new Presentation
    let pres = new pptxgen();

    // FirstSlide(pres);
    FirstSlide(pres);
    addSecondSlide(pres);
    Thirdslide(pres);
    ForthSlide(pres);
    Fifthslide(pres);
    SixSlide(pres);
    SevenSlide(pres);
    Eightslide(pres);
    NinthSlide(pres);
    TenthSlide(pres);

    pres.writeFile();
}

export default PresentationComponent;