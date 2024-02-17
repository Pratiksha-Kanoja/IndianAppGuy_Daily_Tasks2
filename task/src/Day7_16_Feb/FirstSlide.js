import React from 'react';
import pptxgen from "pptxgenjs";

const FirstSlide = (pres) => {
    // // 1. Create a new Presentation
    // let pres = new pptxgen();

    // // 2. Add the first Slide
    let slide1 = pres.addSlide();

    // 3. Add objects to the first Slide
    let opts = {
        x: "0%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'center',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    let opts1 = {
        x: "30px",
        y: "65%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 14,
        color: '0000ff',
    };

    let opts2 = {
        x: "47%",
        y: "65%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 14,
        color: '0000ff',
    };

    let opts3 = {
        x: "4.5%",
        y: "70%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 11,
        color: '000000',
    };

    let opts4 = {
        x: "51.5%",
        y: "70%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 11,
        color: '000000',
    };

    slide1.addText(
        'Indian History',
        opts
    );

    slide1.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "50%",
        w: "43%",
        x: "5%",
        y: "20%"
    });

    slide1.addImage({
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg",
        h: "50%",
        w: "43%",
        x: "52%",
        y: "20%"
    });

    //Subtitle
    slide1.addText(
        "Bengaluru",
        opts1
    );

    slide1.addText(
        "Mumbai",
        opts2
    );

    // Info

    slide1.addText(
        "Bengaluru is a beautiful city",
        opts3
    );

    slide1.addText(
        "Mumbai is a beautiful city",
        opts4
    );

    return null; // You don't need to return anything for a functional component
}

export default FirstSlide;