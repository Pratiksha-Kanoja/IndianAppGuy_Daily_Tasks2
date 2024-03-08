const Slide8 = (pres) => {
    let slide8 = pres.addSlide();

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

    slide8.addText(
        'Indian History',
        opts
    );

    slide8.addShape(pres.shapes.OVAL, { 
        x: '10.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6,  
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide8.addShape(pres.shapes.OVAL, { 
        x: '33.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide8.addShape(pres.shapes.OVAL, { 
        x: '56.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6,  
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide8.addShape(pres.shapes.OVAL, { 
        x: '79.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide8.addText(
        '1',
        { x: "3.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 24, color: '0000ff',fontFace:'Inter' }
    )

    slide8.addText(
        '2',
        { x: "26.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 24, color: '0000ff',fontFace:'Inter' }
    )

    slide8.addText(
        '3',
        { x: "49.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 24, color: '0000ff',fontFace:'Inter' }
    )

    slide8.addText(
        '4',
        { x: "72.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 24, color: '0000ff',fontFace:'Inter' }
    )


    // Info

    slide8.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "4%", y: "42%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide8.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "27%", y: "42%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide8.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "50%", y: "45%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide8.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "73%", y: "45%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
    

}

export default Slide8