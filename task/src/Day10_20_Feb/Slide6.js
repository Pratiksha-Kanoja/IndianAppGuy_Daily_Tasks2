const Slide6 = (pres) => {
    let slide6 = pres.addSlide();

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

    slide6.addText(
        'Indian History',
        opts
    );

    // Vertical line

    slide6.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '25%', 
        w: '0', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '27%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '50%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '73%', 
        y: '25%', 
        w: '0%', 
        h: 2.32, 
        line: { color: '0000ff', width: 3 } 
    });


    slide6.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5.5%",
        y: "28%"
    }); 

    slide6.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "28.5%",
        y: "28%"
    }); 

    slide6.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51.5%",
        y: "28%"
    }); 

    slide6.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "74.5%",
        y: "28%"
    }); 

    // Info

    slide6.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "5%", y: "38%",h:1, w: '20%', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide6.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "28%", y: "38%",h:1, w: '20%', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide6.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "51%", y: "35%",h:1, w: '20%', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide6.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "74%", y: "35%",h:1, w: '20%', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide6