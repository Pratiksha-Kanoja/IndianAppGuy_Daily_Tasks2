import React from 'react'

const Slide13 = (pres) => {

    let slide13 = pres.addSlide();

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

    slide13.addText(
        'Indian History',
        opts
    );

    slide13.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '90%', 
        h: 4, 
        line: { color: '000000', width: 1 ,dashType: 'dot'} , 
        fill: { color: 'ffffff' } 
    });

    slide13.addShape(pres.shapes.LINE, { 
        x: '30%', 
        y: '20%', 
        w: '0', 
        h: 4, 
        line: { color: '000000', width: 1,dashType: 'dot' } 
    });

    slide13.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '43%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 1,dashType: 'dot' } 
    });

    slide13.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '65%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 1,dashType: 'dot' } 
    });

    slide13.addText(
        'History of 1999',
        { x: "6%", y: "22%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    );

    slide13.addText(
        'Cultural Events',
        { x: "6%", y: "45%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    );

    slide13.addText(
        'Economic Milestones',
        { x: "6%", y: "70%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    );


    slide13.addText(
        "In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.",
        { x: "34%", y: "22%", w: '55%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    );

    slide13.addText(
        "1999 marked the release of the iconic Bollywood movie 'Hum Dil De Chuke Sanam' and the establishment of the National Museum of Indian Cinema in Mumbai.",
        { x: "34%", y: "45%", w: '55%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    );

    slide13.addText(
        "The Indian economy in 1999 experienced growth in sectors like IT and telecommunications, laying the foundation for future development. The introduction of the Fiscal Responsibility and Budget Management Act aimed to strengthen fiscal discipline.",
        { x: "34%", y: "70%", w: '55%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    );
}

export default Slide13