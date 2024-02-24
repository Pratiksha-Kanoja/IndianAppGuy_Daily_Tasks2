// https://djgurnpwsdoqjscwqbsj.supabase.co/storage/v1/object/public/slidetype%20images/Screenshot%20from%202024-02-16%2023-25-15.png
// const {createAskAIOptions, createAskAIPayload, callOpenAI} = require('./functions')

//I have to call 
async function pros_cons2({ slideTitle, slideDesc, myAccountInfo, userEmail, presentationId, firstSlideNumberToStart, wikipediaSearchSuccess, language, colornfonts, isColorfonts, slide }) {
    try {
        var prompt = `Craft a JSON for a presentation slide object with ${slideTitle} and slide description: ${slideDesc} should have:
          a) 'title' – a short, catchy headline summarizing the slide's content within 3-4 words.
  
          b) 'image1' – a string keyword related to the subtitle1. This will be used for image search on google keep it short
          c) 'image2' – a string keyword related to the subtitle1. This will be used for image search on google keep it short
          d) 'image3' – a string keyword related to the subtitle1. This will be used for image search on google keep it short
          e) 'image4' – a string keyword related to the subtitle1. This will be used for image search on google keep it short

          f) 'subtitle1' – a short, catchy subtitle in 1 words summarizing the slide's content.
          g) 'subtitle2' – a short, catchy subtitle in 1 words summarizing the slide's content.
          h) 'subtitle3' – a short, catchy subtitle in 1 words summarizing the slide's content.
          i) 'subtitle4' – a short, catchy subtitle in 1 words summarizing the slide's content.

          j) 'description1' – string of 4 lines covering specific information or examples relevant to the slide's topic. description1 should me more than 30 words and less than 30 words.
          k) 'description2' – string of 4 lines covering specific information or examples relevant to the slide's topic. description2 should me more than 30 words and less than 30 words.
          l) 'description3' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 30 words and less than 30 words.
          m) 'description4' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 30 words and less than 30 words.`
         
        const payload = createAskAIPayload(prompt, myAccountInfo['plan']);
        const options = createAskAIOptions(payload);
        var { response, result, tokenUsed, error } = await callOpenAI(options);
        if (error) {
            let counter = 0;
            for (let i = 0; i < 3; i++) {
                var { response1, result1, tokenUsed1, error1 } = await callOpenAI(options);
                if (error1) {
                    // Logger.log(error in OpenAI calling loop ${counter} : ${error1} at procons_bullet);
                    counter++;
                    if (i === 2) {

                        return { "success": false, "message": `error while callingOpenAI ${error1}` };
                    }
                } else {
                    result = result1;
                    tokenUsed = tokenUsed1;
                    break;
                }
            }
        }
        try {
            const parsedJson = JSON.parse(result);
            Logger.log("The JSON is valid.");
            let presentationTitle = parsedJson.title;
            let image1 = parsedJson.image1;
            let image2 = parsedJson.image2;
            let image3 = parsedJson.image3;
            let image4 = parsedJson.image4;
            let subtitle1 = parsedJson.subtitle1;
            let subtitle2 = parsedJson.subtitle2;
            let subtitle3 = parsedJson.subtitle3;
            let subtitle4 = parsedJson.subtitle4;
            let description1 = parsedJson.description1;
            let description2 = parsedJson.description2;
            let description3 = parsedJson.description3;
            let description4 = parsedJson.description4;

            if (presentationTitle === undefined || presentationTitle === "" ||
                image1 === undefined || image1 === "" ||
                image2 === undefined || image2 === "" ||
                image3 === undefined || image3 === "" ||
                image4 === undefined || image4 === "" ||
                subtitle1 === undefined || subtitle1 === "" ||
                subtitle2 === undefined || subtitle2 === "" ||
                subtitle3 === undefined || subtitle3 === "" ||
                subtitle4 === undefined || subtitle4 === "" ||
                description1 === undefined || description1 === "" ||
                description2 === undefined || description2 === "" ||
                description3 === undefined || description3 === "" ||
                description4 === undefined || description4 === ""  ) {
                return;
            }
            var customJSON = {
                "title": presentationTitle ? presentationTitle : slideTitle,
                "image1": image1 ? image1 : "",
                "image2": image2 ? image2 : "",
                "image3": image3 ? image3 : "",
                "image4": image4 ? image4 : "",
                "subtitle1": subtitle1 ? subtitle1 : "",
                "subtitle2": subtitle2 ? subtitle2 : "",
                "subtitle3": subtitle3 ? subtitle3 : "",
                "subtitle4": subtitle4 ? subtitle4 : "",
                "description1": description1 ? description1 : "",
                "description2": description2 ? description2 : "",
                "description3": description3 ? description3 : "",
                "description4": description4 ? description4 : ""
            }
            // Logger.log(result: ${result});
            // Translate the result if not in English
            if (language !== 'en') {
                customJSON = translateResponseBulletPoint(customJSON, language, 'en');
            }
            Logger.log("bullet 3");
            const responseData = await pros_cons2_appScript({
                result: customJSON, firstSlideNumberToStart, wikipediaSearchSuccess, colornfonts, userEmail, isColorfonts, slide
            });
            Logger.log("bullet 5");
            // Update in Tokens in supabase table
            if (presentationId !== undefined || presentationId !== null) {
                await updateTokensInSupabase(userEmail, tokenUsed, presentationId);
            }
            return responseData;
        } catch (error) {
            return await Rendering_pros_cons2({
                slideTitle,
                slideDesc,
                myAccountInfo,
                userEmail,
                firstSlideNumberToStart,
                presentationId,
                wikipediaSearchSuccess,
                language,
                colornfonts,
                isColorfonts
            })
        }
    } catch (error) {

    }
}





