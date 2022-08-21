let line1 = document.getElementById("line-1");
let line2 = document.getElementById("line-2");
let line3 = document.getElementById("line-3");
let blackContainer = document.getElementById("black-container");
let mainNav = document.getElementById("main-nav");
let listContainer = document.getElementById("list-container");
let toggleMenubar = false;
let items = document.querySelectorAll(".item");

window.onscroll = () => {
  if (window.scrollY < 100) {
    mainNav.style.backgroundColor = "transparent";
    listContainer.style.marginBottom = "25px";
    mainNav.classList.remove("nav-scroll");
  } else if (toggleMenubar && window.scrollY > 100) {
    mainNav.style.backgroundColor = "#181818";
  } else if (!toggleMenubar && window.scrollY > 100) {
    mainNav.style.backgroundColor = "#181818";
    listContainer.style.marginBottom = "150px";
    mainNav.classList.add("nav-scroll");
  } else if (!toggleMenubar && window.scrollY < 100) {
    mainNav.classList.remove("nav-scroll");
    listContainer.style.marginBottom = "25px";
  }

  if (window.scrollY > 1800) {
    items.forEach((item) => {
      item.classList.add("item-receive");
    });
  }
};

const changeIcon = () => {
  toggleMenubar = !toggleMenubar;
  if (toggleMenubar) {
    line1.classList.add("line-1");
    line2.classList.add("line-2");
    line3.classList.add("line-3");

    blackContainer.style.right = "0";
    mainNav.classList.remove("nav-scroll");
    listContainer.style.marginBottom = "25px";
    mainNav.style.backgroundColor = "#181818";
  } else {
    line1.classList.remove("line-1");
    line2.classList.remove("line-2");
    line3.classList.remove("line-3");

    blackContainer.style.right = "-800px";

    if (window.scrollY < 100) {
      mainNav.style.backgroundColor = "transparent";
      listContainer.style.marginBottom = "25px";
      mainNav.classList.remove("nav-scroll");
    } else if (window.scrollY > 100) {
      mainNav.style.backgroundColor = "#181818";
      listContainer.style.marginBottom = "150px";
      mainNav.classList.add("nav-scroll");
    }
  }
};

let cardContainer = document.getElementById("card-container");
let next = document.querySelectorAll(".next div");
let prev = document.querySelectorAll(".prev div");

let right = 0;

const nextFunc = () => {
  if (right < 0) {
    right += 310;
    console.log(right);
    cardContainer.style.right = `${right}px`;
    cardContainer.style.transition = "all 1s linear";
  }
  next.forEach((div) => {
    if (right >= 0) {
      div.style.backgroundColor = "#888";
    } else {
      div.style.backgroundColor = "#000";
    }
  });
  prev.forEach((div) => {
    if (right <= -2500) {
      div.style.backgroundColor = "#888";
    } else {
      div.style.backgroundColor = "#000";
    }
  });
  
};
const prevFunc = () => {
  if (right > -2500) {
    right -= 310;
    console.log(right);
    cardContainer.style.right = `${right}px`;
    cardContainer.style.transition = "all 1s linear";
    console.log(right);
    cardContainer.click;
  }
  
  prev.forEach((div) => {
    if (right <= -2500) {
      div.style.backgroundColor = "#888";
    } else {
      div.style.backgroundColor = "#000";
    }
  });
  next.forEach((div) => {
    if (right >= 0) {
      div.style.backgroundColor = "#888";
    } else {
      div.style.backgroundColor = "#000";
    }
  });
};




let liList = document.querySelectorAll("#lang-list li");

liList.forEach((link) => {
  link.onclick = () => {
    liList.forEach((l) => {
      l.childNodes[0].classList.remove("spanAdd");
    });
    link.childNodes[0].classList.add("spanAdd");
  };
});
