import React from 'react'

const ThirdSlide = (pres) => {
    let slide3 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "3%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide3.addText(
        'The Mughal Empire',
        opts
    );

    slide3.addShape(pres.shapes.OVAL, { x: '10%', y: '23%', w: '4%', h: 0.4, line: { color: '#90cae0', width: 2 } , fill: { color: 'ffffff' } });
    slide3.addShape(pres.shapes.OVAL, { x: '10%', y: '43%', w: '4%', h: 0.4, line: { color: '#90cae0', width: 2 } , fill: { color: 'ffffff' } });
    slide3.addShape(pres.shapes.OVAL, { x: '10%', y: '63%', w: '4%', h: 0.4, line: { color: '#90cae0', width: 2 } , fill: { color: 'ffffff' } });
    
    slide3.addText(
        "1",
        { x: "10.3%", y: "17.7%", w: '100%', h: 1, fontSize: 20, color: '#90cae0' }
    )

    slide3.addText(
        "2",
        { x: "10.3%", y: "37.7%", w: '100%', h: 1, fontSize: 20, color: '#90cae0' }
    )

    slide3.addText(
        "3",
        { x: "10.3%", y: "57.7%", w: '100%', h: 1, fontSize: 20, color: '#90cae0' }
    )

    slide3.addText(
        "The poweful muslim empire that rule a large part of india",
        { x: "21%", y: "18%", w: '100%', h: 1, fontSize: 11, color: '000000' }
    )

    slide3.addText(
        "Known for its architectural wonders and cultural fusion",
        { x: "21%", y: "38%", w: '100%', h: 1, fontSize: 11, color: '000000' }
    )

    slide3.addText(
        "Examples include Taj mahel, Red fort and humayu's Tomb",
        { x: "21%", y: "58%", w: '100%', h: 1, fontSize: 11, color: '000000' }
    )


}

export default ThirdSlide