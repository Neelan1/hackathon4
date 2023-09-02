const ACCESSTOKEN = `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`
async function fetchArtist(){
    const settings = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ACCESSTOKEN}` 
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user", "content": "Who won the world series in 2020?",
                }
            ]
        })
    }
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, settings);
    if (response.ok)  { // checks if response works
        console.log("test")
        return await response.json(); // returns it
    }
    else {
        console.log("FAIL"); // says if it fails

    }
}


fetchArtist().then((response) => {
        console.log(response);
    }
)
