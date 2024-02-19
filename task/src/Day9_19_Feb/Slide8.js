const Slide8 = (pres) => {
    let slide8 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "3%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide8.addText(
        'Indian History',
        opts
    );

    slide8.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "20%"
    }); 

    slide8.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "35%",
        y: "20%"
    }); 
    
    slide8.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "65%",
        y: "20%"
    }); 

    // Subtitle

    slide8.addText(
        '1100BC',
        { x: "4%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide8.addText(
        'Cultural Development',
        { x: "34%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide8.addText(
        'Social Structure',
        { x: "64%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide8.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "4%", y: "30%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide8.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "34%", y: "30%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide8.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "64%", y: "30%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )


    slide8.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "50%"
    }); 

    slide8.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "35%",
        y: "50%"
    }); 
    
    slide8.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "65%",
        y: "50%"
    }); 

    // Subtitle

    slide8.addText(
        'Economic Activities',
        { x: "4%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide8.addText(
        'Technological Advancements',
        { x: "34%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide8.addText(
        'Religious Practices',
        { x: "64%", y: "50%", w: '25%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide8.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "4%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide8.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "34%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide8.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "64%", y: "65%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )
}

export default Slide8