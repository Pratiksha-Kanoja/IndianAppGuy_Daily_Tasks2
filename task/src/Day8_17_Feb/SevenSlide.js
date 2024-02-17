import React from 'react'

const SevenSlide = (pres) => {
    let slide7 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide7.addText(
        'Indian History of 2023',
        opts
    );

    slide7.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "30%",
        w: "30%",
        x: "4%",
        y: "18%"
    });

    slide7.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "30%",
        w: "30%",
        x: "4%",
        y: "50%"
    });

    slide7.addText(
        "Cultural Diversity",
        { x: "40%", y: "11%", w: '70%', h: 1, fontSize: 14, color: '000000',bold:true }
    )

    slide7.addText(
        "Exploring the rich tapestry of languages, traditions and art forms across India",
        { x: "40%", y: "18%", w: '40%', h: 1, fontSize: 11, color: '000000'}
    )

    slide7.addText(
        "Technology Advancements",
        { x: "40%", y: "43%", w: '70%', h: 1, fontSize: 14, color: '000000',bold:true }
    )

    slide7.addText(
        "Highlighting the rapid growth of technology and innovation in various sectors of the indian economy",
        { x: "40%", y: "50%", w: '40%', h: 1, fontSize: 11, color: '000000'}
    )


}

export default SevenSlide