const Slide3 = (pres) => {
    let slide3 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide3.addText(
        'Indian History of 2023',
        opts
    );

    slide3.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '21%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.RECTANGLE, { 
        x: '27%', 
        y: '25%', 
        w: '21%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '25%', 
        w: '21%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.RECTANGLE, { 
        x: '73%', 
        y: '25%', 
        w: '21%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    //Horizontal line
    slide3.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '66%', 
        w: '21%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    slide3.addShape(pres.shapes.LINE, { 
        x: '27%', 
        y: '66%', 
        w: '21%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    slide3.addShape(pres.shapes.LINE, { 
        x: '50%', 
        y: '66%', 
        w: '21%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    slide3.addShape(pres.shapes.LINE, { 
        x: '73%', 
        y: '66%', 
        w: '21%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    // Vertical line

    slide3.addShape(pres.shapes.LINE, { 
        x: '25%', 
        y: '25%', 
        w: '0', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide3.addShape(pres.shapes.LINE, { 
        x: '48%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide3.addShape(pres.shapes.LINE, { 
        x: '71%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide3.addShape(pres.shapes.LINE, { 
        x: '94%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    //Subtitle
    slide3.addText(
        '25',
        { x: "12%", y: "28%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide3.addText(
        '150',
        { x: "34%", y: "28%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide3.addText(
        '50',
        { x: "58%", y: "28%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )

    slide3.addText(
        '100',
        { x: "81%", y: "28%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )

    //Info
    slide3.addText(
        'Population Growth',
        { x: "7%", y: "38%", w: '15%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide3.addText(
        'GDP Growth%',
        { x: "32%", y: "38%", w: '15%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide3.addText(
        'Major Events',
        { x: "55%", y: "38%", w: '15%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

    slide3.addText(
        'Major Events',
        { x: "79%", y: "38%", w: '15%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

}

export default Slide3