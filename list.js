let subheading = document.getElementsByTagName("h2")[0];

subheading.addEventListener("mouseover", () => { //Anonymoys Funcion
    subheading.removeAttribute("class");
})

subheading.addEventListener("mouseout", () => {
    subheading.setAttribute("class", "green");
})

let counterButton = document.getElementById("counter-button");
let count = 0;
counterButton.addEventListener("click", () => {
    // console.log(count);
    // document.getElementById("counter-text").innerText = count++;
    // console.log(count);
    let textNode = document.getElementById("counter-text");
    let currentValue = textNode.innerText;
    textNode.innerText = ++currentValue;
})