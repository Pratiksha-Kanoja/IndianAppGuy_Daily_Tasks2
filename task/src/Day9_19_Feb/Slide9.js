const Slide9 = (pres) => {
    let slide9 = pres.addSlide();

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

    slide9.addText(
        'Indian History',
        opts
    );

    slide9.addShape(pres.shapes.OVAL, { 
        x: '4.5%', 
        y: '29%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '008000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '4.5%', 
        y: '49%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '008000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '4.5%', 
        y: '69%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '008000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "30%"
    }); 

    slide9.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "50%"
    }); 
    
    slide9.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "70%"
    }); 

    // Subtitle

    slide9.addText(
        '1100BC',
        { x: "10%", y: "24%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide9.addText(
        'Cultural Development',
        { x: "10%", y: "44%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide9.addText(
        'Social Structure',
        { x: "10%", y: "64%", w: '12%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide9.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "25%", y: "24%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide9.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "25%", y: "44%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide9.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "25%", y: "64%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide9.addShape(pres.shapes.OVAL, { 
        x: '51.5%', 
        y: '29%', 
        w: '4%', 
        h: 0.4, 
        line: { color: 'ffd700', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '51.5%', 
        y: '49%', 
        w: '4%', 
        h: 0.4, 
        line: { color: 'ffd700', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '51.5%', 
        y: '69%', 
        w: '4%', 
        h: 0.4, 
        line: { color: 'ffd700', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "52%",
        y: "30%"
    }); 

    slide9.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "52%",
        y: "50%"
    }); 
    
    slide9.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "52%",
        y: "70%"
    }); 

    // Subtitle

    slide9.addText(
        'Economic Activities',
        { x: "57%", y: "24%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide9.addText(
        'Technological Advancements',
        { x: "57%", y: "44%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide9.addText(
        'Religious Practices',
        { x: "57%", y: "64%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide9.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "73%", y: "24%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide9.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "73%", y: "44%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide9.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "73%", y: "64%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )
}

export default Slide9