async function pros_cons2_appScript({ result, firstSlideNumberToStart, wikipediaSearchSuccess, colornfonts, userEmail, isColorfonts, slide }) {
    // Logger.log(firstSlideNumberToStart: ${firstSlideNumberToStart})
    try {
        //   let presentation = SlidesApp.getActivePresentation();
        //   let slides = presentation.getSlides();
        // //   Logger.log(slides.length: ${slides.length});

        //   let slideIndex = firstSlideNumberToStart;
        //   let slide;

        // // Loop to wait for slide creation (limited attempts to avoid infinite loop)
        // let maxAttempts = 10;
        // for (let attempt = 0; attempt < maxAttempts; attempt++) {
        //   slides = presentation.getSlides();
        //   if (slideIndex < slides.length) {
        //     slide = slides[slideIndex];
        //     break;
        //   }
        //   Utilities.sleep(1000);
        // }

        if (!slide) {
            Logger.log("Failed to create or find the desired slide.");
            return { "success": false, "message": "Failed to create the desired slide." };
        }

        if (isColorfonts) {
            slide.getBackground().setSolidFill(colornfonts.backgroundColor);
        } else {
            slide.getBackground().setSolidFill('#ffffff');
        }

        // *********************************************************************************************************
        // *********************************************************************************************************
        // *********************************************************************************************************
          
          
        const title = slide.insertTextBox(result.title)
        const titleStyle = title.getText().getTextStyle()
        titleStyle.setFontSize(24)
        titleStyle.setFontFamily('Lato')
        titleStyle.setForegroundColor('#000000')
        titleStyle.setBold(true)
        title.setTop(30)
        title.setLeft(30)
        title.setWidth(350)
      
        const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape1.setWidth(160)
        shape1.setHeight(250)
        shape1.setTop(100)
        shape1.setLeft(30)
        shape1.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape1.getFill().setSolidFill('#ffffff')
      
        const shape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape2.setWidth(150)
        shape2.setHeight(250)
        shape2.setTop(100)
        shape2.setLeft(200)
        shape2.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape2.getFill().setSolidFill('#ffffff')
      
        const shape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape3.setWidth(160)
        shape3.setHeight(250)
        shape3.setTop(100)
        shape3.setLeft(360)
        shape3.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape3.getFill().setSolidFill('#ffffff')
      
        const shape4 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape4.setWidth(150)
        shape4.setHeight(250)
        shape4.setTop(100)
        shape4.setLeft(530)
        shape4.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape4.getFill().setSolidFill('#ffffff')
      
        const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image1.setLeft(40)
        image1.setTop(110)
        image1.setHeight(20)
        image1.setWidth(20)
      
        const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image2.setLeft(210)
        image2.setTop(110)
        image2.setHeight(20)
        image2.setWidth(20)
      
        const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image3.setLeft(375)
        image3.setTop(110)
        image3.setHeight(20)
        image3.setWidth(20)
      
        const image4 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image4.setLeft(535)
        image4.setTop(110)
        image4.setHeight(20)
        image4.setWidth(20)
      
        const subtitle1 = slide.insertTextBox(result.subtitle1)
        const subtitle1Style = subtitle1.getText().getTextStyle()
        subtitle1Style.setFontSize(14)
        subtitle1Style.setFontFamily('Lato')
        subtitle1Style.setForegroundColor('#0000FF')
        subtitle1Style.setBold(true)
        subtitle1.setTop(140)
        subtitle1.setLeft(35)
        subtitle1.setWidth(150)
      
        const subtitle2 = slide.insertTextBox(result.subtitle2)
        const subtitle2Style = subtitle2.getText().getTextStyle()
        subtitle2Style.setFontSize(14)
        subtitle2Style.setFontFamily('Lato')
        subtitle2Style.setForegroundColor('#0000FF')
        subtitle2Style.setBold(true)
        subtitle2.setTop(140)
        subtitle2.setLeft(200)
        subtitle2.setWidth(150)
      
        const subtitle3 = slide.insertTextBox(result.subtitle3)
        const subtitle3Style = subtitle3.getText().getTextStyle()
        subtitle3Style.setFontSize(14)
        subtitle3Style.setFontFamily('Lato')
        subtitle3Style.setForegroundColor('#0000FF')
        subtitle3Style.setBold(true)
        subtitle3.setTop(140)
        subtitle3.setLeft(370)
        subtitle3.setWidth(150)
      
        const subtitle4 = slide.insertTextBox(result.subtitle4)
        const subtitle4Style = subtitle4.getText().getTextStyle()
        subtitle4Style.setFontSize(14)
        subtitle4Style.setFontFamily('Lato')
        subtitle4Style.setForegroundColor('#0000FF')
        subtitle4Style.setBold(true)
        subtitle4.setTop(140)
        subtitle4.setLeft(530)
        subtitle4.setWidth(150)
      
        const info1 = slide.insertTextBox(result.description1)
        const info1Style = info1.getText().getTextStyle()
        info1Style.setFontSize(11)
        info1Style.setFontFamily('Lato')
        info1Style.setForegroundColor('#000000')
        info1.setTop(200)
        info1.setLeft(35)
        info1.setWidth(140)
      
        const info2 = slide.insertTextBox(result.description2)
        const info2Style = info2.getText().getTextStyle()
        info2Style.setFontSize(11)
        info2Style.setFontFamily('Lato')
        info2Style.setForegroundColor('#000000')
        info2.setTop(200)
        info2.setLeft(200)
        info2.setWidth(140)
      
        const info3 = slide.insertTextBox(result.description3)
        const info3Style = info3.getText().getTextStyle()
        info3Style.setFontSize(11)
        info3Style.setFontFamily('Lato')
        info3Style.setForegroundColor('#000000')
        info3.setTop(200)
        info3.setLeft(370)
        info3.setWidth(140)
      
        const info4 = slide.insertTextBox(result.description4)
        const info4Style = info4.getText().getTextStyle()
        info4Style.setFontSize(11)
        info4Style.setFontFamily('Lato')
        info4Style.setForegroundColor('#000000')
        info4.setTop(200)
        info4.setLeft(530)
        info4.setWidth(140)
          
          
          

        // *********************************************************************************************************
        // *********************************************************************************************************
        // *********************************************************************************************************


        if (wikipediaSearchSuccess) {
            addSourceTextToLeft1(slide, "Content Source Wikipedia");
        }

        return { "success": true, "message": success };
    } catch (error) {
        Logger.log({ error: `Error: ${error}` });


        return { "success": false, "message": `Error: ${error}` };
    }
}






