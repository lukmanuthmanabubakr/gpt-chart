let questionBox = document.querySelector('#question-box')
let responseContainer  = document.querySelector('#response-container')
let apiKey = `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`

function askGpt() {
    const question = questionBox.value
    console.log(question)
    fetch(`https://api.openai.com/v1/engines/text-davinci-003/completions`, {

        method:"POST",
        headers: {
            'Content-Type': "application/json",
            Authorization:`Bearer ${apiKey}` 
        },
        body: JSON.stringify({
            prompt: `${question}`,
            temperature:0.7,
            n: 1,
            top_p: 1,
            frequency_penalty:0.5,
            presence_penalty: 0,
            max_tokens:4000,
            

        }),
    }).then((response => response.json()))
      .then((resp) => {
        responseContainer.innerHTML= resp?.choices[0]?.text
            
        
        //  console.log(resp?.choices[0]?.text)
    })
    .catch((err) => console.log('err on callback', err))
}


/////////////////////////////////////////////////////////////////////////////////////////////////////

async function askGpt2(){
    const question = questionBox.value;
    console.log(question);

    try{
       let fetchResp = await fetch(`https://api.openai.com/v1/engines/text-davinci-003/completions`, {
        method:"POST",
        headers: {
            'Content-Type': "application/json",
            Authorization:`Bearer ${apiKey}` 
        },

        body: JSON.stringify({
            prompt: `${question}`,
            temperature:0.2,
            n: 1,
            top_p: 1,
            frequency_penalty:0.5,
            presence_penalty: 0,
            max_tokens:2000,
            

        }),

       })
       let parseJson = await fetchResp.json()
        responseContainer.innerHTML = parseJson?.choices[0]?.text
    }catch(e){
         if(question.length === 0){
            responseContainer.innerHTML = `
            <h3> The input field cannot be empty</h3>
            `
         }else{
            
        
         }
    }
    
}


