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
        bold:true
    };

    slide10.addText(
        'Indian History',
        opts
    );

    slide10.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "20%"
    }); 

    slide10.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "45%"
    }); 
    
    slide10.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "70%"
    }); 

    // Subtitle

    slide10.addText(
        '1100BC',
        { x: "10%", y: "14%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide10.addText(
        'Cultural Development',
        { x: "10%", y: "39%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide10.addText(
        'Social Structure',
        { x: "10%", y: "64%", w: '12%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide10.addText(
        'During 1100BC in India, the Vedic Period continued to flourish with the composition',
        { x: "25%", y: "18%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide10.addText(
        'Art, pottery, and trade activities thrived during this period, showcasing the rich cultural',
        { x: "25%", y: "41%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide10.addText(
        'The society was organized into varnas (social classes) such as Brahmins, Kshatriyas',
        { x: "25%", y: "64%", w: '20%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )


    slide10.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "52%",
        y: "20%"
    }); 

    slide10.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "52%",
        y: "45%"
    }); 
    
    slide10.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "52%",
        y: "70%"
    }); 

    // Subtitle

    slide10.addText(
        'Economic Activities',
        { x: "57%", y: "14%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide10.addText(
        'Technological Advancements',
        { x: "57%", y: "39%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    slide10.addText(
        'Religious Practices',
        { x: "57%", y: "64%", w: '15%', h: 1, align: 'Left', fontSize: 14, color: '0000ff',bold:true }
    )

    // Info

    slide10.addText(
        "Economic activities were primarily agrarian-based, with agriculture being the main source of livelihood. Trade networks expanded, connecting different regions.",
        { x: "73%", y: "18%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide10.addText(
        'The use of iron tools and advancements in metallurgy marked technological progress during this era, enhancing agricultural practices and craftsmanship.',
        { x: "73%", y: "42%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )

    slide10.addText(
        'Religious rituals, sacrifices, and the worship of deities played a significant role in the spiritual life of the people during 1100BC in India.',
        { x: "73%", y: "66%", w: '25%', h: 1, align: 'Left', fontSize: 11, color: '000000' }
    )
}

export default Slide10