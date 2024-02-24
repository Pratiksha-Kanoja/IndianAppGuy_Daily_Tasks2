openAIKey ="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"

function createAskAIOptions(payload) {
  return {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + openAIKey
    },
    "payload": JSON.stringify(payload)
  };
}


const openAIEndpoint = "https://api.openai.com/v1/chat/completions";

async function callOpenAI(options) {
  try {
    var startOpenAICallTime = new Date();
    const response = UrlFetchApp.fetch(openAIEndpoint, options);
    const result = JSON.parse(response.getContentText()).choices[0].message.content;
    const tokenUsed = JSON.parse(response.getContentText()).usage.total_tokens;
    // Logger.log(`response: ${response}`);
    Logger.log(`result: ${result}`);
    Logger.log(`tokenUsed: ${tokenUsed}`);
    var endOpenAICallTime = new Date();
    var openAICallTime = endOpenAICallTime - startOpenAICallTime;
    return { response, result, tokenUsed, openAICallTime, error: null };
  } catch (error) {
    // Logger detailed error
    return { error };
  }
}




function createAskAIPayload(prompt, plan) {
  var model = "gpt-3.5-turbo";
  switch (plan) {
    case "free":
      model = "gpt-3.5-turbo";
      break;
    case "paid":
      model = "gpt-3.5-turbo";
      break;
    case "premium":
      model = "gpt-3.5-turbo-16k";
    default:
      break;
  }
  var maxToken = 2000;
  switch (plan) {
    case "free":
      maxToken = 2000;
      break;
    case "paid":
      maxToken = 2000;
      break;
    case "premium":
      maxToken = 3000;
    default:
      break;
  }
  return {
    model: model,
    messages: [
      { "role": "user", "content": prompt },
    ],
    "temperature": 1,
    "max_tokens": maxToken,
    "response_format": { "type": "json_object" }
  };
}


// module.exports.createAskAIOptions = createAskAIOptions
// module.exports.createAskAIPayload = createAskAIPayload
// module.exports.callOpenAI = callOpenAI
