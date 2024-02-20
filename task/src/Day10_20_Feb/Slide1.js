const Slide1 = (pres) => {
    let slide1 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true,
        fontFace: 'League Spartan'
    };

    slide1.addText(
        'Indian History',
        opts
    );

    slide1.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "25%"
    }); 

    slide1.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "43%"
    }); 
    
    slide1.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "61%"
    }); 

    slide1.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "7%",
        y: "79%"
    }); 

    // Info

    slide1.addText(
        "The history of India in 1990 BC dates back to the Indus Valley Civilization, one of the world's oldest urban civilizations.",
        { x: "15%", y: "19%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide1.addText(
        "Trade with Mesopotamia flourished during this period, evidenced by artifacts found in both regions.",
        { x: "15%", y: "37%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide1.addText(
        'Agriculture and metallurgy were advanced in the Indian subcontinent, with evidence of sophisticated urban planning and drainage systems.',
        { x: "15%", y: "55%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide1.addText(
        "Religious practices such as early forms of Hinduism and Buddhism began to emerge, shaping the spiritual landscape of the region.",
        { x: "15%", y: "73%", w: '70%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide1