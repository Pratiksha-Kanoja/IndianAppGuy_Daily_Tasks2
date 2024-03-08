const Slide4 = (pres) => {
    let slide4 = pres.addSlide();

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

    slide4.addText(
        'Indian History',
        opts
    );

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '46%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '20%', 
        w: '46%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "25%"
    }); 

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51%",
        y: "25%"
    }); 

    // Subtitle

    slide4.addText(
        '1990BC',
        { x: "9%", y: "18%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true ,fontFace: 'League Spartan' }
    )

    slide4.addText(
        'Cultural Development',
        { x: "55%", y: "18%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true ,fontFace: 'League Spartan' }
    )

    // Info

    slide4.addText(
        'In 1990BC, the Indus Valley Civilization flourished with advanced urban planning, trade networks, and sophisticated drainage systems.',
        { x: "9%", y: "28%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide4.addText(
        'The civilization in the Indian subcontinent displayed remarkable advancements in art, science, and governance.',
        { x: "55%", y: "28%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '55%', 
        w: '46%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '55%', 
        w: '46%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "60%"
    }); 

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51%",
        y: "60%"
    }); 


    // Subtitle

    slide4.addText(
        'Economic Activities',
        { x: "9%", y: "53%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan'}
    )

    slide4.addText(
        'Technological Advancements',
        { x: "55%", y: "53%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide4.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "9%", y: "65%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide4.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "55%", y: "65%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )
}

export default Slide4