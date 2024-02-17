import React from 'react'

const Eightslide = (pres) => {
    let slide8 = pres.addSlide();

    // 3. Add objects to the first Slide
    let opts = {
        x: "4%",
        y: "2%",
        w: '100%',
        h: 1,
        align: 'Left',
        fontSize: 24,
        color: '000000',
        bold:true,
    };

    let opts1 = {
        x: "30px",
        y: "55%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 14,
        color: '000000',
        bold:true
    };

    let opts2 = {
        x: "30%",
        y: "63%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 14,
        color: '000000',
        bold:true
    };


    let opts3 = {
        x: "4.5%",
        y: "59%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 11,
        color: '000000',
    };

    let opts4 = {
        x: "34.8%",
        y: "68%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 11,
        color: '000000',
    };

    //For last image

    let opts7 = {
        x: "62%",
        y: "55%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 14,
        color: '000000',
        bold:true
    };

    let opts6 = {
        x: "66.5%",
        y: "59%",
        w: '20%',
        h: 1,
        align: 'center',
        fontSize: 11,
        color: '000000',
    };

    slide8.addText(
        'Indian History',
        opts
    );

    slide8.addImage({
        path: "https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        h: "42%",
        w: "28%",
        x: "5%",
        y: "18%"
    });

    slide8.addImage({
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg",
        h: "50%",
        w: "28%",
        x: "36%",
        y: "18%"
    });

    slide8.addImage({
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg",
        h: "42%",
        w: "28%",
        x: "67%",
        y: "18%"
    });

    //Subtitle
    slide8.addText(
        "Bengaluru",
        opts1
    );

    slide8.addText(
        "Mumbai",
        opts2
    );

    slide8.addText(
        "Bengaluru",
        opts7
    );
    

    // Info

    slide8.addText(
        "Bengaluru is a beautiful city",
        opts3
    );

    slide8.addText(
        "Mumbai is a beautiful city",
        opts4
    );
    
    slide8.addText(
        "Bengaluru is a beautiful city",
        opts6
    );
}

export default Eightslide