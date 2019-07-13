var input = document.getElementById('input');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

function  inputLength(){
  return input.value.length;
}
 
 function createListElement(){
  var li = document.createElement('li');
     li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";

 }

button.addEventListener("click", function(){
    if(inputLength() >0){
   var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
    }
})


input.addEventListener("keypress", function(event){


    if(input.value.length  >0 && event.which===13){
      createListElement();
   
 
    }

 })

