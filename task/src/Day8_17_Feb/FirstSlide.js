import React from 'react'

const FirstSlide = (pres) => {
    let slide1 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "3%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'center',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide1.addText(
        'System Thincking',
        opts
    );

    slide1.addShape(pres.shapes.RECTANGLE, { 
        x: '16%', 
        y: '18%', 
        w: '35%', 
        h: 4, 
        line: { color: '000000', width: 1 } , 
        fill: { color: '000000' } 
    });

    slide1.addShape(pres.shapes.RECTANGLE, { 
        x: '51%', 
        y: '18%', 
        w: '35%', 
        h: 4, 
        line: { color: '974b00', width: 1 } , 
        fill: { color: '974b00' } 
    });

    // //Subtitle
    slide1.addText(
        'Benefits of systems thinking',
        { x: "16%", y: "25%", w: '30%', h: 1, align: 'Left', fontSize: 30, color: 'a5a5a5',bold:true }
    )

    slide1.addText(
        'Consideration for system thinking',
        { x: "51%", y: "25%", w: '30%', h: 1, align: 'Left', fontSize: 30, color: 'a5a5a5',bold:true }
    )

    // //Pros info

    slide1.addShape(pres.shapes.OVAL, { x: '18%', y: '54%', w: '0.5%', h: 0.05, line: { color: 'a5a5a5', width: 1 } , fill: { color: 'a5a5a5' } });

    slide1.addText(
        "Minimum impact of mistakes",
        { x: "20%", y: "45%", w: '40%', h: 1, fontSize: 14, color: 'a5a5a5' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '18%', y: '64%', w: '0.5%', h: 0.05, line: { color: 'a5a5a5', width: 1 } , fill: { color: 'a5a5a5' } });

    slide1.addText(
        "Make realistic plans",
        { x: "20%", y: "55%", w: '40%', h: 1, fontSize: 14, color: 'a5a5a5' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '18%', y: '74%', w: '0.5%', h: 0.05, line: { color: 'a5a5a5', width: 1 } , fill: { color: 'a5a5a5' } });

    slide1.addText(
        "Repair broken designs",
        { x: "20%", y: "65%", w: '40%', h: 1, fontSize: 14, color: 'a5a5a5' }
    )

    //Cons info

    slide1.addShape(pres.shapes.OVAL, { x: '54%', y: '54%', w: '0.5%', h: 0.05, line: { color: 'a5a5a5', width: 1 } , fill: { color: 'a5a5a5' } });

    slide1.addText(
        'Issue in practice',
        { x: "56%", y: "45%", w: '40%', h: 1, fontSize: 14, color: 'a5a5a5' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '54%', y: '64%', w: '0.5%', h: 0.05, line: { color: 'a5a5a5', width: 1 } , fill: { color: 'a5a5a5' } });

    slide1.addText(
        "The Alliance's track reacord",
        { x: "56%", y: "55%", w: '40%', h: 1, fontSize: 14, color: 'a5a5a5' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '54%', y: '74%', w: '0.5%', h: 0.05, line: { color: 'a5a5a5', width: 1 } , fill: { color: 'a5a5a5' } });

    slide1.addText(
        'Future commitment',
        { x: "56%", y: "65%", w: '40%', h: 1, fontSize: 14, color: 'a5a5a5' }
    )
}

export default FirstSlide