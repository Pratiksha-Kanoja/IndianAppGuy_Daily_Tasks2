// https://djgurnpwsdoqjscwqbsj.supabase.co/storage/v1/object/public/slidetype%20images/Screenshot%20from%202024-02-16%2023-25-15.png
// const {createAskAIOptions, createAskAIPayload, callOpenAI} = require('./functions')

//I have to call 
async function pros_cons2({ slideTitle, slideDesc, myAccountInfo, userEmail, presentationId, firstSlideNumberToStart, wikipediaSearchSuccess, language, colornfonts, isColorfonts, slide }) {
    try {
        var prompt = `Craft a JSON for a presentation slide object with ${slideTitle} and slide description: ${slideDesc} should have:
          a) 'title' – a short, catchy headline summarizing the slide's content within 3-4 words.
  
          b) 'number1' – give a number series wise.
          c) 'number2' – give a number series wise.
          d) 'number3' – give a number series wise.
          e) 'number4' – give a number series wise.
          f) 'number5' – give a number series wise.
          g) 'number6' – give a number series wise.
  
          h) 'description1' – string of 4 lines covering specific information or examples relevant to the slide's topic. description1 should me more than 12 words and less than 30 words.
          i) 'description2' – string of 4 lines covering specific information or examples relevant to the slide's topic. description2 should me more than 12 words and less than 30 words.
          j) 'description3' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.
          k) 'description4' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.
          l) 'description5' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.
          m) 'description6' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.`


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
            let number1 = parsedJson.number1;
            let number2 = parsedJson.number2;
            let number3 = parsedJson.number3;
            let number4 = parsedJson.number4;
            let number5 = parsedJson.number5;
            let number6 = parsedJson.number6;
            let description1 = parsedJson.description1;
            let description2 = parsedJson.description2;
            let description3 = parsedJson.description3;
            let description4 = parsedJson.description4;
            let description5 = parsedJson.description5;
            let description6 = parsedJson.description6;

            if (presentationTitle === undefined || presentationTitle === "" ||
                number1 === undefined || number1 === "" ||
                number2 === undefined || number2 === "" ||
                number3 === undefined || number3 === "" ||
                number4 === undefined || number4 === "" ||
                number5 === undefined || number5 === "" ||
                number6 === undefined || number6 === "" ||
                description1 === undefined || description1 === "" ||
                description2 === undefined || description2 === "" ||
                description3 === undefined || description3 === "" ||
                description4 === undefined || description4 === "" ||
                description5 === undefined || description5 === "" ||
                description6 === undefined || description6 === "") {
                return;
            }
            var customJSON = {
                "title": presentationTitle ? presentationTitle : slideTitle,
                "number1": number1 ? number1 : "",
                "number2": number2 ? number2 : "",
                "number3": number3 ? number3 : "",
                "number4": number4 ? number4 : "",
                "number5": number5 ? number5 : "",
                "number6": number6 ? number6 : "",
                "description1": description1 ? description1 : "",
                "description2": description2 ? description2 : "",
                "description3": description3 ? description3 : "",
                "description4": description4 ? description4 : "",
                "description5": description5 ? description5 : "",
                "description6": description6 ? description6 : ""
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
        title.setTop(40)
        title.setLeft(30)
        title.setWidth(350)

        const rectshape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        rectshape1.setWidth(40)
        rectshape1.setHeight(20)
        rectshape1.setTop(90)
        rectshape1.setLeft(30)
        rectshape1.getBorder().getLineFill().setSolidFill('#2d11ee')
        rectshape1.getFill().setSolidFill('#2d11ee')

        const number1 = slide.insertTextBox(result.number1)
        const number1Style = number1.getText().getTextStyle()
        number1Style.setFontSize(11)
        number1Style.setFontFamily('Lato')
        number1Style.setForegroundColor('#ffffff')
        number1Style.setBold(true)
        number1.setTop(86)
        number1.setLeft(40)
        number1.setWidth(20)

        const rectshape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        rectshape2.setWidth(40)
        rectshape2.setHeight(20)
        rectshape2.setTop(90)
        rectshape2.setLeft(250)
        rectshape2.getBorder().getLineFill().setSolidFill('#2d11ee')
        rectshape2.getFill().setSolidFill('#2d11ee')

        const number2 = slide.insertTextBox(result.number2)
        const number2Style = number2.getText().getTextStyle()
        number2Style.setFontSize(11)
        number2Style.setFontFamily('Lato')
        number2Style.setForegroundColor('#ffffff')
        number2Style.setBold(true)
        number2.setTop(86)
        number2.setLeft(260)
        number2.setWidth(20)

        const rectshape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        rectshape3.setWidth(40)
        rectshape3.setHeight(20)
        rectshape3.setTop(90)
        rectshape3.setLeft(470)
        rectshape3.getBorder().getLineFill().setSolidFill('#2d11ee')
        rectshape3.getFill().setSolidFill('#2d11ee')

        const number3 = slide.insertTextBox(result.number3)
        const number3Style = number3.getText().getTextStyle()
        number3Style.setFontSize(11)
        number3Style.setFontFamily('Lato')
        number3Style.setForegroundColor('#ffffff')
        number3Style.setBold(true)
        number3.setTop(86)
        number3.setLeft(480)
        number3.setWidth(20)

        const rectshape4 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        rectshape4.setWidth(40)
        rectshape4.setHeight(20)
        rectshape4.setTop(240)
        rectshape4.setLeft(30)
        rectshape4.getBorder().getLineFill().setSolidFill('#2d11ee')
        rectshape4.getFill().setSolidFill('#2d11ee')

        const number4 = slide.insertTextBox(result.number4)
        const number4Style = number4.getText().getTextStyle()
        number4Style.setFontSize(11)
        number4Style.setFontFamily('Lato')
        number4Style.setForegroundColor('#ffffff')
        number4Style.setBold(true)
        number4.setTop(236)
        number4.setLeft(40)
        number4.setWidth(20)

        const rectshape5 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        rectshape5.setWidth(40)
        rectshape5.setHeight(20)
        rectshape5.setTop(240)
        rectshape5.setLeft(250)
        rectshape5.getBorder().getLineFill().setSolidFill('#2d11ee')
        rectshape5.getFill().setSolidFill('#2d11ee')

        const number5 = slide.insertTextBox(result.number5)
        const number5Style = number5.getText().getTextStyle()
        number5Style.setFontSize(11)
        number5Style.setFontFamily('Lato')
        number5Style.setForegroundColor('#ffffff')
        number5Style.setBold(true)
        number5.setTop(236)
        number5.setLeft(260)
        number5.setWidth(20)

        const rectshape6 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        rectshape6.setWidth(40)
        rectshape6.setHeight(20)
        rectshape6.setTop(240)
        rectshape6.setLeft(470)
        rectshape6.getBorder().getLineFill().setSolidFill('#2d11ee')
        rectshape6.getFill().setSolidFill('#2d11ee')

        const number6 = slide.insertTextBox(result.number6)
        const number6Style = number6.getText().getTextStyle()
        number6Style.setFontSize(11)
        number6Style.setFontFamily('Lato')
        number6Style.setForegroundColor('#ffffff')
        number6Style.setBold(true)
        number6.setTop(236)
        number6.setLeft(480)
        number6.setWidth(20)

        const shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape1.setWidth(205)
        shape1.setHeight(110)
        shape1.setTop(110)
        shape1.setLeft(30)
        shape1.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape1.getFill().setSolidFill('#ffffff')

        const shape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape2.setWidth(205)
        shape2.setHeight(110)
        shape2.setTop(110)
        shape2.setLeft(250)
        shape2.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape2.getFill().setSolidFill('#ffffff')

        const shape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape3.setWidth(205)
        shape3.setHeight(110)
        shape3.setTop(110)
        shape3.setLeft(470)
        shape3.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape3.getFill().setSolidFill('#ffffff')

        const shape4 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape4.setWidth(205)
        shape4.setHeight(110)
        shape4.setTop(260)
        shape4.setLeft(30)
        shape4.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape4.getFill().setSolidFill('#ffffff')

        const shape5 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape5.setWidth(205)
        shape5.setHeight(110)
        shape5.setTop(260)
        shape5.setLeft(250)
        shape5.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape5.getFill().setSolidFill('#ffffff')

        const shape6 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
        shape6.setWidth(205)
        shape6.setHeight(110)
        shape6.setTop(260)
        shape6.setLeft(470)
        shape6.getBorder().getLineFill().setSolidFill('#2d11ee')
        shape6.getFill().setSolidFill('#ffffff')

        const info1 = slide.insertTextBox(result.description1)
        const info1Style = info1.getText().getTextStyle()
        info1Style.setFontSize(11)
        info1Style.setFontFamily('Lato')
        info1.setTop(120)
        info1.setLeft(35)
        info1.setWidth(180)

        const info2 = slide.insertTextBox(result.description2)
        const info2Style = info2.getText().getTextStyle()
        info2Style.setFontSize(11)
        info2Style.setFontFamily('Lato')
        info2.setTop(120)
        info2.setLeft(255)
        info2.setWidth(180)

        const info3 = slide.insertTextBox(result.description3)
        const info3Style = info3.getText().getTextStyle()
        info3Style.setFontSize(11)
        info3Style.setFontFamily('Lato')
        info3.setTop(120)
        info3.setLeft(485)
        info3.setWidth(180)

        const info4 = slide.insertTextBox(result.description4)
        const info4Style = info4.getText().getTextStyle()
        info4Style.setFontSize(11)
        info4Style.setFontFamily('Lato')
        info4.setTop(270)
        info4.setLeft(35)
        info4.setWidth(180)

        const info5 = slide.insertTextBox(result.description5)
        const info5Style = info5.getText().getTextStyle()
        info5Style.setFontSize(11)
        info5Style.setFontFamily('Lato')
        info5.setTop(270)
        info5.setLeft(255)
        info5.setWidth(180)

        const info6 = slide.insertTextBox(result.description6)
        const info6Style = info6.getText().getTextStyle()
        info6Style.setFontSize(11)
        info6Style.setFontFamily('Lato')
        info6.setTop(270)
        info6.setLeft(485)
        info6.setWidth(180)

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

