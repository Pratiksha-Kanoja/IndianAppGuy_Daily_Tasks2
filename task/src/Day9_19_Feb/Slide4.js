const Slide4 = (pres) => {
    let slide4 = pres.addSlide();

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

    slide4.addText(
        'Indian History of 2023',
        opts
    );

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '27%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '25%', 
        w: '27%', 
        h: 2.3, 
        line: { color: '#7d7bec', width: 1 } , 
        fill: { color: '#7d7bec' } 
    });

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '25%', 
        w: '27%', 
        h: 2.3, 
        line: { color: '#FFFF00', width: 1 } , 
        fill: { color: '#FFFF00' } 
    });

    //Subtitle
    slide4.addText(
        '25',
        { x: "15%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: 'ffffff',bold:true }
    )
    slide4.addText(
        '150',
        { x: "45%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide4.addText(
        '500',
        { x: "76%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )

    //Info
    slide4.addText(
        'Population Growth',
        { x: "10%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: 'ffffff' }
    )
    slide4.addText(
        'GDP Growth%',
        { x: "43%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide4.addText(
        'Major Events',
        { x: "74%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

}

export default Slide4