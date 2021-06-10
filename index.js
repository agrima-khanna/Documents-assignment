var itemsList = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cooking couple shoot portofilio(1).jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2021.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-june-2021.key",
  },
];
var emitEvent = (item) => {
  var mEvent = document.createEvent("MouseEvent");
  mEvent.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );

  item.dispatchEvent(mEvent);
};
const list = document.querySelector(".list");
itemsList.forEach((obj, index) => {
  var item = document.createElement("li");
  item.classList.add("item");
  var img = document.createElement("img");
  img.classList.add("preview");
  var title = document.createElement("div");
  title.classList.add("title");
  title.textContent = obj.title;
  img.setAttribute("src", obj.previewImage);

  item.appendChild(img);
  item.appendChild(title);
  item.setAttribute("tabindex", index);
  list.appendChild(item);
});
var last = undefined;
const previewLarge = document.querySelector(".previewLarge");
const previewTitle = document.querySelector(".name");
document.addEventListener(
  "click",
  function (event) {
    if (event.target.closest(".item")) {
      const item = event.target.closest(".item");
      if (last != undefined) {
        last.style.backgroundColor = "#ffffff";
        last.style.color = "#000000";
      }

      last = item;
      previewTitle.textContent = item.childNodes[1].innerHTML;
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
      if (last == undefined) {
        last = list.firstElementChild;
        console.log(last);
        emitEvent(last);
      } else if (last != list.firstElementChild) {
        console.log(last.previousElementSibling);
        emitEvent(last.previousElementSibling);
      }
      break;
    case 40:
      if (last == undefined) {
        last = list.ffirstElementChild;
        console.log(last);
        emitEvent(last);
      } else if (last != list.lastElementChild) {
        console.log(last.nextElementSibling);
        emitEvent(last.nextElementSibling);
      }
      break;
  }
};
