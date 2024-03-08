const Slide5 = (pres) => {
    let slide5 = pres.addSlide();

    slide5.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    slide5.addText(
        'A                       is a piece of land that rises higher than everything surrounding it.',
        { x: "10%", y: "15%", w: '90%', h: 1, fontSize: 30, color: '#737373',fontFace: 'Now',align:'Left' }
    )

    slide5.addShape(pres.shapes.ROUNDED_RECTANGLE, {x: '15%', y: '15%', w: "18%", h: "9%", fill: {color: "#FFE472"},radius: 0.3});

    slide5.addShape(pres.shapes.OVAL, { 
        x: '26%', 
        y: '45%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    slide5.addShape(pres.shapes.OVAL, { 
        x: '54%', 
        y: '45%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    slide5.addShape(pres.shapes.OVAL, { 
        x: '26%', 
        y: '60%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    slide5.addShape(pres.shapes.OVAL, { 
        x: '54%', 
        y: '60%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#AADCEB' } 
    });

    slide5.addText(
        'A',
        { x: "26.5%", y: "41.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide5.addText(
        'C',
        { x: "54.5%", y: "41.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide5.addText(
        'B',
        { x: "26.5%", y: "56.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide5.addText(
        'D',
        { x: "54.5%", y: "56.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )
    
    slide5.addText(
        'island',
        { x: "33%", y: "41.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide5.addText(
        'valley',
        { x: "61%", y: "41.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide5.addText(
        'mountain',
        { x: "33%", y: "56.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )

    slide5.addText(
        'hill',
        { x: "61%", y: "56.5%", w: '50%', h: 1, fontSize: 25, color: '#737373',fontFace: 'Now'}
    )
}

export default Slide5