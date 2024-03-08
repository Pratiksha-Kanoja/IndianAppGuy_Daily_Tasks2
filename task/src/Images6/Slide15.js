const Slide15 = (pres) => {
    let slide15 = pres.addSlide();

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

    slide15.addText(
        'Indian History',
        opts
    );

    slide15.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '90%', 
        h: 4, 
        line: { color: '000000', width: 2} , 
        fill: { color: 'ffffff' } 
    });

    slide15.addShape(pres.shapes.LINE, { 
        x: '48%', 
        y: '20%', 
        w: '0', 
        h: 4, 
        line: { color: '000000', width:2 } 
    });

    slide15.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '43%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width:2 } 
    });

    slide15.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '68%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width:2 } 
    });



    // Subtitle

    slide15.addText(
        '1100BC',
        { x: "6%", y: "22%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        'Cultural Development',
        { x: "6%", y: "44%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true ,fontFace: 'League Spartan'}
    )

    slide15.addText(
        'Social Structure',
        { x: "6%", y: "70%", w: '12%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide15.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "20%", y: "22%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide15.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "20%", y: "44%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide15.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "20%", y: "70%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )


    // Subtitle

    slide15.addText(
        'Economic Activities',
        { x: "50%", y: "22%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        'Technological Advancements',
        { x: "50%", y: "44%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        'Religious Practices',
        { x: "50%", y: "70%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide15.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "64%", y: "22%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide15.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "64%", y: "44%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide15.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "64%", y: "70%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace: 'Inter' }
    )
}

export default Slide15