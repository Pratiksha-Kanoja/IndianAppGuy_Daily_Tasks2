const Slide20 = (pres) => {
    let slide20 = pres.addSlide();

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

    slide20.addText(
        'Indian History',
        opts
    );

    slide20.addShape(pres.shapes.OVAL, { 
        x: '4.5%', 
        y: '19%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide20.addShape(pres.shapes.OVAL, { 
        x: '4.5%', 
        y: '44%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide20.addShape(pres.shapes.OVAL, { 
        x: '4.5%', 
        y: '74%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });


    slide20.addText(
        '>',
        { x: "5%", y: "13.5%", w: '15%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide20.addText(
        '>',
        { x: "5%", y: "38.5%", w: '15%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide20.addText(
        '>',
        { x: "5%", y: "68.5%", w: '12%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide20.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "10%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide20.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "10%", y: "39%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide20.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "10%", y: "69%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide20.addShape(pres.shapes.OVAL, { 
        x: '51.5%', 
        y: '19%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide20.addShape(pres.shapes.OVAL, { 
        x: '51.5%', 
        y: '44%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide20.addShape(pres.shapes.OVAL, { 
        x: '51.5%', 
        y: '74%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });


    // Subtitle

    slide20.addText(
        '>',
        { x: "52%", y: "13.5%", w: '15%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true  ,fontFace: 'League Spartan'}
    )

    slide20.addText(
        '>',
        { x: "52%", y: "38.5%", w: '15%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true ,fontFace: 'League Spartan' }
    )

    slide20.addText(
        '>',
        { x: "52%", y: "68.5%", w: '15%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true ,fontFace: 'League Spartan' }
    )

    // Info

    slide20.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "58%", y: "14%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' ,fontFace: 'Inter' }
    )

    slide20.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "58%", y: "39%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' ,fontFace: 'Inter' }
    )

    slide20.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "58%", y: "69%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' ,fontFace: 'Inter' }
    )
}

export default Slide20