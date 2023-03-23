const input = document.getElementById('input')
const result = document.getElementById('result')


input.addEventListener('keypress', (e)=>{
    if (input.value && e.key === 'Enter'){
        send();
    }
});

const openIA_key = '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'

function send() {
    var sQues = input.value;

    fetch('https://api.openai.com/v1/completions',{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type':'application/json',
            Authorization: 'Bearer '+ openIA_key,
        },
        body: JSON.stringify({
            model:'text-davinci-003',
            prompt: sQues,
            max_tokens: 2048,
            temperature: 0.5,
        }),
    })

    .then((response) => response.json())
    .then((json) =>{
        if (json.error?.message) {
            result.value += `Error: ${json.error.message}`;    
        }else if (json.choices?.[0].text){
            var text = json.choices[0].text || 'sin respuesta';

            result.value += 'Chat GPT: ' + text;
        }
        
        result.scrollTop = result.scrollHeight;
    })
    .catch((error)=> console.error('Error',error))
    .finally(()=>{
        input.value = '';
        input.disabled = false;
        input.focus();
    });

    if (result.value) {
        result.value+='\n\n\n';
    }
    result.value +=`Tu: ${sQues}\n\n\n`;
}

