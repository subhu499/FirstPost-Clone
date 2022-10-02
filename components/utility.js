export const openNav = () => {
  document.getElementById("sidenav-wrap").setAttribute("class", "open");
};

export const closeNav = () => {
  document.getElementById("sidenav-wrap").removeAttribute("class");
};

export const tabs = (elem, elemId) => {
  var i, tabcontent, tablinks, parentEle, tabContainer;
  parentEle = elem.parentNode;
  tabContainer = elem.parentNode.parentNode;
  tablinks = parentEle.children;
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (elem.classList.contains("active")) {
    elem.classList.remove("active");
  } else {
    elem.classList.add("active");
  }
  tabcontent = tabContainer.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(elemId).style.display = "block";
};

export const searchBox = () => {
  var search = document.getElementById("mySEARCH");
  search.classList.toggle("active");
};
export const searchClickHandler = () => {
  searchBox();
};
