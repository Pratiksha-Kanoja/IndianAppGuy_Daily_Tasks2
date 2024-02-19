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
        bold:true
    };

    slide11.addText(
        'Indian History',
        opts
    );

    slide11.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '43%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide11.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '20%', 
        w: '43%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide11.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "25%"
    }); 

    slide11.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51%",
        y: "25%"
    }); 

    // Subtitle

    slide11.addText(
        '1990BC',
        { x: "9%", y: "18%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide11.addText(
        'Cultural Development',
        { x: "55%", y: "18%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide11.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "9%", y: "28%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide11.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "55%", y: "28%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide11.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '55%', 
        w: '43%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide11.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '55%', 
        w: '43%', 
        h: 1.8, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide11.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "60%"
    }); 

    slide11.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51%",
        y: "60%"
    }); 


    // Subtitle

    slide11.addText(
        'Economic Activities',
        { x: "9%", y: "53%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide11.addText(
        'Technological Advancements',
        { x: "55%", y: "53%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide11.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "9%", y: "65%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide11.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "55%", y: "65%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )
}

export default Slide11