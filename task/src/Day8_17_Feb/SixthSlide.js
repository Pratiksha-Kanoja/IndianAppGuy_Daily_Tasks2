import React from 'react'

const SixthSlide = (pres) => {
    let slide6 = pres.addSlide();

    let opts = {
        x: "7%",
        y: "40%",
        w: '50%',
        h: 1,
        align: 'left',
        fontSize: 40,
        color: '000000',
        bold:true
    };

    let opts1 = {
        x: "7%",
        y: "70%",
        w: '100%',
        h: 1,
        align: 'left',
        // fontSize: 40,
        color: '000000',
        // bold:true
    };

    slide6.addText(
        'Exploring Indian History',
        opts
    );

    slide6.addText(
        'January 24, 2024',
        opts1
    );
}

export default SixthSlide