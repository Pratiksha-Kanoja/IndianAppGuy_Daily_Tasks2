import React from 'react'

const SecondSlide = (pres) => {
    let slide2 = pres.addSlide();

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

    slide2.addText(
        'System Thincking',
        opts
    );

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '16%', 
        y: '18%', 
        w: '35%', 
        h: 4, 
        line: { color: '#0000fe', width: 1 } , 
        fill: { color: '#0000fe' } 
    });

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '51%', 
        y: '18%', 
        w: '35%', 
        h: 4, 
        line: { color: '#a2045b', width: 1 } , 
        fill: { color: '#a2045b' } 
    });

    //Subtitle
    slide2.addText(
        'Benefits of systems thinking',
        { x: "16%", y: "30%", w: '30%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    slide2.addText(
        'Consideration for system thinking',
        { x: "51%", y: "30%", w: '30%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

     //Pros info

    slide2.addShape(pres.shapes.OVAL, { x: '17.5%', y: '43%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide2.addText(
        "System thinking is a way of making sense of the complexity of the world",
        { x: "21%", y: "36%", w: '25%', h: 1, fontSize: 11, color: '000000' }
    )

    slide2.addShape(pres.shapes.OVAL, { x: '17.5%', y: '52%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide2.addText(
        "By looking at it in terms of wholes and relationships rather than by splitting it down into its parts",
        { x: "21%", y: "46%", w: '25%', h: 1, fontSize: 11, color: '000000' }
    )

    slide2.addShape(pres.shapes.OVAL, { x: '17.5%', y: '62%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide2.addText(
        "It has been used as a way of exploring and developing effective action in complexi contexts",
        { x: "21%", y: "56%", w: '25%', h: 1, fontSize: 11, color: '000000' }
    )

    //Cons info

    slide2.addShape(pres.shapes.OVAL, { x: '52.5%', y: '43%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide2.addText(
        'System thinking is an approach to problem solving that views problems as part of a wider dynamic system',
        { x: "56%", y: "37%", w: '25%', h: 1, fontSize: 11, color: '000000' }
    )

    slide2.addShape(pres.shapes.OVAL, { x: '52.5%', y: '52%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide2.addText(
        "It recognizes and prioritizes the understanding of linkages,relationships,interactions and interdependencies among the components",
        { x: "56%", y: "50%", w: '25%', h: 1, fontSize: 11, color: '000000' }
    )

    slide2.addShape(pres.shapes.OVAL, { x: '52.5%', y: '68%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide2.addText(
        'of a syatem that give rise to the system observed behaviour',
        { x: "56%", y: "61%", w: '25%', h: 1, fontSize: 11, color: '000000' }
    )
}

export default SecondSlide