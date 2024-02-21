async function myFunction() {

    var presentation = SlidesApp.create('P_Image1');
    Logger.log(presentation)
    let slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK)
    
  await pros_cons2({
      "slideTitle" : "Indian History",
      "slideDesc": "History of 1999",
      "myAccountInfo": {
         "plan": "free"
       },
       "userEmail": "adarshpriyadarshi001@gmail.com",
       "presentationId": "null",
       "firstSlideNumberToStart": 0,
       "wikipediaSearchSuccess": false,
       "language": "en",
       "colornfonts": "null",
       "isColorfonts": false,
       "slide": slide
  })
  // Logger.log(firstSlideNumberToStart)
}
