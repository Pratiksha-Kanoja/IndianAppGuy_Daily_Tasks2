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

    slide3.addShape(pres.shapes.OVAL, { 
        x: '14.5%', 
        y: '18%', 
        w: '5%', 
        h: 0.5,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.OVAL, { 
        x: '46.5%', 
        y: '18%', 
        w: '5%', 
        h: 0.5, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.OVAL, { 
        x: '76.5%', 
        y: '18%', 
        w: '5%', 
        h: 0.5,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });


    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "15.5%",
        y: "20%"
    }); 

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "47.5%",
        y: "20%"
    }); 

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "77.5%",
        y: "20%"
    }); 



    // Info

    slide3.addText(
        '1999 witnessed the rise of internet usage in India, with the launch of new tech companies and increased connectivity, laying the foundation for the digital revolution.',
        { x: "6%", y: "29%", w: '25%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        "The Indian economy in 1999 experienced growth in various sectors, including IT, telecommunications, and manufacturing, contributing to the country's economic progress.",
        { x: "37%", y: "29%", w: '25%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        '1999 marked significant cultural events in India, such as the release of iconic Bollywood movies and the celebration of traditional festivals, showcasing the rich cultural heritage of the nation. ',
        { x: "67%", y: "29%", w: '25%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
    
    slide3.addShape(pres.shapes.OVAL, { 
        x: '14.5%', 
        y: '54%', 
        w: '5%', 
        h: 0.5,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.OVAL, { 
        x: '46.5%', 
        y: '54%', 
        w: '5%', 
        h: 0.5, 
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide3.addShape(pres.shapes.OVAL, { 
        x: '76.5%', 
        y: '54%', 
        w: '5%', 
        h: 0.5,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });


   
    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "15.5%",
        y: "56%"
    }); 

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "47.5%",
        y: "56%"
    }); 

    slide3.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "77.5%",
        y: "56%"
    }); 

    // Info

    slide3.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "6%", y: "65%", w: '25%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "37%", y: "65%", w: '25%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide3.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "67%", y: "65%", w: '25%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
}

export default Slide3