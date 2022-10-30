let textAreaElement = document.getElementById("message");
let saveButton = document.getElementById("saveButton");
saveButton.onclick=function(){
    let userEnteredText = textAreaElement.value;
    localStorage.setItem("yourStory",userEnteredText);
};
let storedUserInputValue = localStorage.getItem("yourStory");
if(storedUserInputValue === null){
    textAreaElement.value = "";
}
else{
    textAreaElement.value = storedUserInputValue;
}