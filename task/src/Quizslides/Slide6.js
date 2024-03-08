const Slide6 = (pres) => {
    let slide6 = pres.addSlide();

    slide6.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    slide6.addText(
        'What type of landform is in this photo?',
        { x: "8%", y: "12%", w: '46%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now' }
    )

    slide6.addShape(pres.shapes.OVAL, { 
        x: '8%', 
        y: '35%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide6.addShape(pres.shapes.OVAL, { 
        x: '8%', 
        y: '50%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide6.addShape(pres.shapes.OVAL, { 
        x: '8%', 
        y: '65%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide6.addShape(pres.shapes.OVAL, { 
        x: '8%', 
        y: '80%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide6.addText(
        'A',
        { x: "8.5%", y: "31.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide6.addText(
        'C',
        { x: "8.5%", y: "46.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide6.addText(
        'B',
        { x: "8.5%", y: "61.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide6.addText(
        'D',
        { x: "8.5%", y: "76.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )
    
    slide6.addText(
        'Dr. Rajendra Prasad',
        { x: "15%", y: "31.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide6.addText(
        'Jawaharlal Nehru',
        { x: "15%", y: "46.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide6.addText(
        'Sardar Vallabhbhai Patel',
        { x: "15%", y: "61.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide6.addText(
        'Indira Gandhi',
        { x: "15%", y: "76.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide6.addShape(pres.shapes.RECTANGLE, { 
        x: '63%', 
        y: '12%', 
        w: '29%', 
        h: 3.5, 
        fill: { color: 'ffffff' } ,
        rotate: 10
    });

    slide6.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "52%",
        w: "27%",
        x: "64.3%",
        y: "14%",
        rotate: 10
    }); 

    //horizontal
    slide6.addShape(pres.shapes.LINE, { 
        x: '63%', 
        y: '74.1%', 
        w: '26%', 
        h: 0, 
        line: { color: '#BDBDBD', width: 1 } ,
        rotate: 10
    });

    // vertical

    slide6.addShape(pres.shapes.LINE, { 
        x: '63%', 
        y: '8%', 
        w: '0', 
        h: 3.51, 
        line: { color: '#BDBDBD', width: 1 },
        rotate: 10 
    });

    slide6.addShape(pres.shapes.RECTANGLE, { 
        x: '58%', 
        y: '20%', 
        w: '29%', 
        h: 3.5, 
        fill: { color: 'ffffff' } 
    });

    slide6.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "46%",
        w: "27%",
        x: "59%",
        y: "22%"
    }); 

    // horizontal
    slide6.addShape(pres.shapes.LINE, { 
        x: '58%', 
        y: '82.1%', 
        w: '29%', 
        h: 0, 
        line: { color: '#BDBDBD', width: 1 } 
    });

    // vertical

    slide6.addShape(pres.shapes.LINE, { 
        x: '58%', 
        y: '20%', 
        w: '0', 
        h: 3.5, 
        line: { color: '#BDBDBD', width: 1 } 
    });
}

export default Slide6