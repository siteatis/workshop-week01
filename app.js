//#region Workshop: JS: Events --

const button = document.querySelector("button");

console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
});

button.addEventListener("mouseover", function (event) {
  console.log(event);
});

button.addEventListener("mouseout", function (event) {
  console.log(event);
});

//#endregion

//#region Workshop: DOM DUH DOM DOM DOMMMM! --

const body = document.querySelector("body");

const newdiv = document.createElement("div");
newdiv.textContent = "This is a non-semantic container";
console.log(newdiv);
body.appendChild(newdiv);

const h2 = document.querySelector("h2");
h2.textContent = "Hello world!";

const image = document.querySelector("img");
image.src = "./resources/lorikeet-640.jpg";

const brian = document.getElementById("brian");
brian.textContent = "Drink me!";
brian.addEventListener("mouseover", function (event) {
  console.log(event);
});

const olitem = document.createElement("li");
olitem.textContent = "This is item 2, the other items are mysteriously blank";
const olist = document.createElement("ol");
olist.append(
  document.createElement("li"),
  olitem,
  document.createElement("li")
);
body.appendChild(olist);

console.log(body);

//#endregion
