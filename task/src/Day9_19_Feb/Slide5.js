const Slide5 = (pres) => {
    let slide5 = pres.addSlide();

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

    slide5.addText(
        'Indian History',
        opts
    );

    slide5.addShape(pres.shapes.OVAL, { 
        x: '4%', 
        y: '25%', 
        w: '20%', 
        h: 2, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide5.addShape(pres.shapes.OVAL, { 
        x: '27%', 
        y: '25%', 
        w: '20%', 
        h: 2, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide5.addShape(pres.shapes.OVAL, { 
        x: '50%', 
        y: '25%', 
        w: '20%', 
        h: 2, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide5.addShape(pres.shapes.OVAL, { 
        x: '73%', 
        y: '25%', 
        w: '20%', 
        h: 2, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    //Subtitle
    slide5.addText(
        'Development of Sanskrit',
        { x: "4%", y: "35%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',bold:true }
    )
    slide5.addText(
        'Indus Valley Civilization',
        { x: "27%", y: "35%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',bold:true }
    )
    slide5.addText(
        'Rigveda Composed',
        { x: "50%", y: "35%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',bold:true }
    )

    slide5.addText(
        'Bronze Age artifacts discovered',
        { x: "73%", y: "35%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',bold:true }
    )

    //Info
    slide5.addText(
        'Inventions',
        { x: "9%", y: "57%", w: '25%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide5.addText(
        'Civilization',
        { x: "32%", y: "57%", w: '25%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide5.addText(
        'Religion',
        { x: "56%", y: "57%", w: '25%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

    slide5.addText(
        'Artifacts',
        { x: "79%", y: "57%", w: '25%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )

}

export default Slide5