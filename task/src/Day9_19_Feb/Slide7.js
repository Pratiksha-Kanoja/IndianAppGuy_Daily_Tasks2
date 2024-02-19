const Slide7 = (pres) => {
    let slide7 = pres.addSlide();

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

    slide7.addText(
        'Indian History',
        opts
    );

    slide7.addShape(pres.shapes.OVAL, { 
        x: '6%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.OVAL, { 
        x: '39%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.OVAL, { 
        x: '72%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    //Subtitle
    slide7.addText(
        '1100BC',
        { x: "13%", y: "35%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true }
    )
    slide7.addText(
        'Indus Valley, Vedic Period',
        { x: "41%", y: "35%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',bold:true }
    )
    slide7.addText(
        'Rigveda Composed Mahabharat era',
        { x: "73%", y: "38%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',bold:true }
    )

    //Info
    slide7.addText(
        'Period',
        { x: "14%", y: "62%", w: '20%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide7.addText(
        'Civilization',
        { x: "46%", y: "62%", w: '20%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide7.addText(
        'Events',
        { x: "80%", y: "62%", w: '20%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

}

export default Slide7