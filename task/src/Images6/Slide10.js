const Slide10 = (pres) => {
    let slide10 = pres.addSlide();

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

    slide10.addText(
        'Indian History',
        opts
    );

    // Subtitle

    slide10.addText(
        '01',
        { x: "4%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide10.addText(
        '02',
        { x: "34%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide10.addText(
        '03',
        { x: "64%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide10.addText(
        '1999 witnessed the rise of internet usage in India, with the launch of new tech companies and increased connectivity, laying the foundation for the digital revolution.',
        { x: "4%", y: "35%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide10.addText(
        "The Indian economy in 1999 experienced growth in various sectors, including IT, telecommunications, and manufacturing, contributing to the country's economic progress.",
        { x: "34%", y: "35%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide10.addText(
        "1999 marked significant cultural events in India, such as the release of iconic Bollywood movies and the celebration of traditional festivals, showcasing the rich cultural heritage of the nation. ",
        { x: "64%", y: "35%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide10