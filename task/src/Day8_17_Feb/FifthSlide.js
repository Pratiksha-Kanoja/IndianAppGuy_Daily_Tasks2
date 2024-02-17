import React from 'react'

const FifthSlide = (pres) => {
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
        line: { color: '#0170ff', width: 1 } , 
        fill: { color: '#0170ff' } 
    });

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '18%', 
        w: '44%', 
        h: 3.8, 
        line: { color: '#aa3369', width: 1 } , 
        fill: { color: '#aa3369' } 
        
    });

    //Subtitle
    slide4.addText(
        'Benefits of systems thinking',
        { x: "6%", y: "29%", w: '30%', h: 1, align: 'Left', fontSize: 14, color: 'ffffff',bold:true }
    )

    slide4.addText(
        'Consideration for system thinking',
        { x: "50%", y: "29%", w: '30%', h: 1, align: 'Left', fontSize: 14, color: 'ffffff',bold:true }
    )

     //Pros info

    slide4.addShape(pres.shapes.OVAL, { x: '7.3%', y: '44%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '7.3%', y: '54%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '7.3%', y: '64%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });

    slide4.addText(
        "Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a system",
        { x: "10%", y: "39%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        "Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a system",
        { x: "10%", y: "49%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        "Systems thinking allows leaders to see the bigger picture and understand the interconnectedness of various components within a system",
        { x: "10%", y: "59%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    //Cons info

    slide4.addShape(pres.shapes.OVAL, { x: '51.3%', y: '44%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '51.3%', y: '54%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });
    slide4.addShape(pres.shapes.OVAL, { x: '51.3%', y: '64%', w: '0.5%', h: 0.05, line: { color: 'ffffff', width: 1 } , fill: { color: 'ffffff' } });

    slide4.addText(
        'System thinking is an approach to problem solving that views problems as part of a wider dynamic system',
        { x: "54%", y: "39%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        "It recognizes and prioritizes the understanding of linkages,relationships,interactions and interdependencies among the components",
        { x: "54%", y: "49%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )

    slide4.addText(
        'of a syatem that give rise to the system observed behaviour',
        { x: "54%", y: "59%", w: '35%', h: 1, fontSize: 11, color: 'ffffff' }
    )
}

export default FifthSlide