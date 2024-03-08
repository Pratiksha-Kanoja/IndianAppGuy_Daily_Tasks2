const Slide17 = (pres) => {
    let slide17 = pres.addSlide();

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

    slide17.addText(
        'Indian History',
        opts
    );


    // Info

    slide17.addText(
        'In 1990BC, the Indus Valley Civilization flourished with advanced urban planning, trade networks, and sophisticated drainage systems.',
        { x: "5%", y: "18%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide17.addText(
        'The civilization in the Indian subcontinent displayed remarkable advancements in art, science, and governance.',
        { x: "51%", y: "18%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide17.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '20%', 
        w: '0', 
        h: 1, 
        line: { color: '0000ff', width:3 } 
    });

    slide17.addShape(pres.shapes.LINE, { 
        x: '50%', 
        y: '20%', 
        w: '0', 
        h: 1, 
        line: { color: '0000ff', width:3 } 
    });


    // Info

    slide17.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "5%", y: "47%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000' ,fontFace: 'Inter'}
    )

    slide17.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "51%", y: "47%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide17.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '47%', 
        w: '0', 
        h: 1, 
        line: { color: '0000ff', width:3 } 
    });

    slide17.addShape(pres.shapes.LINE, { 
        x: '50%', 
        y: '47%', 
        w: '0', 
        h: 1, 
        line: { color: '0000ff', width:3 } 
    });
}

export default Slide17