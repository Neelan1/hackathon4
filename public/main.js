
const ACCESSTOKEN = `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`
const userTextInput = document.getElementById("userTextBoxInput");
const userTextDisplay = document.getElementById("userTextDisplay");
const responseTextDisplay = document.getElementById("responseTextDisplay");
console.log(responseTextDisplay == null);

let userTextString = document.createElement("p");
let responseTextString = document.createElement("p");

  userTextInput.addEventListener("keypress", function(event){
    //console.log("Test");
    
    userTextString = document.createElement("p");

    userTextString.textContent = userTextInput.value;
    //Display input
    if(event.key === "Enter"){

      userTextDisplay.appendChild(userTextString);
      
      getResponse(userTextString.textContent);
      userTextInput.value = "";

    }
  });

let msgHistory = [
  {
      "role": "system",
      "content": "You are a helpful high school student that answers questions for users."
  }]

  async function fetchChat(){
    const settings = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ACCESSTOKEN}` 
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": msgHistory

            
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

function getResponse(input){
  //input is the question of user
  console.log("YOU SAID: " + input);
  msgHistory.push({"role": "user", "content": input})
  fetchChat().then((response) => {

        let msg = response["choices"][0]["message"]["content"];
       
        responseTextString = document.createElement("p");
        responseTextString.textContent = "AI says: " + msg; // this is where u put ai response
        responseTextDisplay.appendChild(responseTextString);
      
        console.log(msg);
    }
  )

}



  //Call output function




function output(output){

}




