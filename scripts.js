var originalText = document.querySelector("#original-text");
var translatedText = document.querySelector("#translated-text");
var translateBtn = document.querySelector("#translate");

//Different type of translations
var type1 = document.getElementById('minion');
var type2 = document.getElementById('yoda');
var type3 = document.getElementById('shakespeare');

var serverURL = ''; //declaring empty serverURL

function minion(){       //minion function for event handling of shakespeare function
  var translationType = 'minion';
  var bgObj = document.getElementById('wrapper');
  bgObj.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/01/07/13/35/minion-1125790__340.jpg') ";
  type1.style.backgroundColor = '#DF711B';
  type2.style.backgroundColor = '#64C9CF';
  type3.style.backgroundColor = '#64C9CF';
  serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";//building serverURL for minion translation
}
minion();
type1.addEventListener('click',minion);  //click event listener for minion translation

function yoda(){       //yoda function for event handling of shakespeare function
  var translationType = 'yoda';
  var bgObj = document.getElementById('wrapper');
  bgObj.style.backgroundImage = "url('https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9kYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')";
  type2.style.backgroundColor = '#DF711B';
  type1.style.backgroundColor = '#64C9CF';
  type3.style.backgroundColor = '#64C9CF';
  serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";//building serverURL for yoda translation
}
yoda();
type2.addEventListener('click',yoda);   //click event listener for yoda translation

function shakespeare(){               //shakespear function for event handling of shakespeare function
  var translationType = 'shakespeare';
  var bgObj = document.getElementById('wrapper');
  bgObj.style.backgroundImage = "url('https://media.istockphoto.com/illustrations/william-shakespeare-illustration-id163674000?k=6&m=163674000&s=612x612&w=0&h=R1it8l-SLekv2JkZk05g10cuasfM7_T6THJ9_C2fapc=')";
  type3.style.backgroundColor = '#DF711B';
  type2.style.backgroundColor = '#64C9CF';
  type1.style.backgroundColor = '#64C9CF';
  serverURL = "https://api.funtranslations.com/translate/"+translationType+".json"; //building serverURL for shakespeare translation
}
shakespeare();
type3.addEventListener('click',shakespeare)   //click event listener for shakespeare translation 



function getURL(text) {                   // API URL builder function
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("API call limit exceeded. Try again later.");  // Error handling function 
}

function translate() {        // defining function for translate event.
  var inputText = originalText.value;
  if(inputText==''){                              // Handling empty input text request
    alert('Please enter some text to translate.')
  }
  else{                         //Fetching Data from API and dispalying translation output 
    fetch(getURL(inputText))
    .then((response) => response.json())
    .then(json => {
      var translatedtext = json.contents.translated;
      translatedText.innerText = translatedtext;
    })
    .catch(errorHandler);
  }
}
translateBtn.addEventListener("click", translate); //click event listener for translate button


