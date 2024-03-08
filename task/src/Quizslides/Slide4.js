import React from 'react'

const Slide4 = (pres) => {
    let slide4 = pres.addSlide();

    slide4.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    slide4.addText(
        'Which of the photos below shows a canyon?',
        { x: "25%", y: "15%", w: '50%', h: 1, fontSize: 30, color: '#737373',fontFace: 'Now',align:'center' }
    )

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '4%', 
        y: '40%', 
        w: '22%', 
        h: 2.7, 
        fill: { color: '#F2F1EB' } 
    });

    slide4.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "36%",
        w: "20%",
        x: "5%",
        y: "42%"
    }); 

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '27%', 
        y: '40%', 
        w: '22%', 
        h: 2.7, 
        fill: { color: '#F2F1EB' } 
    });

    slide4.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "36%",
        w: "20%",
        x: "28%",
        y: "42%"
    }); 

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '50%', 
        y: '40%', 
        w: '22%', 
        h: 2.7, 
        fill: { color: '#F2F1EB' } 
    });

    slide4.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "36%",
        w: "20%",
        x: "51%",
        y: "42%"
    }); 

    slide4.addShape(pres.shapes.RECTANGLE, { 
        x: '73%', 
        y: '40%', 
        w: '22%', 
        h: 2.7, 
        fill: { color: '#F2F1EB' } 
    });

    slide4.addImage({
        path: "https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
        h: "36%",
        w: "20%",
        x: "74%",
        y: "42%"
    }); 

    slide4.addShape(pres.shapes.OVAL, { 
        x: '12%', 
        y: '73%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '35%', 
        y: '73%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '58%', 
        y: '73%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide4.addShape(pres.shapes.OVAL, { 
        x: '81%', 
        y: '73%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#FFE472' } 
    });

    slide4.addText(
        'A',
        { x: "12.5%", y: "69%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide4.addText(
        'B',
        { x: "35.5%", y: "69%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide4.addText(
        'C',
        { x: "58.5%", y: "69%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide4.addText(
        'D',
        { x: "81.5%", y: "69%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

}

export default Slide4