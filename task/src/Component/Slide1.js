import React from 'react'

const slide1 = (pres) => {
    let slide1 = pres.addSlide();

    let opts = {
        x: "3%",
        y: "50px",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true
    };

    slide1.addText(
        'Indian History',
        opts
    );

    slide1.addText(
        'Indian Army',
        { x: "3%", y: "15%", w: '100%', h: 1, align: 'Left', fontSize: 14, color: '000000',bold:true }
    )

    //Slide info

    slide1.addShape(pres.shapes.OVAL, { x: '6%', y: '32%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide1.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "8%", y: "25%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '6%', y: '42%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide1.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "35%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '6%', y: '52%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide1.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        { x: "8%", y: "45%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    slide1.addShape(pres.shapes.OVAL, { x: '6%', y: '62%', w: '0.5%', h: 0.05, line: { color: '0000ff', width: 1 } , fill: { color: '0000ff' } });

    slide1.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        { x: "8%", y: "55%", w: '45%', h: 1, fontSize: 11, color: '000000' }
    )

    // slide1.addShape(pres.shapes.RECTANGLE, 
    //     { 
    //         x: '65%', 
    //         y: '0%', 
    //         w: '30%', 
    //         h: "100%", 
    //         line: { color: '0000ff', width: 1 }, 
    //         fill: { color: '0000ff' } // Adjust alpha channel for transparency
    //     }
    // )
    // slide1.addImage({
    //     path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW8ZtdYCHbgx6VQ3sDMssMBER7GEjqbeUzZqEmubUhLBbZlpT-1394_da7GSdqLPJAXc&usqp=CAU",
    //     h: "53%",
    //     w: "30%",
    //     x: "65%",
    //     y: "25%",
    //     style: {
    //         borderRadius: "50%" // Make the image circular
    //     }
    // });
    // slide1.addShape(pres.shapes.OVAL, 
    //     { 
    //         x: '65%', 
    //         y: '25%', 
    //         w: '30%', 
    //         h: 3, 
    //         line: { color: '0000ff', width: 1 }, 
    //         fill: { color: 'ffffff', alpha: '100' } // Adjust alpha channel for transparency
    //     }
    // );

    // Add circular mask shape
// Add circular mask shape
slide1.addShape(pres.shapes.OVAL,
    {
      x: '65%',
      y: '25%',
      w: '30%',
      h: '30%', // Adjust the height of the oval to make it a circle
      line: { color: '000000', width: 0 }, // No border for the mask
      fill: { color: '000000' } // Black color for masking
    }
  );
  
  // Add the image
  slide1.addImage({
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW8ZtdYCHbgx6VQ3sDMssMBER7GEjqbeUzZqEmubUhLBbZlpT-1394_da7GSdqLPJAXc&usqp=CAU",
    h: "30%", // Adjust the height of the image to fit within the circular mask
    w: "30%", // Adjust the width of the image to fit within the circular mask
    x: "65%",
    y: "25%",
    style: {
      borderRadius: "50%", // Make the image circular
      mask: { // Apply the circular mask
        type: 'ellipse', // Use an ellipse-shaped mask
        margin: "0%"
      }
    }
  });
  
  


}

export default slide1