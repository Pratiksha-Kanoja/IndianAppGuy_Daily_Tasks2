import pptxgen from "pptxgenjs";

const addSecondSlide = (pres) => {
    // 4. Add the second Slide
    let slide2 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "0%",
        y: "40%",
        w: '100%',
        h: 1,
        align: 'center',
        fontSize: 24,
        color: '000000',
    };

    slide2.addText(
        'The Necessity of System Thinking in Leadership',
        opts
    );
}

export default addSecondSlide;