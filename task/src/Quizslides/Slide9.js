const Slide9 = (pres) => {
    let slide9 = pres.addSlide();
    slide9.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    let opts = {
        x: "0%",
        y: "5%",
        w: '100%',
        h: 1,
        align: 'center',
        fontSize: 70,
        color: '#7EAD71',
        bold:true,
        fontFace: 'League Spartan'
    };

    slide9.addText(
        'Answer Key',
        opts
    );

    slide9.addText(
        'Question 1:',
        {x: "8%",y: "30%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 2:',
        {x: "8%",y: "43%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 3:',
        {x: "8%",y: "56%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 4:',
        {x: "8%",y: "69%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 5:',
        {x: "50%",y: "30%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 6:',
        {x: "50%",y: "43%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 7:',
        {x: "50%",y: "56%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addText(
        'Question 8:',
        {x: "50%",y: "69%",w: '20%',h: 1,color: '#737373',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );

    slide9.addShape(pres.shapes.OVAL, { 
        x: '28%', 
        y: '33%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '28%', 
        y: '46%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '28%', 
        y: '59%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '28%', 
        y: '72%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '70%', 
        y: '33%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '70%', 
        y: '46%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '70%', 
        y: '59%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addShape(pres.shapes.OVAL, { 
        x: '70%', 
        y: '72%', 
        w: '6%', 
        h: 0.6, 
        fill: { color: '#A2CF96' } 
    });

    slide9.addText(
        'C',
        { x: "28.5%", y: "29.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'D',
        { x: "28.5%", y: "42.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'C',
        { x: "28.5%", y: "55.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'B',
        { x: "28.5%", y: "68.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'C',
        { x: "70.5%", y: "29.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'D',
        { x: "70.5%", y: "42.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'C',
        { x: "70.5%", y: "55.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )

    slide9.addText(
        'B',
        { x: "70.5%", y: "68.5%", w: '50%', h: 1, fontSize: 35, color: 'ffffff',fontFace: 'League Spartan',bold:true }
    )
}

export default Slide9