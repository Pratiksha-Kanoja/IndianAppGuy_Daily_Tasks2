const Slide5 = (pres) => {
    let slide5 = pres.addSlide();

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

    slide5.addText(
        'Indian History',
        opts
    );

    slide5.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "5%",
        y: "28%"
    }); 

    slide5.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "28%",
        y: "28%"
    }); 

    slide5.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "51%",
        y: "28%"
    }); 

    slide5.addImage({
        path: "https://img.icons8.com/?size=32&id=77258&format=png",
        h: "5%",
        w: "3%",
        x: "74%",
        y: "28%"
    }); 

    // Info

    slide5.addText(
        "Kargil War between India and Pakistan took place",
        { x: "4%", y: "43%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide5.addText(
        'NDA government led by Atal Bihari Vajpayee was in power.',
        { x: "27%", y: "43%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide5.addText(
        'Indian Airlines Flight 814 was hijacked',
        { x: "50%", y: "43%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

    slide5.addText(
        'Cyclone in Odisha cause widespread destruction',
        { x: "73%", y: "43%", w: '22%',  align: 'Left', fontSize: 11, color: '000000',fontFace:'Inter' }
    )

}

export default Slide5