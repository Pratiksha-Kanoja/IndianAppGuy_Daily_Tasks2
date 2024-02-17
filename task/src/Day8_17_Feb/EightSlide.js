import React from 'react'

const EightSlide = (pres) => {
    let slide8 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide8.addText(
        'Indian History of 2023',
        opts
    );

    slide8.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "45%",
        w: "25%",
        x: "4%",
        y: "18%"
    });

    slide8.addImage({
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg",
        h: "45%",
        w: "25%",
        x: "20%",
        y: "45%"
    });

    slide8.addText(
        "King of India",
        { x: "50%", y: "11%", w: '70%', h: 1, fontSize: 14, color: '#0000FF',bold:true }
    )

    slide8.addText(
        "Exploring the reign of King Ashoka and his impact on Indian history through his edicts promoting peace and unity.",
        { x: "50%", y: "23%", w: '40%', h: 1, fontSize: 11, color: '000000'}
    )

    slide8.addText(
        "Indian Independence Movement",
        { x: "50%", y: "43%", w: '70%', h: 1, fontSize: 14, color: '#0000FF',bold:true }
    )

    slide8.addText(
        "Highlighting the key events and leaders of the Indian independence struggle, including Mahatma Gandhi's nonviolent resistance and the Salt March of 1930.",
        { x: "50%", y: "55%", w: '40%', h: 1, fontSize: 11, color: '000000'}
    )

}

export default EightSlide