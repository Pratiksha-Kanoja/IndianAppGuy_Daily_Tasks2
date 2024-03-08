const Slide16 = (pres) => {
    let slide16 = pres.addSlide();

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

    slide16.addText(
        'Indian History',
        opts
    );

    // Subtitle

    slide16.addText(
        '1990BC',
        { x: "4%", y: "15%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true,fontFace: 'League Spartan' }
    )

    slide16.addText(
        'Cultural Development',
        { x: "50%", y: "15%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true,fontFace: 'League Spartan' }
    )

    slide16.addShape(pres.shapes.LINE, { 
        x: '5%', 
        y: '28%', 
        w: '42%', 
        h: 0, 
        line: { color: '000000', width: 3 } 
    });

    slide16.addShape(pres.shapes.LINE, { 
        x: '51%', 
        y: '28%', 
        w: '42%', 
        h: 0, 
        line: { color: '000000', width: 3 } 
    });

    // Info

    slide16.addText(
        'In 1990BC, the Indus Valley Civilization flourished with advanced urban planning, trade networks, and sophisticated drainage systems.',
        { x: "4%", y: "26%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide16.addText(
        'The civilization in the Indian subcontinent displayed remarkable advancements in art, science, and governance.',
        { x: "50%", y: "26%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )



    // Subtitle

    slide16.addText(
        'Economic Activities',
        { x: "4%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true,fontFace: 'League Spartan' }
    )

    slide16.addText(
        'Technological Advancements',
        { x: "50%", y: "50%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true,fontFace: 'League Spartan' }
    )

    slide16.addShape(pres.shapes.LINE, { 
        x: '5%', 
        y: '63%', 
        w: '42%', 
        h: 0, 
        line: { color: '000000', width: 3 } 
    });

    slide16.addShape(pres.shapes.LINE, { 
        x: '51%', 
        y: '63%', 
        w: '42%', 
        h: 0, 
        line: { color: '000000', width: 3 } 
    });


    // Info

    slide16.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "4%", y: "63%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide16.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "50%", y: "63%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )
}

export default Slide16