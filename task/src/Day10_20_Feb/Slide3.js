const Slide3 = (pres) => {
    let slide3 = pres.addSlide();

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

    slide3.addText(
        'Indian History',
        opts
    );

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "25%"
    }); 

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "43%"
    }); 
    
    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "61%"
    }); 

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "79%"
    }); 


    slide3.addShape(pres.shapes.OVAL, { x: '15%', y: '27%', w: '1%', h: 0.1, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });
    slide3.addShape(pres.shapes.OVAL, { x: '15%', y: '45%', w: '1%', h: 0.1, line: { color: '#7d7bec', width: 1 } , fill: { color: '#7d7bec' } });
    slide3.addShape(pres.shapes.OVAL, { x: '15%', y: '63%', w: '1%', h: 0.1, line: { color: '#FFFF00', width: 1 } , fill: { color: '#FFFF00' } });
    slide3.addShape(pres.shapes.OVAL, { x: '15%', y: '81%', w: '1%', h: 0.1, line: { color: '#f48337', width: 1 } , fill: { color: '#f48337' } });

    // Info

    slide3.addText(
        "The history of India in 1990 BC dates back to the Indus Valley Civilization, one of the world's oldest urban civilizations.",
        { x: "20%", y: "19%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        "Trade with Mesopotamia flourished during this period, evidenced by artifacts found in both regions.",
        { x: "20%", y: "37%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        'Agriculture and metallurgy were advanced in the Indian subcontinent, with evidence of sophisticated urban planning and drainage systems.',
        { x: "20%", y: "55%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        "Religious practices such as early forms of Hinduism and Buddhism began to emerge, shaping the spiritual landscape of the region.",
        { x: "20%", y: "73%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide3