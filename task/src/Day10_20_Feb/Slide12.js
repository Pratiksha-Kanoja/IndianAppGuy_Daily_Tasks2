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
        bold:true,
        fontFace: 'League Spartan'
    };

    slide12.addText(
        'Indian History',
        opts
    );

    slide12.addShape(pres.shapes.OVAL, { 
        x: '4%', 
        y: '23%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide12.addShape(pres.shapes.OVAL, { 
        x: '4%', 
        y: '48%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' }  
    });

    slide12.addShape(pres.shapes.OVAL, { 
        x: '4%', 
        y: '73%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    // Number

    slide12.addText(
        "1"
        ,
        { x: "4.5%", y: "17.5%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold: true, fontFace: 'League Spartan' }
    )

    slide12.addText(
        "2",
        { x: "4.5%", y: "42.5%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold: true, fontFace: 'League Spartan' }
    )

    slide12.addText(
        "3",
        { x: "4.5%", y: "67.5%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold: true, fontFace: 'League Spartan' }
    )


    // Info

    slide12.addText(
        "1999 witnessed the rise of internet usage in India, with the launch of new tech companies and increased connectivity, laying the foundation for the digital revolution."
        ,
        { x: "10%", y: "18%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide12.addText(
        "The Indian economy in 1999 experienced growth in various sectors, including IT, telecommunications, and manufacturing, contributing to the country's economic progress.",
        { x: "10%", y: "43%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide12.addText(
        "1999 marked significant cultural events in India, such as the release of iconic Bollywood movies and the celebration of traditional festivals, showcasing the rich cultural heritage of the nation.",
        { x: "10%", y: "68%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000' ,fontFace:'Inter'}
    )

    // NumberShape

    slide12.addShape(pres.shapes.OVAL, { 
        x: '51%', 
        y: '23%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide12.addShape(pres.shapes.OVAL, { 
        x: '51%', 
        y: '48%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' }  
    });

    slide12.addShape(pres.shapes.OVAL, { 
        x: '51%', 
        y: '73%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '0000ff', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    // Number

    slide12.addText(
        "4"
        ,
        { x: "51.5%", y: "17.5%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold: true,fontFace: 'League Spartan' }
    )

    slide12.addText(
        "5",
        { x: "51.5%", y: "42.5%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold: true,fontFace: 'League Spartan' }
    )

    slide12.addText(
        "6",
        { x: "51.5%", y: "67.5%", w: '35%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold: true,fontFace: 'League Spartan' }
    )
    
    // Info

    slide12.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "57%", y: "18%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide12.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "57%", y: "42%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide12.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "57%", y: "66%", w: '35%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
}

export default Slide12