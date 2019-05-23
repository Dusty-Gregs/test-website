var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nemi.jpeg') {
      myImage.setAttribute ('src','images/nemi2.jpeg');
    } else {
      myImage.setAttribute ('src','images/nemi.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Nemis site, ' + myName + '.';
  }
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Nemis site, ' + storedName + '.';
}
myButton.onclick = function() {
    setUserName();
  }