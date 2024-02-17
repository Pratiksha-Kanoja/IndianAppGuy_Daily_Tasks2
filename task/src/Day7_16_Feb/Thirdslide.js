import React from 'react'

const Thirdslide = (pres) => {
    let slide3 = pres.addSlide();

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

    slide3.addText(
        'Indian History',
        opts
    );

    //Subtitle

    slide3.addText(
        'Pros',
        { x: "4%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide3.addText(
        'Cons',
        { x: "50%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: 'ff0000',bold:true }
    )

    //Pros info

    slide3.addImage({
        path: "https://cdn-icons-png.freepik.com/256/14441/14441011.png?ga=GA1.1.121843369.1708074947&semt=ais",
        h: "3%",
        w: "1%",
        x: "5%",
        y: "31%"
    });

    slide3.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "7%", y: "25%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide3.addImage({
        path: "https://cdn-icons-png.freepik.com/256/14441/14441011.png?ga=GA1.1.121843369.1708074947&semt=ais",
        h: "3%",
        w: "1%",
        x: "5%",
        y: "41%"
    });

    slide3.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "7%", y: "35%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    //Cons info

    slide3.addImage({
        path: "https://t3.ftcdn.net/jpg/01/43/11/20/360_F_143112044_gPXDDV55GTU8LQcX9GMbbP2Ss83ORMoy.webp",
        h: "3%",
        w: "1%",
        x: "51%",
        y: "31%"
    });

    slide3.addText(
        'Challenges in border security due to ongoing territorial disputes with neighboring countries.',
        { x: "53%", y: "25%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

    slide3.addImage({
        path: "https://t3.ftcdn.net/jpg/01/43/11/20/360_F_143112044_gPXDDV55GTU8LQcX9GMbbP2Ss83ORMoy.webp",
        h: "3%",
        w: "1%",
        x: "51%",
        y: "41%"
    });

    slide3.addText(
        'Budget constraints impacting the pace of infrastructure development and capacity building.',
        { x: "53%", y: "35%", w: '40%', h: 1, fontSize: 11, color: '000000' }
    )

}

export default Thirdslide