async function Rendering_pros_cons2({ slideTitle, slideDesc, myAccountInfo, userEmail, presentationId, firstSlideNumberToStart, wikipediaSearchSuccess, language, colornfonts, isColorfonts, slide }) {
    try {
        var prompt = `Craft a JSON for a presentation slide object with ${slideTitle} and slide description: ${slideDesc} should have:
            a) 'title' – a short, catchy headline summarizing the slide's content in between 4-5 words.
            b) 'pros' – string array of 3 points, where each point should be a detailed paragraph of 10-12 words maximum, covering positive or Pros part of specific information or examples relevant to the slide's topic. Do not leave a trailing comma after the last item in this array.
            c) 'prosTitle' – string of 2 words covering title of positive or Pros part of information.
          d) 'cons' – string array of 3 points, where each point should be a detailed paragraph of 10-12 words maximum, covering negative or cons part of specific information or examples relevant to the slide's topic. Do not leave a trailing comma after the last item in this array.
          e) 'consTitle' – string of 2 words covering title of negative or cons part of information.
        The output should be only the Valid JSON object, without any extraneous text or explanation.JSON:`
        const payload = createAskAIPayload(prompt, myAccountInfo['plan']);
        const options = createAskAIOptions(payload);
        var { response, result, tokenUsed, error } = await callOpenAI(options);
        if (error) {
            let counter = 0;
            for (let i = 0; i < 3; i++) {
                var { response1, result1, tokenUsed1, error1 } = await callOpenAI(options);
                if (error1) {
                    // Logger.log(error in OpenAI calling loop ${counter} : ${error1} at procons_bullet);
                    counter++;
                    if (i === 2) {

                        return { "success": false, "message": `error while callingOpenAI ${error1}` };
                    }
                } else {
                    result = result1;
                    tokenUsed = tokenUsed1;
                    break;
                }
            }
        }
        try {
            const parsedJson = JSON.parse(result);
            Logger.log("The JSON is valid.");
            let presentationTitle = parsedJson.title;
            let prosTitle = parsedJson.prosTitle;
            let consTitle = parsedJson.consTitle;
            let pros1 = parsedJson.pros[0];
            let pros2 = parsedJson.pros[1];
            let pros3 = parsedJson.pros[2];
            let cons1 = parsedJson.cons[0];
            let cons2 = parsedJson.cons[1];
            let cons3 = parsedJson.cons[2];
            if (presentationTitle === undefined || presentationTitle === "" || prosTitle === undefined || prosTitle === "" || consTitle === undefined || consTitle === "" || pros1 === undefined || pros1 === "" || pros2 === undefined || pros2 === "" || pros3 === undefined || pros3 === "" || cons1 === undefined || cons1 === "" || cons2 === undefined || cons2 === "" || cons3 === undefined || cons3 === "") {
                return;
            }
            var customJSON = {
                "title": presentationTitle ? presentationTitle : slideTitle,
                "pros": [
                    pros1 ? pros1 : "",
                    pros2 ? pros2 : "",
                    pros3 ? pros3 : ""
                ],
                "prosTitle": prosTitle ? prosTitle : "",
                "cons": [
                    cons1 ? cons1 : "",
                    cons2 ? cons2 : "",
                    cons3 ? cons3 : ""
                ],
                "consTitle": consTitle ? consTitle : ""
            }
            // Logger.log(result: ${result});
            // Translate the result if not in English
            if (language !== 'en') {
                customJSON = translateResponseBulletPoint(customJSON, language, 'en');
            }
            Logger.log("bullet 3");
            const responseData = await pros_cons2_appScript({
                result: customJSON, firstSlideNumberToStart, wikipediaSearchSuccess, colornfonts, userEmail, isColorfonts, slide
            });
            Logger.log("bullet 5");
            // Update in Tokens in supabase table
            if (presentationId !== undefined || presentationId !== null) {
                await updateTokensInSupabase(userEmail, tokenUsed, presentationId);
            }
            return responseData;
        } catch (error) {
            return;
        }
    } catch (error) {

    }
}

