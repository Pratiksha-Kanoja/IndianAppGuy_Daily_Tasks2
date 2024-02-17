import React from 'react'

const SevenSlide = (pres) => {
    let slide7 = pres.addSlide();

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

    slide7.addText(
        'Indian History',
        opts
    );

    slide7.addText(
        'Indian Army',
        { x: "3%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    //Slide info

    slide7.addShape(pres.shapes.OVAL, { x: '6%', y: '32%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide7.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "8%", y: "25%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide7.addShape(pres.shapes.OVAL, { x: '6%', y: '42%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide7.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "35%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide7.addShape(pres.shapes.OVAL, { x: '6%', y: '52%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide7.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "8%", y: "45%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide7.addShape(pres.shapes.OVAL, { x: '6%', y: '62%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide7.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "55%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    // Right side image

    slide7.addImage({
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW8ZtdYCHbgx6VQ3sDMssMBER7GEjqbeUzZqEmubUhLBbZlpT-1394_da7GSdqLPJAXc&usqp=CAU",
        h: "100%",
        w: "40%",
        x: "60%",
        y: "0%"
    }); 

}

export default SevenSlide