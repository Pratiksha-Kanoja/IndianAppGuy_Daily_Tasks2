const Slide11 = (pres) => {
    let slide11 = pres.addSlide();

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

    slide11.addText(
        'Indian History',
        opts
    );

    slide11.addText(
        '01',
        { x: "4%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide11.addText(
        '02',
        { x: "27%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide11.addText(
        '03',
        { x: "50%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    slide11.addText(
        '04',
        { x: "73%", y: "20%", w: '25%', h: 1, align: 'Left', fontSize: 20, color: '0000ff',bold:true,fontFace: 'League Spartan' }
    )

    // Info

    slide11.addText(
        "Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks",
        { x: "4%", y: "48%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide11.addText(
        'Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks',
        { x: "27%", y: "48%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide11.addText(
        'Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks',
        { x: "50%", y: "48%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide11.addText(
        'Indus Valley Civilization thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks',
        { x: "73%", y: "48%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide11