const Slide9 = (pres) => {
    let slide9 = pres.addSlide();

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

    slide9.addText(
        'Indian History',
        opts
    );

    // Small Rec

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '5%', 
        h: 0.30, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '20%', 
        w: '5%', 
        h: 0.30, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '20%', 
        w: '5%', 
        h: 0.30, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    // Number

    slide9.addText(
        '1',
        { x: "5%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide9.addText(
        '2',
        { x: "36%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide9.addText(
        '3',
        { x: "67%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    // Large Rec

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '29%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '25%', 
        w: '29%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '25%', 
        w: '29%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    // Info

    slide9.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "5%", y: "26%", w: '26%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide9.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "36%", y: "26%", w: '26%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide9.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "67%", y: "26%", w: '26%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

     
}

export default Slide9