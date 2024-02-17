import React from 'react'

const Fifthslide = (pres) => {
    let slide5 = pres.addSlide();

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

    slide5.addText(
        'Indian History',
        opts
    );

    slide5.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '18%', 
        w: '45%', 
        h: 4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide5.addShape(pres.shapes.RECTANGLE, { 
        x: '52%', 
        y: '18%', 
        w: '45%', 
        h: 4, 
        line: { color: 'ff0000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    //Subtitle
    slide5.addText(
        'Pros',
        { x: "8%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide5.addText(
        'Cons',
        { x: "56%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: 'ff0000',bold:true }
    )

    //Pros info

    slide5.addShape(pres.shapes.OVAL, { x: '6%', y: '32%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide5.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "8%", y: "25%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide5.addShape(pres.shapes.OVAL, { x: '6%', y: '42%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide5.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "35%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide5.addShape(pres.shapes.OVAL, { x: '6%', y: '52%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide5.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "45%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    //Cons info

    slide5.addShape(pres.shapes.OVAL, { x: '54%', y: '32%', w: '0.5%', h: 0.05, line: { color: 'ff0000', width: 1 } , fill: { color: 'ff0000' } });

    slide5.addText(
        'Challenges in border security due to ongoing territorial disputes with neighboring countries.',
        { x: "56%", y: "25%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide5.addShape(pres.shapes.OVAL, { x: '54%', y: '42%', w: '0.5%', h: 0.05, line: { color: 'ff0000', width: 1 } , fill: { color: 'ff0000' } });

    slide5.addText(
        'Budget constraints impacting the pace of infrastructure development and capacity building.',
        { x: "56%", y: "35%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide5.addShape(pres.shapes.OVAL, { x: '54%', y: '52%', w: '0.5%', h: 0.05, line: { color: 'ff0000', width: 1 } , fill: { color: 'ff0000' } });

    slide5.addText(
        'Budget constraints impacting the pace of infrastructure development and capacity building.',
        { x: "56%", y: "45%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )
}

export default Fifthslide