var originalText = document.querySelector("#original-text");
var translatedText = document.querySelector("#translated-text");
var translateBtn = document.querySelector("#translate");

var type1 = document.getElementById('minion');
var type2 = document.getElementById('yoda');
var type3 = document.getElementById('shakespeare');

// var translationType = 'minion';

var serverURL = "https://api.funtranslations.com/translate/"+'minion'+".json";


type1.addEventListener('click',function(serverURL){
    var translationType = 'minion';
    var bgObj = document.getElementById('wrapper');
    bgObj.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/01/07/13/35/minion-1125790__340.jpg') ";
    type1.style.backgroundColor = '#DF711B'
    type2.style.backgroundColor = '#64C9CF'
    type3.style.backgroundColor = '#64C9CF'
    var serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";
    console.log(serverURL);
})
type2.addEventListener('click',function(serverURL){
    var translationType = 'yoda';
    var bgObj = document.getElementById('wrapper');
    bgObj.style.backgroundImage = "url('https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9kYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')";
    type2.style.backgroundColor = '#DF711B'
    type1.style.backgroundColor = '#64C9CF'
    type3.style.backgroundColor = '#64C9CF'
    var serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";
    console.log(serverURL);

})
type3.addEventListener('click',function(serverURL){
    var translationType = 'shakespeare';
    var bgObj = document.getElementById('wrapper');
    bgObj.style.backgroundImage = "url('https://media.istockphoto.com/illustrations/william-shakespeare-illustration-id163674000?k=6&m=163674000&s=612x612&w=0&h=R1it8l-SLekv2JkZk05g10cuasfM7_T6THJ9_C2fapc=')";
    type3.style.backgroundColor = '#DF711B'
    type2.style.backgroundColor = '#64C9CF'
    type1.style.backgroundColor = '#64C9CF'
    var serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";
    console.log(serverURL);
})



function getURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("Something went wrong! Try again.");
}

function translate() {
  var inputText = originalText.value;
  if(inputText==''){
    alert('Please enter some text to translate.')
  }
  else{
    fetch(getURL(inputText))
    .then((response) => response.json())
    .then(json => {
      var translatedtext = json.contents.translated;
      translatedText.innerText = translatedtext;
    })
    .catch(errorHandler);
  }
}
translateBtn.addEventListener("click", translate);


