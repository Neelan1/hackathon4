
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




function getResponse(input){
  //input is the question of user
  console.log("YOU SAID: " + input);
  responseTextString = document.createElement("p");
  responseTextString.textContent = "YOU SAID: " + input; // this is where u put ai response
  responseTextDisplay.appendChild(responseTextString);

}



  //Call output function




function output(output){

}