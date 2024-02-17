//MainPage
import React from 'react';
import pptxgen from "pptxgenjs";
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import ForthSlide from './ForthSlide';
import FifthSlide from './FifthSlide';
import SixthSlide from './SixthSlide';
import SevenSlide from './SevenSlide';
import EightSlide from './EightSlide';
import NinthSlide from './NinthSlide';
import TenthSlide from './TenthSlide';
import ElevenSlide from './ElevenSlide';

const PresentationComponent = () => {
    // 1. Create a new Presentation
    let pres = new pptxgen();

    // FirstSlide(pres);
    FirstSlide(pres);
    SecondSlide(pres);
    ThirdSlide(pres);
    ForthSlide(pres);
    FifthSlide(pres);
    SixthSlide(pres);
    SevenSlide(pres);
    EightSlide(pres);
    NinthSlide(pres);
    TenthSlide(pres);
    ElevenSlide(pres);

    pres.writeFile();
}

export default PresentationComponent;
