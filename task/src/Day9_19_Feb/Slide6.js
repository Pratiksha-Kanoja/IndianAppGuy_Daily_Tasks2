const Slide6 = (pres) => {
    let slide6 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide6.addText(
        'Indian History',
        opts
    );

    //Subtitle
    slide6.addText(
        'Development of Sanskrit',
        { x: "3%", y: "22%", w: '50%', h: 1, align: 'left', fontSize: 20, color: '000000',bold:true }
    )
    slide6.addText(
        'Indus Valley Civilization',
        { x: "3%", y: "38%", w: '50%', h: 1, align: 'left', fontSize: 20, color: '000000',bold:true }
    )
    slide6.addText(
        'Rigveda Composed',
        { x: "3%", y: "53%", w: '50%', h: 1, align: 'left', fontSize: 20, color: '000000',bold:true }
    )

    slide6.addText(
        'Bronze Age artifacts discovered',
        { x: "3%", y: "70%", w: '30%', h: 1, align: 'left', fontSize: 20, color: '000000',bold:true }
    )

    // Info

    slide6.addText(
        'Inventions',
        { x: "40%", y: "22%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#808080' }
    )
    slide6.addText(
        'Civilization',
        { x: "40%", y: "38%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#808080' }
    )
    slide6.addText(
        'Religion',
        { x: "40%", y: "53%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#808080' }
    )

    slide6.addText(
        'Artifacts',
        { x: "40%", y: "70%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#808080' }
    )
    
    //Horizontal line
    slide6.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '23%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 3 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '39%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 1 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '55%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 1 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '70%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 1 } 
    });

    slide6.addShape(pres.shapes.LINE, { 
        x: '4%', 
        y: '88%', 
        w: '90%', 
        h: 0, 
        line: { color: '000000', width: 3 } 
    });

}

export default Slide6