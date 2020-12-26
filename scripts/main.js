let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/rails.png') {
  myImage.setAttribute('src', 'images/cat_baby.jpg');
  } else {
    myImage.setAttribute('src', 'images/rails.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function () {
  setUserName();
}
function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'ネコってかわいいよね、' + myName + 'さん';
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'ネコってかわいいよね、' + myName + 'さん';
}
