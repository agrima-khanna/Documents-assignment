import itemsList from "./itemsList.js";
var lastClicked = undefined;
const previewLarge = document.querySelector(".previewLarge");
const previewTitle = document.querySelector(".name");

var truncate = (text, item) => {
  var title = document.createElement("div");
  title.classList.add("title");
  item.appendChild(title);
  title.textContent = text;
  //console.log(title.offsetWidth);
  if (title.offsetWidth > 250) {
    for (var i = 1; i <= text.length; i++) {
      var limit = Math.ceil((text.length - i) / 2);

      title.textContent =
        text.slice(0, limit) + "..." + text.slice(text.length - limit);
      if (title.offsetWidth <= 250) break;
    }
  }
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
  // item.setAttribute("tabindex", index);
  //helps to switch using tab key by simply Outlining  the elements provided with tabindex
  list.appendChild(item);
  truncate(obj.title, item);
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
