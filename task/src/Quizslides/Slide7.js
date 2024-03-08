const Slide7 = (pres) => {
    let Slide7 = pres.addSlide();

    Slide7.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    Slide7.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '20%', 
        w: '29%', 
        h: 3.5, 
        fill: { color: 'ffffff' } 
    });

    Slide7.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "46%",
        w: "27%",
        x: "5%",
        y: "22%"
    }); 
    
    Slide7.addText(
        'What type of landform is in this photo?',
        { x: "38%", y: "12%", w: '70%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now' }
    )

    Slide7.addShape(pres.shapes.OVAL, { 
        x: '38%', 
        y: '35%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    Slide7.addShape(pres.shapes.OVAL, { 
        x: '38%', 
        y: '50%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    Slide7.addShape(pres.shapes.OVAL, { 
        x: '38%', 
        y: '65%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    Slide7.addShape(pres.shapes.OVAL, { 
        x: '38%', 
        y: '80%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    Slide7.addText(
        'A',
        { x: "38.5%", y: "31.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    Slide7.addText(
        'C',
        { x: "38.5%", y: "46.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    Slide7.addText(
        'B',
        { x: "38.5%", y: "61.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    Slide7.addText(
        'D',
        { x: "38.5%", y: "76.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    Slide7.addText(
        'Dr. Rajendra Prasad',
        { x: "45%", y: "31.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    Slide7.addText(
        'Jawaharlal Nehru',
        { x: "45%", y: "46.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    Slide7.addText(
        'Sardar Vallabhbhai Patel',
        { x: "45%", y: "61.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    Slide7.addText(
        'Indira Gandhi',
        { x: "45%", y: "76.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )
}

export default Slide7