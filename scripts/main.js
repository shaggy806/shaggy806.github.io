let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
  };
  
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Your Name is: ${myName}`;
  }
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Your Name is: ${storedName}`;
  }
    