const Slide1 = (pres) => {
    let slide1 = pres.addSlide();

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

    slide1.addText(
        'Indian History of 2023',
        opts
    );

    slide1.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: '#0000FF' } 
    });

    slide1.addShape(pres.shapes.RECTANGLE, { 
        x: '27%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '#7d7bec', width: 1 } , 
        fill: { color: '#7d7bec' } 
    });

    slide1.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '#FFFF00', width: 1 } , 
        fill: { color: '#FFFF00' } 
    });

    slide1.addShape(pres.shapes.RECTANGLE, { 
        x: '73%', 
        y: '25%', 
        w: '23%', 
        h: 2.3, 
        line: { color: '#f48337', width: 1 } , 
        fill: { color: '#f48337' } 
    });


    //Subtitle
    slide1.addText(
        '1.5%',
        { x: "11%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: 'ffffff',bold:true }
    )
    slide1.addText(
        '7%',
        { x: "36%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide1.addText(
        '3',
        { x: "60%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )
    slide1.addText(
        '5',
        { x: "83%", y: "28%", w: '100%', h: 1, align: 'Left', fontSize: 20, color: 'ffffff',bold:true }
    )

    //Info
    slide1.addText(
        'Population Growth',
        { x: "8%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: 'ffffff' }
    )
    slide1.addText(
        'GDP Growth%',
        { x: "33%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide1.addText(
        'Major Events',
        { x: "56%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: '000000' }
    )
    slide1.addText(
        'New Government Policies',
        { x: "75%", y: "52%", w: '100%', h: 1, align: 'Left', fontSize: 12, color: 'ffffff' }
    )
}

export default Slide1