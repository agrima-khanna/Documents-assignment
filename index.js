import itemsList from "./itemsList.js";

var truncate = (text) => {
  var title = document.createElement("div");
  var part1 = document.createElement("span");
  var part2 = document.createElement("span");
  title.classList.add("title");
  part1.classList.add("part1");
  part2.classList.add("part2");
  part1.textContent = text.slice(0, 14);
  part2.textContent = text.slice(14);
  console.log(part2.textContent);
  title.append(part1);
  title.append(part2);

  return title;
};
const list = document.querySelector(".list");
itemsList.forEach((obj, index) => {
  var item = document.createElement("li");
  item.classList.add("item");
  var img = document.createElement("img");
  img.classList.add("preview");

  img.setAttribute("src", obj.previewImage);
  img.setAttribute("alt", obj.title);

  item.appendChild(img);
  item.appendChild(truncate(obj.title));
  item.setAttribute("tabindex", index);
  list.appendChild(item);
});
var lastClicked = undefined;
const previewLarge = document.querySelector(".previewLarge");
const previewTitle = document.querySelector(".name");
//event delegation

document.addEventListener(
  "click",
  function (event) {
    if (event.target.closest(".item")) {
      const item = event.target.closest(".item");
      if (lastClicked != undefined) {
        lastClicked.style.backgroundColor = "#ffffff";
        lastClicked.style.color = "#000000";
      }

      lastClicked = item;
      previewTitle.textContent = item.firstChild.getAttribute("alt");
      previewLarge.setAttribute("src", item.firstChild.getAttribute("src"));
      item.style.backgroundColor = "#185adb";
      item.style.color = "#ffffff";
    }
  },
  false
);
document.onkeydown = function (e) {
  // listen to keyboard events
  switch (e.which) {
    case 38:
      if (lastClicked == undefined) {
        lastClicked = list.firstElementChild;
        console.log(lastClicked);

        lastClicked.click();
      } else if (lastClicked != list.firstElementChild) {
        console.log(lastClicked.previousElementSibling);

        lastClicked.previousElementSibling.click();
      }
      break;
    case 40:
      if (lastClicked == undefined) {
        lastClicked = list.firstElementChild;
        console.log(lastClicked);
        lastClicked.click();
      } else if (lastClicked != list.lastElementChild) {
        console.log(lastClicked.nextElementSibling);
        lastClicked.nextElementSibling.click();
      }
      break;
  }
};
