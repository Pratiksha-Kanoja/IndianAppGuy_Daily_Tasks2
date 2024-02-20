const Slide2 = (pres) => {
    let slide2 = pres.addSlide();

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

    slide2.addText(
        'Indian History',
        opts
    );

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '43%', 
        h: 1.85, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '20%', 
        w: '43%', 
        h: 1.85, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide2.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5.5%",
        y: "23%"
    }); 

    slide2.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51.5%",
        y: "23%"
    }); 

    // Info

    slide2.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "5%", y: "26%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide2.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "51%", y: "26%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '55%', 
        w: '43%', 
        h: 1.85, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '55%', 
        w: '43%', 
        h: 1.85, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide2.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5.5%",
        y: "58%"
    }); 

    slide2.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51.5%",
        y: "58%"
    }); 

    // Info

    slide2.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "5%", y: "63%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide2.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "51%", y: "63%", w: '40%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
}

export default Slide2