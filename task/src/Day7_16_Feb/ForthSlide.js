const ForthSlide = (pres) => {
    let slide4 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "3%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide4.addText(
        'Indian History',
        opts
    );

    //Images    
    slide4.addImage({
        path: "https://static.vecteezy.com/system/resources/thumbnails/000/376/259/small/Basic_Elements__28121_29.jpg",
        h: "4%",
        w: "3%",
        x: "4%",
        y: "22%"
    });

    slide4.addImage({
        path: "https://cdn-icons-png.flaticon.com/512/43/43165.png",
        h: "4%",
        w: "3%",
        x: "52%",
        y: "22%"
    });

    //Subtitle
    slide4.addText(
        'Pros',
        { x: "8%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    slide4.addText(
        'Cons',
        { x: "56%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    // Horizontal Line

    slide4.addShape(pres.shapes.LINE, { x: '4%', y: '28%', w: '43%', h: 0, line: { color: '000000', width: 2 } });

    slide4.addShape(pres.shapes.LINE, { x: '51%', y: '28%', w: '43%', h: 0, line: { color: '000000', width: 2 } });


    //Pros info

    slide4.addShape(pres.shapes.OVAL, { x: '6%', y: '32%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide4.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "8%", y: "25%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide4.addShape(pres.shapes.OVAL, { x: '6%', y: '42%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide4.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "35%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide4.addShape(pres.shapes.OVAL, { x: '6%', y: '52%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide4.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "45%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    //Cons info

    slide4.addShape(pres.shapes.OVAL, { x: '54%', y: '32%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide4.addText(
        'Challenges in border security due to ongoing territorial disputes with neighboring countries.',
        { x: "56%", y: "25%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide4.addShape(pres.shapes.OVAL, { x: '54%', y: '42%', w: '0.5%', h: 0.05, line: { color: '000000', width: 1 } , fill: { color: '000000' } });

    slide4.addText(
        'Budget constraints impacting the pace of infrastructure development and capacity building.',
        { x: "56%", y: "35%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )
}

export default ForthSlide;