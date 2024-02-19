const Slide13 = (pres) => {
    let slide13 = pres.addSlide();

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

    slide13.addText(
        'Indian History',
        opts
    );

    slide13.addShape(pres.shapes.OVAL, { 
        x: '11.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide13.addShape(pres.shapes.OVAL, { 
        x: '34.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#7d7bec', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide13.addShape(pres.shapes.OVAL, { 
        x: '57.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#FFFF00', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide13.addShape(pres.shapes.OVAL, { 
        x: '80.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#f48337', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide13.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "12%",
        y: "28%"
    }); 

    slide13.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "35%",
        y: "28%"
    }); 

    slide13.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "58%",
        y: "28%"
    }); 

    slide13.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "81%",
        y: "28%"
    }); 

    // Subtitle

    slide13.addText(
        '1100BC',
        { x: "6%", y: "35%", w: '15%', h: 1, align: 'center', fontSize: 14, color: '0000ff',bold:true }
    )

    slide13.addText(
        'Cultural Development',
        { x: "29%", y: "35%", w: '15%', h: 1, align: 'center', fontSize: 14, color: '0000ff',bold:true }
    )

    slide13.addText(
        'Economic Activities',
        { x: "52%", y: "35%", w: '15%', h: 1, align: 'center', fontSize: 14, color: '0000ff',bold:true }
    )

    slide13.addText(
        'Technological Advancements',
        { x: "75%", y: "35%", w: '15%', h: 1, align: 'center', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide13.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "4%", y: "52%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000' }
    )

    slide13.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "27%", y: "52%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000' }
    )

    slide13.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "50%", y: "55%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000' }
    )

    slide13.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "73%", y: "55%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000' }
    )
    

}

export default Slide13