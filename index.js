import itemsList from "./itemsList.js";
var lastClicked = undefined;
const previewLarge = document.querySelector(".previewLarge");
const previewTitle = document.querySelector(".name");

var truncate = (title, text) => {
  console.log(title.offsetWidth);
  console.log(title.scrollWidth);

  title.innerHTML = text;
  if (title.offsetWidth < title.scrollWidth) {
    var low = 1,
      high = text.length;

    while (low < high) {
      var mid = (high + low) / 2;
      var limit = Math.ceil((text.length - mid) / 2);
      title.innerHTML =
        text.slice(0, limit) + "..." + text.slice(text.length - limit);
      if (title.offsetWidth < title.scrollWidth) low = mid + 1;
      else high = mid - 1;
    }
    title.innerHTML =
      text.slice(0, limit - 1) + "..." + text.slice(text.length - limit + 1);
  }
};
function setPreview(item) {
  previewTitle.textContent = item.getAttribute("alt");
  previewLarge.setAttribute("src", item.getAttribute("src"));
}
const list = document.querySelector(".list");
itemsList.forEach((obj, index) => {
  list.innerHTML += `

   <li class="item" >
   <img class="preview"  src=${obj.previewImage}>
   <div class="title" >${obj.title}
   </div>
   </li> `;
  // item.setAttribute("tabindex", index);
  //helps to switch using tab key by simply Outlining  the elements provided with tabindex
  list.lastElementChild.firstElementChild.setAttribute("alt", obj.title);
  truncate(list.lastElementChild.lastElementChild, obj.title);
});

//event delegation
window.addEventListener("resize", () => {
  const items = document.querySelectorAll(".item");
  items.forEach((obj) => {
    // console.log(obj.getAttribute("data-title"));
    truncate(obj.lastElementChild, obj.firstElementChild.getAttribute("alt"));
  });
});

document.addEventListener(
  "click",
  function (event) {
    if (event.target.closest(".item")) {
      const item = event.target.closest(".item");
      if (lastClicked != undefined) {
        lastClicked.classList.remove("clicked");
      }

      lastClicked = item;
      setPreview(item.firstElementChild);
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
