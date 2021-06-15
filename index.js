import itemsList from "./itemsList.js";
var lastClicked = undefined;
const previewLarge = document.querySelector(".previewLarge");
const previewTitle = document.querySelector(".name");

var truncate = (text) => {
  var title = document.createElement("div");

  title.classList.add("title");

  if (text.length > 30) {
    title.textContent =
      text.slice(0, 15) + "..." + text.slice(text.length - 15);
  } else title.textContent = text;

  return title;
};
function setPreview(item) {
  previewTitle.textContent = item.firstChild.getAttribute("alt");
  previewLarge.setAttribute("src", item.firstChild.getAttribute("src"));
}

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

//event delegation

document.addEventListener(
  "click",
  function (event) {
    if (event.target.closest(".item")) {
      const item = event.target.closest(".item");
      if (lastClicked != undefined) {
        lastClicked.classList.remove("clicked");
      }

      lastClicked = item;
      setPreview(item);
      item.classList.add("clicked");
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

        lastClicked.click();
      } else if (lastClicked != list.firstElementChild) {
        lastClicked.previousElementSibling.click();
      }
      break;
    case 40:
      if (lastClicked == undefined) {
        lastClicked = list.firstElementChild;

        lastClicked.click();
      } else if (lastClicked != list.lastElementChild)
        lastClicked.nextElementSibling.click();

      break;
  }
};
