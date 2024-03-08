import React from 'react'

const Slide19 = (pres) => {
    let slide19 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true,
        fontFace: 'League Spartan'
    };

    slide19.addText(
        'Indian History',
        opts
    );

    slide19.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '20%', 
        w: '0', 
        h: 4, 
        line: { color: '000000', width: 1,dashType: 'dot' } 
    });

    slide19.addShape(pres.shapes.OVAL, { x: '3.5%', y: '25%', w: '1%', h: 0.1, line: { color: '#FFFF00', width: 1 } , fill: { color: '#FFFF00' } });

    slide19.addText(
        'Key Events in 1999',
        { x: "6%", y: "17%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true,fontFace: 'League Spartan' }
    )

    slide19.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "6%", y: "27%", w: '40%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide19.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "6%", y: "37%", w: '40%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide19.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "6%", y: "47%", w: '40%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )


    

    slide19.addShape(pres.shapes.LINE, { 
        x: '50%', 
        y: '20%', 
        w: '0', 
        h: 4, 
        line: { color: '000000', width: 1,dashType: 'dot' } 
    });

    slide19.addShape(pres.shapes.OVAL, { x: '49.5%', y: '25%', w: '1%', h: 0.1, line: { color: '#FFFF00', width: 1 } , fill: { color: '#FFFF00' } });


    slide19.addText(
        'Significant Achievements',
        { x: "52%", y: "17%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true,fontFace: 'League Spartan' }
    )

    slide19.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "52%", y: "27%", w: '40%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide19.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "52%", y: "37%", w: '40%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )
}

export default Slide19