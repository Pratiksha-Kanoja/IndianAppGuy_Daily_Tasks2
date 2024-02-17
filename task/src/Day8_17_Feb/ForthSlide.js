import React from 'react'

const ForthSlide = (pres) => {
    let slide4 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "5%",
        y: "50px",
        w: '100%',
        h: 1,
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide4.addText(
        'The Impact of System Thinking',
        opts
    );

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '6%', 
        y: '18%', 
        w: '44%', 
        h: 3.8, 
        line: { color: '#0254db', width: 1 } , 
        fill: { color: '#0254db' } 
    });

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '18%', 
        w: '44%', 
        h: 3.8, 
        line: { color: '#a44656', width: 1 } , 
        fill: { color: '#a44656' } 
    });

    //Subtitle
    slide4.addText(
        'Benefits of systems thinking',
        { x: "9%", y: "20%", w: '30%', h: 1, align: 'Left', fontSize: 14, color: 'ffffff',bold:true }
    )

    slide4.addText(
        'Consideration for system thinking',
        { x: "52%", y: "20%", w: '30%', h: 1, align: 'Left', fontSize: 14, color: 'ffffff',bold:true }
    )

     //Pros info

    slide4.addShape(pres.shapes.OVAL, { x: '10.5%', y: '34%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '10.5%', y: '48%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '10.5%', y: '63%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });

    slide4.addText(
        "Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a system",
        { x: "13%", y: "30%", w: '30%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        "Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a system",
        { x: "13%", y: "44%", w: '30%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        "Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a system",
        { x: "13%", y: "59%", w: '30%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    //Cons info

    slide4.addShape(pres.shapes.OVAL, { x: '53.5%', y: '35%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '53.5%', y: '45%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '53.5%', y: '59%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });

    slide4.addText(
        'System thinking is an approach to problem solving that views problems as part of a wider dynamic system',
        { x: "56%", y: "30%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        "It recognizes and prioritizes the understanding of linkages,relationships,interactions and interdependencies among the components",
        { x: "56%", y: "42%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        'of a syatem that give rise to the system observed behaviour',
        { x: "56%", y: "52%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )
}

export default ForthSlide