const Slide2 = (pres) => {
    let slide2 = pres.addSlide();

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

    slide2.addText(
        'Indian History of 2023',
        opts
    );

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '29%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '25%', 
        w: '29%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '25%', 
        w: '29%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    //Horizontal line
    slide2.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '66%', 
        w: '29%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    slide2.addShape(pres.shapes.LINE, { 
        x: '35%', 
        y: '66%', 
        w: '29%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    slide2.addShape(pres.shapes.LINE, { 
        x: '66%', 
        y: '66%', 
        w: '29%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    // Vertical line

    slide2.addShape(pres.shapes.LINE, { 
        x: '33%', 
        y: '25%', 
        w: '0', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide2.addShape(pres.shapes.LINE, { 
        x: '64%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide2.addShape(pres.shapes.LINE, { 
        x: '95%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    //Subtitle
    slide2.addText(
        '25',
        { x: "15%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide2.addText(
        '150',
        { x: "46%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide2.addText(
        '500',
        { x: "78%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )

    //Info
    slide2.addText(
        'Population Growth',
        { x: "10%", y: "38%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide2.addText(
        'GDP Growth%',
        { x: "43%", y: "38%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide2.addText(
        'Major Events',
        { x: "75%", y: "38%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

}

export default Slide2