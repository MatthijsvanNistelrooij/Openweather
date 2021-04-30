var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=8bdb0a2f1bd8ebf5b8c89d434ae84aa6')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Beschrijving : "+descValue;
  temp.innerHTML = "Temperatuur : "+tempValue+"&deg"+"C";
  input.value ="";

})

.catch(err => alert("Deze stad bestaat niet!"));
})
