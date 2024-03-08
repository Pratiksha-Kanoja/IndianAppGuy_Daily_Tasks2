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
        bold:true,
        fontFace: 'League Spartan'
    };

    slide7.addText(
        'Indian History',
        opts
    );

     // Small Rec

     slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '27%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '73%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    // Number

    slide7.addText(
        '1',
        { x: "5%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide7.addText(
        '2',
        { x: "28%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide7.addText(
        '3',
        { x: "51%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide7.addText(
        '4',
        { x: "74%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '27%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '73%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    // Info

    slide7.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "4%", y: "30%", w: '20%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide7.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "27%", y: "30%", w: '20%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide7.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "50%", y: "27%", w: '20%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide7.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "73%", y: "27%", w: '20%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

}

export default Slide7