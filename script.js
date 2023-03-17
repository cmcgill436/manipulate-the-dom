let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let h1El = document.querySelector("#main-title");
  h1El.textContent = "Welcome to my homepage!";

  // Part 2
  let bodyEl = document.querySelector("body");
  bodyEl.style.backgroundColor = "lightgreen";

  // Part 3
  const ulEl = document.querySelector("#favorite-things");
  ulEl.removeChild(ulEl.lastElementChild);

  // Part 4
  let divEl = document.querySelector(".special-title");
  divEl.style.fontSize = "2rem";

  // Part 5
  const ulEl2 = document.querySelector("#past-races");
  ulEl2.removeChild(ulEl2.children[3]);

  // Part 6
  const city = "Dallas";
  ulEl2.innerHTML += `<li> ${city} </li>`;

  // Part 7

  let divEl2 = document.querySelector(".main");
  const newDiv = document.createElement("div");
  newDiv.classList.add("blog-post");
  const newH2 = document.createElement("h2");
  newH2.textContent = "Dallas";
  newDiv.appendChild(newH2); //leftside is the container of the new element
  const pEl = document.createElement("p");
  pEl.textContent =
    "Forget a rollercoaster, I drove at top speed on a ramp to Forney.";
  newDiv.appendChild(pEl);
  divEl2.appendChild(newDiv);
  newH2.style.color = "white";

  // Part 8
  const div = document.getElementById("quote-title");

  div.addEventListener("click", randomQuote);

  // Part 9
  /*Select all `.blog-post` class elements. Iterate through the list of `.blog-post` class elements and apply two event handlers to each node. The first event handler should be listening for `mouseout` events while the second handler should be listening for `mouseenter` events.

- The `mouseout` handler should toggle the class `.purple`
- The `mouseenter` handler should toggle the class `.red`
> Hint:

> Remember the document node property `.classList` and the document node method `.toggle()`.*/

  const classEl = document.querySelectorAll(".blog-post");
  for (let i of classEl) {
    i.addEventListener("mouseout", function (el) {
      if (i !== el.target) {
        return;
      }
      el.target.classList.toggle("purple");
    });
    i.addEventListener("mouseenter", function (el) {
      if (i !== el.target) {
        return;
      }
      el.target.classList.toggle("red");
    });
  }
});
