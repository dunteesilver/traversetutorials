// EXAMINE THE DOCUMENT OBJECT //
// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

var button = document.getElementById('button');
var box = document.getElementById('box');

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
var btn = document.querySelector('#button');
//var btnDel = document.querySelector('#button');
console.log('btn: ' + btn);
console.log(btn);

form.addEventListener('submit', runEvent);
btn.addEventListener('click', clickEvent);
//btnDel.addEventListener('click', deleteEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);
  var currText = document.getElementById('items');
  var items = document.getElementById('items');
  var formText = document.getElementById('myText').value;
  //console.log(items);
  console.log('items: ' + items.children.length);
  console.log('formText: ' + formText);
  console.log('select: ' + select.value);
  for(let i = 0; i < select.value; i++){
    //console.log('i *** ' + i)
    var li = document.createElement('li');
    li.classList.add("list-group-item");
    //console.log('sum *** ' + parseInt(items.children.length)  + parseInt(1));
    li.innerHTML = formText + " " + parseInt(items.children.length + 1);
    document.getElementById('items').appendChild(li);
  }
}

function clickEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);
  var itemsList = document.getElementById('items');
  
  var lastElem = itemsList.lastElementChild;
  itemsList.removeChild(lastElem);
}

function deleteEvent(e){
  var itemsList = document.getElementById('items');
  
  var lastElem = itemsList.lastElementChild;
  itemsList.removeChild(lastElem);
}