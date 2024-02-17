import React from 'react'

const NinthSlide = (pres) => {
    let slide9 = pres.addSlide();

    slide9.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "100%",
        w: "100%",
        x: "0%",
        y: "0%"
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '7%', 
        w: '65%', 
        h: 5, 
        // line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    let opts = {
        x: "6%",
        y: "5%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide9.addText(
        'Indian History',
        opts
    );

    slide9.addText(
        'Indian Army',
        { x: "6%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    //Slide info

    slide9.addShape(pres.shapes.OVAL, { x: '8%', y: '37%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide9.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "10%", y: "30%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide9.addShape(pres.shapes.OVAL, { x: '8%', y: '47%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide9.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "10%", y: "40%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide9.addShape(pres.shapes.OVAL, { x: '8%', y: '57%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide9.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "10%", y: "50%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide9.addShape(pres.shapes.OVAL, { x: '8%', y: '67%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide9.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "10%", y: "60%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

}

export default NinthSlide