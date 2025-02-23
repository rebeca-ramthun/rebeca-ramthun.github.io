const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MADONNA.jpg") {
    myImage.setAttribute("src", "images/madonna2.jpg");
  } else {
    myImage.setAttribute("src", "images/madonna2.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Obrigada por apreciar o nosso site, ${myName}`;
    }
  }  
  myButton.addEventListener("click", () => {
    setUserName();
  });
  
