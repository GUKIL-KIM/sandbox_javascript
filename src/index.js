const header = document.createElement("h2");
let textNode = document.createTextNode("Hello!");
header.appendChild(textNode);
document.body.appendChild(header);

function bgColor() {
  let width = window.innerWidth;
  if (width >= 1200) {
    document.querySelector("body").style.backgroundColor = "yellow";
  } else if (width >= 800) {
    document.querySelector("body").style.backgroundColor = "purple";
  } else {
    document.querySelector("body").style.backgroundColor = "blue";
  }
}
window.addEventListener("resize", bgColor);
