import React from 'react'

const ElevenSlide = (pres) => {
    let slide11 = pres.addSlide();

    slide11.addImage({
        path: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kOvrQCyk_KCLyN8l7Gc9dQ.jpeg",
        h: "100%",
        w: "100%",
        x: "0%",
        y: "0%"
    });

    slide11.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '30%', 
        w: '45%', 
        h: 2.5, 
        line: { color: '#FFFF00', width: 2 } , 
        fill: { color: '000000' } 
    });


    slide11.addText(
        'Going Green: A Deep Dive into Sustainable Living Practices',
        { x: "6%", y: "35%", w: '50%', h: 1, align: 'Left', fontSize: 20, color: 'ffffff',bold:true }
    )

    //Slide info

    slide11.addText(
        "Sustainable living means adopting practices that reduce our environmental impact.",
        { x: "6%", y: "50%", w: '35%', h: 1, fontSize: 14, color: 'ffffff' }
    )

}

export default ElevenSlide