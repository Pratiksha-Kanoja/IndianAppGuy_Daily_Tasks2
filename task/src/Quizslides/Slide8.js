const Slide8 = (pres) => {
    let slide8 = pres.addSlide();
    slide8.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    let opts = {
        x: "0%",
        y: "30%",
        w: '100%',
        h: 1,
        align: 'center',
        fontSize: 100,
        color: '#7EAD71',
        bold:true,
        fontFace: 'League Spartan'
    };

    slide8.addText(
        'Great work!',
        opts
    );

    slide8.addText(
        'Turn in your quiz paper in the bin.',
        {x: "30%",y: "50%",w: '38%',h: 1,align: 'center',color: '#7EAD71',fontFace: 'League Spartan',bold:true,fontSize: 25}
    );
}

export default Slide8