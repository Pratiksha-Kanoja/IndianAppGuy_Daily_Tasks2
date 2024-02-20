const Slide14 = (pres) => {
    let slide14 = pres.addSlide();

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

    slide14.addText(
        'Indian History',
        opts
    );

    // Small Rec

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '21%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    // Number

    slide14.addText(
        '1',
        { x: "5%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide14.addText(
        '2',
        { x: "36%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide14.addText(
        '3',
        { x: "67%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    // Large Rec

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '29%', 
        h: 1.7, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '25%', 
        w: '29%', 
        h: 1.7, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '25%', 
        w: '29%', 
        h: 1.7, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    // Info

    slide14.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "5%", y: "24%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "36%", y: "24%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "67%", y: "24%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

     // Small Rec

     slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '59%', 
        w: '5%', 
        h: 0.25,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '59%', 
        w: '5%', 
        h: 0.25, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '59%', 
        w: '5%', 
        h: 0.25,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '0000ff' } 
    });

    // Number

    slide14.addText(
        '4',
        { x: "5%", y: "52%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide14.addText(
        '5',
        { x: "36%", y: "52%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    slide14.addText(
        '6',
        { x: "67%", y: "52%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: 'ffffff',fontFace: 'League Spartan' }
    )

    // Large Rec

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '63%', 
        w: '29%', 
        h: 1.7, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '63%', 
        w: '29%', 
        h: 1.7, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide14.addShape(pres.shapes.RECTANGLE, { 
        x: '66%', 
        y: '63%', 
        w: '29%', 
        h: 1.7, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });
    
    // Info

    slide14.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "5%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "36%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "67%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
}

export default Slide14