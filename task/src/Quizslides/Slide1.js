const Slide1 = (pres) => {
    let slide1 = pres.addSlide();
    slide1.addShape(pres.shapes.RECTANGLE, {x: 0, y: 0, w: "100%", h: "100%", fill: {color: "#D0EBC8"}});

    let opts = {
        x: "0%",
        y: "30%",
        w: '100%',
        h: 1,
        align: 'center',
        fontSize: 130,
        color: '#8FC481',
        bold:true,
        fontFace: 'League Spartan'
    };

    slide1.addText(
        'Quiz Time',
        opts
    );

    slide1.addText(
        'Time to test your knowledge!',
        {x: "0%",y: "50%",w: '100%',h: 1,align: 'center',color: '#7EAD71',fontFace: 'League Spartan',bold:true,fontSize: 20}
    );
}

export default Slide1