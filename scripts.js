var originalText = document.querySelector("#original-text");
var translatedText = document.querySelector("#translated-text");
var translateBtn = document.querySelector("#translate");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("Something wen wrong! Try again.");
}

function translate() {
  var inputText = originalText.value;
  // console.log('inputText');
  fetch(getURL(inputText))
    .then((response) => response.json())
    .then(json => {
      var translatedtext = json.contents.translated;
      translatedText.innerText = translatedtext;
    })
    .catch(errorHandler);
}
translateBtn.addEventListener("click", translate);


