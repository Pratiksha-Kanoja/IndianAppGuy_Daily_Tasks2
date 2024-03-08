import React from 'react'

const Slide6 = (pres) => {
    let slide6 = pres.addSlide();

    // Add objects to the second Slide, you can define your options here

    let opts = {
        x: "3%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'left',
        fontSize: 24,
        color: '000000',
        bold:true,
        fontFace: 'League Spartan'
    };

    slide6.addText(
        'The Mughal Empire',
        opts
    );

    slide6.addShape(pres.shapes.OVAL, { x: '5%', y: '23%', w: '4%', h: 0.4, line: { color: '0000ff', width: 2 } , fill: { color: 'ffffff' } });
    slide6.addShape(pres.shapes.OVAL, { x: '5%', y: '43%', w: '4%', h: 0.4, line: { color: '0000ff', width: 2 } , fill: { color: 'ffffff' } });
    slide6.addShape(pres.shapes.OVAL, { x: '5%', y: '63%', w: '4%', h: 0.4, line: { color: '0000ff', width: 2 } , fill: { color: 'ffffff' } });
    slide6.addShape(pres.shapes.OVAL, { x: '5%', y: '83%', w: '4%', h: 0.4, line: { color: '0000ff', width: 2 } , fill: { color: 'ffffff' } });
    
    slide6.addText(
        "1",
        { x: "5.3%", y: "17.7%", w: '100%', h: 1, fontSize: 20, color: '0000ff',fontFace: 'League Spartan' }
    )

    slide6.addText(
        "2",
        { x: "5.3%", y: "37.7%", w: '100%', h: 1, fontSize: 20, color: '0000ff',fontFace: 'League Spartan' }
    )

    slide6.addText(
        "3",
        { x: "5.3%", y: "57.7%", w: '100%', h: 1, fontSize: 20, color: '0000ff',fontFace: 'League Spartan' }
    )

    slide6.addText(
        "4",
        { x: "5.3%", y: "77.7%", w: '100%', h: 1, fontSize: 20, color: '0000ff',fontFace: 'League Spartan' }
    )

    slide6.addText(
        "In 1990BC, the Indus Valley Civilization flourished. Cities like Mohenjo-Daro and Harappa thrived, showcasing advanced urban planning and sophisticated drainage systems.",
        { x: "12%", y: "18%", w: '70%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide6.addText(
        "The Indus Valley Civilization was one of the world's oldest urban civilizations, with a remarkable level of urbanization and technological advancements for its time.",
        { x: "12%", y: "38%", w: '70%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide6.addText(
        "The economy of the Indus Valley Civilization was based on agriculture, trade, and craftsmanship. They traded with regions like Mesopotamia for goods such as precious stones and metals.",
        { x: "12%", y: "58%", w: '70%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )

    slide6.addText(
        "The period of 1990BC marked a significant cultural era in Indian history, with advancements in art, pottery, and script. The civilization had a unique script that is yet to be fully deciphered.",
        { x: "12%", y: "78%", w: '70%', h: 1, fontSize: 11, color: '000000',fontFace: 'Inter' }
    )


}

export default Slide6