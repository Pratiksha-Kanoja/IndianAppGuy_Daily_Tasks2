const Slide7 = (pres) => {
    let slide7 = pres.addSlide();

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

    slide7.addText(
        'Indian History',
        opts
    );

    slide7.addShape(pres.shapes.OVAL, { 
        x: '10.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6,  
        line: { color: '0000ff', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.OVAL, { 
        x: '33.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '#7d7bec', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.OVAL, { 
        x: '56.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6,  
        line: { color: '#FFFF00', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addShape(pres.shapes.OVAL, { 
        x: '79.5%', 
        y: '27%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '#f48337', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide7.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "12%",
        y: "29.8%"
    }); 

    slide7.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "35%",
        y: "29.8%"
    }); 

    slide7.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "58%",
        y: "29.8%"
    }); 

    slide7.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "81%",
        y: "29.8%"
    }); 


    // Info

    slide7.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "4%", y: "42%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide7.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "27%", y: "42%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide7.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "50%", y: "45%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide7.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "73%", y: "45%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
    

}

export default Slide7