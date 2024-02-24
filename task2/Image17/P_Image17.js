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
          f)'image5' – a string keyword related to the subtitle1. This will be used for image search on google keep it short
          g) 'image6' – a string keyword related to the subtitle1. This will be used for image search on google keep it short
  
          h) 'description1' – string of 4 lines covering specific information or examples relevant to the slide's topic. description1 should me more than 12 words and less than 30 words.
          i) 'description2' – string of 4 lines covering specific information or examples relevant to the slide's topic. description2 should me more than 12 words and less than 30 words.
          j) 'description3' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.
          k) 'description4' – string of 4 lines covering specific information or examples relevant to the slide's topic. description3 should me more than 12 words and less than 30 words.
          l) 'description5' – string of 4 lines covering specific information or examples relevant to the slide's topic. description2 should me more than 12 words and less than 30 words.
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
            let image1 = parsedJson.image1;
            let image2 = parsedJson.image2;
            let image3 = parsedJson.image3;
            let image4 = parsedJson.image4;
            let image5 = parsedJson.image5;
            let image6 = parsedJson.image6;
            let description1 = parsedJson.description1;
            let description2 = parsedJson.description2;
            let description3 = parsedJson.description3;
            let description4 = parsedJson.description4;
            let description5 = parsedJson.description5;
            let description6 = parsedJson.description6;

            if (presentationTitle === undefined || presentationTitle === "" ||
                image1 === undefined || image1 === "" ||
                image2 === undefined || image2 === "" ||
                image3 === undefined || image3 === "" ||
                image4 === undefined || image4 === "" ||
                image5 === undefined || image5 === "" ||
                image6 === undefined || image6 === "" ||
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
                "image1": image1 ? image1 : "",
                "image2": image2 ? image2 : "",
                "image3": image3 ? image3 : "",
                "image4": image4 ? image4 : "",
                "image5": image5 ? image5 : "",
                "image6": image6 ? image6 : "",
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
        title.setLeft(40)
        title.setWidth(350)

        const line1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 80);
        line1.setWeight(4)
        line1.setTop(100)
        line1.setLeft(55)
        line1.getLineFill().setSolidFill('#2d11ee')
        const line2 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 80)
        line2.setLeft(385)
        line2.setTop(100)
        line2.setWeight(4)
        line2.getLineFill().setSolidFill('#2d11ee')
        const line3 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 80)
        line3.setLeft(55)
        line3.setTop(200)
        line3.setWeight(4)
        line3.getLineFill().setSolidFill('#2d11ee')
        const line4 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 80)
        line4.setLeft(385)
        line4.setTop(200)
        line4.setWeight(4)
        line4.getLineFill().setSolidFill('#2d11ee')
        const line5 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 80)
        line5.setLeft(55)
        line5.setWeight(4)
        line5.setTop(295)
        line5.getLineFill().setSolidFill('#2d11ee')
        const line6 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5, 0, 2.5, 80)
        line6.setLeft(385)
        line6.setWeight(4)
        line6.setTop(295)
        line6.getLineFill().setSolidFill('#2d11ee')


        const image1 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image1.setLeft(60)
        image1.setTop(100)
        image1.setHeight(20)
        image1.setWidth(20)


        const info1 = slide.insertTextBox(result.description1)
        const info1Style = info1.getText().getTextStyle()
        info1Style.setFontSize(14)
        info1Style.setFontFamily('Lato')
        info1.setTop(120)
        info1.setLeft(60)
        info1.setWidth(300)

        const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image2.setLeft(390)
        image2.setTop(100)
        image2.setHeight(20)
        image2.setWidth(20)




        const info2 = slide.insertTextBox(result.description2)
        const info2Style = info2.getText().getTextStyle()
        info2Style.setFontSize(14)
        info2Style.setFontFamily('Lato')
        info2.setTop(120)
        info2.setLeft(390)
        info2.setWidth(300)

        const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image3.setLeft(60)
        image3.setTop(200)
        image3.setHeight(20)
        image3.setWidth(20)


        const info3 = slide.insertTextBox(result.description3)
        const info3Style = info3.getText().getTextStyle()
        info3Style.setFontSize(14)
        info3Style.setFontFamily('Lato')
        info3.setTop(220)
        info3.setLeft(60)
        info3.setWidth(300)


        const image4 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image4.setLeft(390)
        image4.setTop(200)
        image4.setHeight(20)
        image4.setWidth(20)



        const info4 = slide.insertTextBox(result.description4)
        const info4Style = info4.getText().getTextStyle()
        info4Style.setFontSize(14)
        info4Style.setFontFamily('Lato')
        info4.setTop(220)
        info4.setLeft(390)
        info4.setWidth(300)

        const image5 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image5.setLeft(60)
        image5.setTop(295)
        image5.setHeight(20)
        image5.setWidth(20)



        const info5 = slide.insertTextBox(result.description5)
        const info5Style = info5.getText().getTextStyle()
        info5Style.setFontSize(14)
        info5Style.setFontFamily('Lato')
        info5.setTop(315)
        info5.setLeft(60)
        info5.setWidth(300)

        const image6 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
        image6.setLeft(390)
        image6.setTop(295)
        image6.setHeight(20)
        image6.setWidth(20)



        const info6 = slide.insertTextBox(result.description6)
        const info6Style = info6.getText().getTextStyle()
        info6Style.setFontSize(14)
        info6Style.setFontFamily('Lato')
        info6.setTop(315)
        info6.setLeft(390)
        info6.setWidth(300)

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

