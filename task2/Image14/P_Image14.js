// https://djgurnpwsdoqjscwqbsj.supabase.co/storage/v1/object/public/slidetype%20images/Screenshot%20from%202024-02-16%2023-25-15.png
// const {createAskAIOptions, createAskAIPayload, callOpenAI} = require('./functions')

//I have to call 
async function pros_cons2({ slideTitle, slideDesc, myAccountInfo, userEmail, presentationId, firstSlideNumberToStart, wikipediaSearchSuccess, language, colornfonts, isColorfonts, slide }) {
    try {
        var prompt = `Craft a JSON for a presentation slide object with ${slideTitle} and slide description: ${slideDesc} should have:
          a) 'title' – a short, catchy headline summarizing the slide's content within 3-4 words.
          
          b) 'subtitle1' – a short, catchy subtitle in 1 words summarizing the slide's content.
          c) 'subtitle2' – a short, catchy subtitle in 1 words summarizing the slide's content.
          d) 'subtitle3' – a short, catchy subtitle in 1 words summarizing the slide's content.

          e) 'description1' – string of 4 lines covering specific information or examples relevant to the slide's topic. description1 should me more than 12 words and less than 30 words.
          f) 'description2' – string of 4 lines covering specific information or examples relevant to the slide's topic. description2 should me more than 12 words and less than 30 words.
          g) 'description3' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.`

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
            let subtitle1 = parsedJson.subtitle1;
            let subtitle2 = parsedJson.subtitle2;
            let subtitle3 = parsedJson.subtitle3;
            let description1 = parsedJson.description1;
            let description2 = parsedJson.description2;
            let description3 = parsedJson.description3;

            if (presentationTitle === undefined || presentationTitle === "" ||
                subtitle1 === undefined || subtitle1 === "" ||
                subtitle2 === undefined || subtitle2 === "" ||
                subtitle3 === undefined || subtitle3 === "" ||
                description1 === undefined || description1 === "" ||
                description2 === undefined || description2 === "" ||
                description3 === undefined || description3 === "") {
                return;
            }
            var customJSON = {
                "title": presentationTitle ? presentationTitle : slideTitle,
                "subtitle1": subtitle1 ? subtitle1 : "",
                "subtitle2": subtitle2 ? subtitle2 : "",
                "subtitle3": subtitle3 ? subtitle3 : "",
                "description1": description1 ? description1 : "",
                "description2": description2 ? description2 : "",
                "description3": description3 ? description3 : ""
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

        const title2 = slide.insertTextBox(result.title)
        const titleStyle2 = title2.getText().getTextStyle()
        titleStyle2.setBold(true)
        titleStyle2.setForegroundColor('#000000')
        titleStyle2.setFontSize(24)
        titleStyle2.setFontFamily('Lato')
        title2.setTop(30)
        title2.setLeft(45)
        title2.setWidth(650)

        const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape1.setWidth(600)
        shape1.setHeight(270)
        shape1.setTop(80)
        shape1.setLeft(50)
        shape1.getBorder().setDashStyle(SlidesApp.DashStyle.DOT);
        shape1.getBorder().setWeight(1)
        shape1.getFill().setSolidFill('#ffffff')

        const dotvertLine1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 270)
        dotvertLine1.setDashStyle(SlidesApp.DashStyle.DOT)
        dotvertLine1.setLeft(200)
        dotvertLine1.setTop(80)

        const dothoriline1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 600, 2.5)
        dothoriline1.setDashStyle(SlidesApp.DashStyle.DOT)
        dothoriline1.setLeft(50)
        dothoriline1.setTop(165)


        const dothoriline2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 600, 2.5)
        dothoriline2.setDashStyle(SlidesApp.DashStyle.DOT)
        dothoriline2.setLeft(50)
        dothoriline2.setTop(255)

        const subtitle = slide.insertTextBox(result.subtitle1)
        const subStyle = subtitle.getText().getTextStyle()
        subtitle.setTop(110)
        subtitle.setLeft(60)
        subtitle.setWidth(250)
        subStyle.setForegroundColor('#000000')
        subStyle.setFontSize(14)
        subStyle.setFontFamily('Lato')
        subStyle.setBold(true)

        const subtitle2 = slide.insertTextBox(result.subtitle2)
        const subStyle2 = subtitle2.getText().getTextStyle()
        subtitle2.setTop(190)
        subtitle2.setLeft(60)
        subtitle2.setWidth(120)
        subStyle2.setForegroundColor('#000000')
        subStyle2.setFontSize(14)
        subStyle2.setFontFamily('Lato')
        subStyle2.setBold(true)

        const subtitle3 = slide.insertTextBox(result.subtitle3)
        const subStyle3 = subtitle3.getText().getTextStyle()
        subtitle3.setTop(270)
        subtitle3.setLeft(60)
        subtitle3.setWidth(100)
        subStyle3.setForegroundColor('#000000')
        subStyle3.setFontSize(14)
        subStyle3.setFontFamily('Lato')
        subStyle3.setBold(true)


        const description = slide.insertTextBox(result.description1)
        const descStyle = description.getText().getTextStyle()
        description.setTop(90)
        description.setLeft(250)
        description.setWidth(380)
        descStyle.setForegroundColor('#000000')
        descStyle.setFontSize(11)
        descStyle.setFontFamily('Lato')

        const description2 = slide.insertTextBox(result.description2)
        const descStyle2 = description2.getText().getTextStyle()
        description2.setTop(180)
        description2.setLeft(250)
        description2.setWidth(380)
        descStyle2.setForegroundColor('#000000')
        descStyle2.setFontSize(11)
        descStyle2.setFontFamily('Lato')

        const description3 = slide.insertTextBox(result.description3)
        const descStyle3 = description3.getText().getTextStyle()
        description3.setTop(260)
        description3.setLeft(250)
        description3.setWidth(380)
        descStyle3.setForegroundColor('#000000')
        descStyle3.setFontSize(11)
        descStyle3.setFontFamily('Lato')

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

