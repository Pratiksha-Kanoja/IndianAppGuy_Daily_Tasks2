import React from 'react'

const NinthSlide = (pres) => {
    let slide9 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide9.addText(
        'Indian History of 2023',
        opts
    );

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '3.8%', 
        y: '24.8%', 
        w: '30%', 
        h: 2.28, 
        line: { color: '000000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "40%",
        w: "29.8%",
        x: "4%",
        y: "25%",
        border:{ fill:"000000",Weight:10}
        // line: '000000',
        // linSize: 5
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '33.8%', 
        y: '24.8%', 
        w: '30%', 
        h: 2.28, 
        line: { color: '000000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });
    
    slide9.addImage({
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg",
        h: "40%",
        w: "29.8%",
        x: "34%",
        y: "25%"
    });

    slide9.addShape(pres.shapes.RECTANGLE, { 
        x: '63.8%', 
        y: '24.8%', 
        w: '30%', 
        h: 2.28, 
        line: { color: '000000', width: 1 } , 
        fill: { color: 'ffffff' } 
    });

    slide9.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "40%",
        w: "29.8%",
        x: "64%",
        y: "25%"
    });

    slide9.addText(
        "Cultural Diversity",
        { x: "3%", y: "13%", w: '70%', h: 1, fontSize: 14, color: '#000000',bold:true }
    )

    slide9.addText(
        "Technology Advancements",
        { x: "33%", y: "13%", w: '70%', h: 1, fontSize: 14, color: '#000000',bold:true }
    )

    slide9.addText(
        "Economic Growth",
        { x: "63%", y: "13%", w: '70%', h: 1, fontSize: 14, color: '#000000',bold:true }
    )

    slide9.addText(
        "Exploring the rich tapestry of languages, traditions and art forms across India",
        { x: "4%", y: "65%", w: '25%', h: 1, fontSize: 11, color: '#000000' }
    )

    slide9.addText(
        "Showing the evolution of AI, space exploration, and digital innovation in India",
        { x: "34%", y: "65%", w: '25%', h: 1, fontSize: 11, color: '#000000' }
    )

    slide9.addText(
        "Highlighting the rapid growth of technology and innovation in various sectors of the indian economy",
        { x: "64%", y: "65%", w: '25%', h: 1, fontSize: 11, color: '#000000' }
    )
}

export default NinthSlide