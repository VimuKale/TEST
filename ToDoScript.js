var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var li=document.getElementsByTagName("li"); 
var deleteButton = document.getElementsByTagName("i");
var clearButton = document.getElementById("clear");
var darkButton = document.getElementById("dark");
var lightButton = document.getElementById("light");
var body = document.getElementsByTagName("body");
var h1 = document.getElementsByTagName("h1");
var h2 = document.getElementsByTagName("h2");

function strikeThrough(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	}
}

function createDeleteButtonIcon(){
	for(var ind=0;ind<li.length;ind++){
		var createDeleteButton = document.createElement("i");
		createDeleteButton.appendChild(document.createTextNode("Delete"));
		var createDiv = document.getElementsByClassName("div");
		createDeleteButton.classList.add("delete");
		createDiv[ind].appendChild(createDeleteButton);
	}
}

function deleteNodeOnClick(e){
	var del = document.querySelectorAll("i");
	for(var ind = 0; ind<del.length;ind++){
		this.parentNode.parentNode.remove();
	}
}

function inputLength(){
	return input.value.length;
}


function createListElement(){
	 var divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");
	
	var li=document.createElement("li");
	var createDiv = document.createElement("div");

	li.appendChild(document.createTextNode(input.value));
	divClassWrapper.appendChild(li);
	divClassWrapper.appendChild(createDiv);
	ul.appendChild(divClassWrapper);

	input.value="";

	createDiv.classList.add("div");

	var createDeleteButton =document.createElement("i");
	createDeleteButton.appendChild(document.createTextNode("Delete"));
	createDeleteButton.classList.add("delete");
	createDiv.appendChild(createDeleteButton);
	deleteParentNodeOnClick();
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();
    }
}

function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

function deleteParentNodeOnClick(){
	for(var i=0;i< deleteButton.length;i++){
		deleteButton[i].addEventListener("click",deleteNodeOnClick);
	}
}

function clearList() {
    ul.innerHTML = "";
}


function darkMode(){
	document.querySelector("body").style.backgroundColor="black";
	document.querySelector("h1").style.color="white";
	document.querySelector("h2").style.color="white";
}

function lightMode(){
	document.querySelector("body").style.backgroundColor="white";
	document.querySelector("h1").style.color="black";
	document.querySelector("h2").style.color="black";
}

darkButton.addEventListener("click",darkMode);
lightButton.addEventListener("click",lightMode);
clearButton.addEventListener("click",clearList);
ul.addEventListener("click",strikeThrough);
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();

