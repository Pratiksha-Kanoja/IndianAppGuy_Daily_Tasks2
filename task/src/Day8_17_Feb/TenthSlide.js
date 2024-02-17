import React from 'react'

const TenthSlide = (pres) => {
    let slide10 = pres.addSlide();

    slide10.addText(
        'Going Green: A Deep Dive into Sustainable Living Practices',
        { x: "6%", y: "35%", w: '50%', h: 1, align: 'Left', fontSize: 20, color: '000000',bold:true }
    )

    //Slide info

    slide10.addText(
        "Sustainable living means adopting practices that reduce our environmental impact.",
        { x: "6%", y: "50%", w: '35%', h: 1, fontSize: 14, color: '000000' }
    )

    // Right side image https://timesofindia.indiatimes.com/photo/98386953/98386953.jpg

    slide10.addImage({
        path: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kOvrQCyk_KCLyN8l7Gc9dQ.jpeg",
        h: "80%",
        w: "35%",
        x: "55%",
        y: "10%"
    }); 
}

export default TenthSlide