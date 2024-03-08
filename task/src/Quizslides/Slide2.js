const Slide2 = (pres) => {
    let slide2 = pres.addSlide();

    slide2.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '5%', 
        y: '55%', 
        w: '28%', 
        h: 2, 
        fill: { color: 'ffffff' } 
    });

    slide2.addImage({
        path: "https://media-public.canva.com/UqtSU/MAEvwFUqtSU/1/s2.png",
        h: "45%",
        w: "50%",
        x: "30%",
        y: "3%"
    }); 

    slide2.addText(
        'Directions',
        { x: "41%", y: "15%", w: '40%', h: 1, fontSize: 50, color: '#156C99',bold:true,fontFace: 'Chewy' }
    )

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '35%', 
        y: '55%', 
        w: '28%', 
        h: 2, 
        fill: { color: 'ffffff' } 
    });

    slide2.addShape(pres.shapes.RECTANGLE, { 
        x: '65%', 
        y: '55%', 
        w: '28%', 
        h: 2, 
        fill: { color: 'ffffff' } 
    });

    slide2.addText(
        'Write your name on the top of your paper.',
        { x: "7%", y: "65%", w: '25%', h: 1, align: 'center', fontSize: 23, color: '#CB7460',bold:true,fontFace: 'Now' }
    )

    slide2.addText(
        'Number your paper 1 to 8.',
        { x: "37%", y: "62%", w: '25%', h: 1, align: 'center', fontSize: 23, color: '#CB7460',bold:true,fontFace: 'Now' }
    )

    slide2.addText(
        'Stay quiet and in your seat. Raise your hand if you need anything.',
        { x: "67%", y: "67%", w: '25%', h: 1, align: 'center', fontSize: 23, color: '#CB7460',bold:true,fontFace: 'Now' }
    )

    slide2.addShape(pres.shapes.OVAL, { 
        x: '16%', 
        y: '50%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '#FECFA7', width: 1 } , 
        fill: { color: '#FECFA7' } 
    });

    slide2.addShape(pres.shapes.OVAL, { 
        x: '46%', 
        y: '50%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '#FECFA7', width: 1 } , 
        fill: { color: '#FECFA7' } 
    });

    slide2.addShape(pres.shapes.OVAL, { 
        x: '76%', 
        y: '50%', 
        w: '6%', 
        h: 0.6, 
        line: { color: '#FECFA7', width: 1 } , 
        fill: { color: '#FECFA7' } 
    });

    slide2.addText(
        '1',
        { x: "17%", y: "46.5%", w: '15%', h: 1, align: 'Left', fontSize: 30, color: 'ffffff',bold:true,fontFace: 'League Spartan' }
    )

    slide2.addText(
        '2',
        { x: "47%", y: "46.5%", w: '15%', h: 1, align: 'Left', fontSize: 30, color: 'ffffff',bold:true,fontFace: 'League Spartan' }
    )

    slide2.addText(
        '3',
        { x: "77%", y: "46.5%", w: '12%', h: 1, align: 'Left', fontSize: 30, color: 'ffffff',bold:true,fontFace: 'League Spartan' }
    )



}

export default Slide2