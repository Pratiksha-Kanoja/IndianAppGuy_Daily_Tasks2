const Slide14 = (pres) => {
    let slide14 = pres.addSlide();

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

    slide14.addText(
        'Indian History',
        opts
    );

    // Info

    slide14.addText(
        '1999 witnessed the rise of internet usage in India, with the launch of new tech companies and increased connectivity, laying the foundation for the digital revolution.',
        { x: "4%", y: "25%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        "The Indian economy in 1999 experienced growth in various sectors, including IT, telecommunications, and manufacturing, contributing to the country's economic progress.",
        { x: "34%", y: "25%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        "1999 marked significant cultural events in India, such as the release of iconic Bollywood movies and the celebration of traditional festivals, showcasing the rich cultural heritage of the nation. ",
        { x: "64%", y: "25%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    //Horizontal line
    slide14.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '50%', 
        w: '27%', 
        h: 0, 
        line: { color: '0000ff', width: 3 } 
    });

    slide14.addShape(pres.shapes.LINE, { 
        x: '35%', 
        y: '50%', 
        w: '27%', 
        h: 0, 
        line: { color: '#FFFF00', width: 3 } 
    });

    slide14.addShape(pres.shapes.LINE, { 
        x: '66%', 
        y: '50%', 
        w: '27%', 
        h: 0, 
        line: { color: '#7d7bec', width: 3 } 
    });

    

    // Info

    slide14.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "4%", y: "60%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "34%", y: "60%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide14.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "64%", y: "60%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    //Horizontal line
    slide14.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '85%', 
        w: '27%', 
        h: 0, 
        line: { color: '#FFFF00', width: 3 } 
    });

    slide14.addShape(pres.shapes.LINE, { 
        x: '35%', 
        y: '85%', 
        w: '27%', 
        h: 0, 
        line: { color: '#7d7bec', width: 3 } 
    });

    slide14.addShape(pres.shapes.LINE, { 
        x: '66%', 
        y: '85%', 
        w: '27%', 
        h: 0, 
        line: { color: '#f48337', width: 3 } 
    });
}

export default Slide14