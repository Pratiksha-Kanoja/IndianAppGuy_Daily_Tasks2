const Slide12 = (pres) => {
    let slide12 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide12.addText(
        'Indian History',
        opts
    );

    slide12.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide12.addShape(pres.shapes.RECTANGLE, { 
        x: '27%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide12.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide12.addShape(pres.shapes.RECTANGLE, { 
        x: '73%', 
        y: '25%', 
        w: '21%', 
        h: 3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide12.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "28%"
    }); 

    slide12.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "28%",
        y: "28%"
    }); 

    slide12.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51%",
        y: "28%"
    }); 

    slide12.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "74%",
        y: "28%"
    }); 

    // Subtitle

    slide12.addText(
        '1100BC',
        { x: "4%", y: "28%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide12.addText(
        'Cultural Development',
        { x: "27%", y: "28%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide12.addText(
        'Economic Activities',
        { x: "50%", y: "28%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide12.addText(
        'Technological Advancements',
        { x: "73%", y: "30%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide12.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "4%", y: "45%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide12.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "27%", y: "45%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide12.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "50%", y: "45%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide12.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "73%", y: "45%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

}

export default Slide12