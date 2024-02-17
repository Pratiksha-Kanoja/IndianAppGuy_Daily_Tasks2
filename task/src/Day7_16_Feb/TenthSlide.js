import React from 'react'

const TenthSlide = (pres) => {
    let slide10 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "3%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide10.addText(
        'Indian History',
        opts
    );

    slide10.addText(
        'Indian Army',
        { x: "6%", y: "10%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    //Slide info

    slide10.addShape(pres.shapes.OVAL, { x: '25%', y: '15%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide10.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "30%", y: "7%", w: '70%', h: 1, fontSize: 11, color: '000000' }
    )

    slide10.addShape(pres.shapes.OVAL, { x: '25%', y: '21%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide10.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "30%", y: "13%", w: '70%', h: 1, fontSize: 11, color: '000000' }
    )

    slide10.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "62%",
        w: "92%",
        x: "4%",
        y: "30%"
    });
}

export default TenthSlide