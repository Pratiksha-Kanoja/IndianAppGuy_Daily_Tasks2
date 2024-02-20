const Slide8 = (pres) => {
    let slide8 = pres.addSlide();

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

    slide8.addText(
        'Indian History',
        opts
    );

    slide8.addShape(pres.shapes.LINE, { 
        x: '5%', 
        y: '20%', 
        w: '0', 
        h: 4, 
        line: { color: '000000', width: 1,dashType: 'dot' } 
    });

    slide8.addShape(pres.shapes.OVAL, { x: '4.5%', y: '27%', w: '1%', h: 0.1, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });
    slide8.addShape(pres.shapes.OVAL, { x: '4.5%', y: '45%', w: '1%', h: 0.1, line: { color: '#7d7bec', width: 1 } , fill: { color: '#7d7bec' } });
    slide8.addShape(pres.shapes.OVAL, { x: '4.5%', y: '63%', w: '1%', h: 0.1, line: { color: '#FFFF00', width: 1 } , fill: { color: '#FFFF00' } });
    slide8.addShape(pres.shapes.OVAL, { x: '4.5%', y: '81%', w: '1%', h: 0.1, line: { color: '#f48337', width: 1 } , fill: { color: '#f48337' } });

    // Horizontal line

    slide8.addShape(pres.shapes.LINE, { 
        x: '4.5%', 
        y: '28%', 
        w: '5%', 
        h: 0, 
        line: { color: '0000ff', width: 2 } 
    });

    slide8.addShape(pres.shapes.LINE, { 
        x: '4.5%', 
        y: '46%', 
        w: '5%', 
        h: 0, 
        line: { color: '#7d7bec', width: 2 } 
    });

    slide8.addShape(pres.shapes.LINE, { 
        x: '4.5%', 
        y: '64%', 
        w: '5%', 
        h: 0, 
        line: { color: '#FFFF00', width: 2 } 
    });

    slide8.addShape(pres.shapes.LINE, { 
        x: '4.5%', 
        y: '82%', 
        w: '5%', 
        h: 0, 
        line: { color: '#f48337', width: 2 } 
    });

    // Subtitle

    slide8.addText(
        "Technological Advancements",
        { x: "11%", y: "19%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    )

    slide8.addText(
        "Economic Developments",
        { x: "11%", y: "37%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    )

    slide8.addText(
        'Cultural Milestones',
        { x: "11%", y: "55%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    )

    slide8.addText(
        "Political Landscape",
        { x: "11%", y: "73%", w: '20%', h: 1, align: 'Left', fontSize: 14, color: '000000',fontFace: 'League Spartan',bold:true }
    )

    // Info

    slide8.addText(
        "1999 witnessed the rise of internet usage in India, with the launch of new tech companies and increased connectivity, laying the foundation for the digital revolution.",
        { x: "35%", y: "19%", w: '50%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide8.addText(
        "The Indian economy in 1999 experienced growth in various sectors, including IT, telecommunications, and manufacturing, contributing to the country's economic progress.",
        { x: "35%", y: "37%", w: '50%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide8.addText(
        '1999 marked significant cultural events in India, such as the release of iconic Bollywood movies and the celebration of traditional festivals, showcasing the rich cultural heritage of the nation.',
        { x: "35%", y: "55%", w: '50%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide8.addText(
        "The political landscape in 1999 was characterized by key events like elections and policy reforms, shaping the governance and direction of the country during that period.",
        { x: "35%", y: "73%", w: '50%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide8