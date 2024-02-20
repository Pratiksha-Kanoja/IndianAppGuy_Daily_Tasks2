const Slide11 = (pres) => {
    let slide11 = pres.addSlide();

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

    slide11.addText(
        'Indian History',
        opts
    );

    slide11.addShape(pres.shapes.OVAL, { 
        x: '14.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide11.addShape(pres.shapes.OVAL, { 
        x: '46.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide11.addShape(pres.shapes.OVAL, { 
        x: '76.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });


    slide11.addText(
        '1',
        { x: "7.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',fontFace: 'League Spartan',bold:true }
    )

    slide11.addText(
        '2',
        { x: "39.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',fontFace: 'League Spartan',bold:true }
    )

    slide11.addText(
        "3",
        { x: "69.5%", y: "23.5%", w: '20%', h: 1, align: 'center', fontSize: 20, color: '0000ff',fontFace: 'League Spartan',bold:true }
    )

   


    // Info

    slide11.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "4%", y: "42%", w: '30%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide11.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "35%", y: "40.5%", w: '30%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide11.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "65%", y: "42%", w: '30%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
    

}

export default Slide11