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
var truncate = (text) => {
  var title = document.createElement("div");
  var part1 = document.createElement("span");
  var part2 = document.createElement("span");
  title.classList.add("title");
  part1.classList.add("part1");
  part2.classList.add("part2");
  part1.textContent = text.slice(0, 15);
  part2.textContent = text.slice(15);
  console.log(part2.textContent);
  title.append(part1);
  title.append(part2);
  // var title = document.createElement("div");
  // title.classList.add("title");
  // if (text.length > 31)
  //   title.textContent =
  //     text.slice(0, 15) + "..." + text.slice(text.length - 15);
  // else title.textContent = text;

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
        emitEvent(lastClicked);
      } else if (lastClicked != list.firstElementChild) {
        console.log(lastClicked.previousElementSibling);
        emitEvent(lastClicked.previousElementSibling);
      }
      break;
    case 40:
      if (lastClicked == undefined) {
        lastClicked = list.firstElementChild;
        console.log(lastClicked);
        emitEvent(lastClicked);
      } else if (lastClicked != list.lastElementChild) {
        console.log(lastClicked.nextElementSibling);
        emitEvent(lastClicked.nextElementSibling);
      }
      break;
  }
};
