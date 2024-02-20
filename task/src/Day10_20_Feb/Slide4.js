const Slide4 = (pres) => {
    let slide4 = pres.addSlide();

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

    slide4.addText(
        'Indian History',
        opts
    );

    slide4.addShape(pres.shapes.LINE, { 
        x: '0%', 
        y: '30.5%', 
        w: '100%', 
        h: 0, 
        line: { color: '#7d7bec', width: 2 } 
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '11.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#7d7bec', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '34.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#7d7bec', width: 2 } , 
        fill: { color: 'ffffff' }  
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '57.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#7d7bec', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '80.5%', 
        y: '27%', 
        w: '4%', 
        h: 0.4, 
        line: { color: '#7d7bec', width: 2 } , 
        fill: { color: 'ffffff' } 
    });

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "12%",
        y: "28%"
    }); 

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "35%",
        y: "28%"
    }); 

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "58%",
        y: "28%"
    }); 

    slide4.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "81%",
        y: "28%"
    }); 

    // Info

    slide4.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "4%", y: "38%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide4.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "27%", y: "38%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide4.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "50%", y: "41%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide4.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "73%", y: "41%", w: '20%', h: 1, align: 'center', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
    

}

export default Slide4