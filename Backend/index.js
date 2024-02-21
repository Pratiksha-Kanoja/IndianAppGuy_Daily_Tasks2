import express, { json } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

const app = express();
app.use(express.json());
dotenv.config();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.post('/chat', async (req, res) => {
    const apiUrl = "https://api.openai.com/v1/completions";
   
    try {
        const { message } = req.body;
        const resp = await axios.post(apiUrl, {
            model: "davinci-002", //input given to model to generate response
            prompt: message,  //response length
            max_tokens: 50,  //high temperature means 1 which gives more accurate resukt it reduce randomness of output
            temperature: 1, //specifies how many different responses the model should produce for a given prompt
            n: 1 //number of response
        }, {
            headers: {
                'Content-Type': 'application/json', //it shows message is in json format
                'Authorization': `Bearer ${process.env.API_KEY}` // process.env.API_KEY here we pass token
            }
        });

        const botReply = resp.data.choices[0].text.trim();
        res.send({ reply: botReply });
        // console.log("this is response", botReply);
    } catch (error) {
        console.error("Error:", error.response.data);
        return res.status(500).json({ success: false, message: error.response.data })
    }
})

app.listen(8000, () => (console.log("App is running on port 8000")));
