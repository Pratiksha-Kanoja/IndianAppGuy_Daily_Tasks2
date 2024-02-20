const Slide15 = (pres) => {
    let slide15 = pres.addSlide();

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

    slide15.addText(
        'Indian History',
        opts
    );

    // Subtitle

    slide15.addText(
        '01',
        { x: "4%", y: "15%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#7d7bec',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        '02',
        { x: "34%", y: "15%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#7d7bec',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        '03',
        { x: "64%", y: "15%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#7d7bec',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide15.addText(
        '1999 witnessed the rise of internet usage in India, with the launch of new tech companies and increased connectivity, laying the foundation for the digital revolution.',
        { x: "4%", y: "30%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide15.addText(
        "The Indian economy in 1999 experienced growth in various sectors, including IT, telecommunications, and manufacturing, contributing to the country's economic progress.",
        { x: "34%", y: "30%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide15.addText(
        "1999 marked significant cultural events in India, such as the release of iconic Bollywood movies and the celebration of traditional festivals, showcasing the rich cultural heritage of the nation. ",
        { x: "64%", y: "30%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    // Subtitle

    slide15.addText(
        '04',
        { x: "4%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#7d7bec',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        '05',
        { x: "34%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#7d7bec',bold:true,fontFace: 'League Spartan' }
    )

    slide15.addText(
        '06',
        { x: "64%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '#7d7bec',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide15.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "4%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide15.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "34%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide15.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "64%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )
}

export default Slide15