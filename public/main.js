
const userTextInput = document.getElementById("userTextBoxInput");
const responseTextOutput = document.getElementById("responseTextBoxInput");

const userTextDisplay = document.getElementById("userTextDisplay");
const responseTextDisplay = document.getElementById("userTextDisplay");

let userTextString = document.createElement("p");
let responseTextString = document.createElement("p");

  userTextInput.addEventListener("keypress", function(event){
    //console.log("Test");
    
    userTextString = document.createElement("p");

    userTextString.textContent = userTextInput.value;
    //Display input
    if(event.key === "Enter"){
      console.log(userTextString);

      userTextDisplay.appendChild(userTextString);
      
      getResponse(userTextInput.value);
      userTextInput.value = "";

    }
  });
function getResponse(input){
  console.log("SCREW U");
  responseTextString = document.createElement("p");
  responseTextString.textContent = "SCREW U";
  responseTextDisplay.appendChild(responseTextString);

}



  //Call output function




function output(output){

}