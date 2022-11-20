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

export const logout = () => {
    localStorage.clear();
    location.href = "login.html";
};

export const getData = async(url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const socialShare = (elem) => {
    elem.parentElement.querySelector("ul").classList.contains("open") ?
        elem.parentElement.querySelector("ul").classList.remove("open") :
        elem.parentElement.querySelector("ul").classList.add("open");
};

export var View = (id, category) => {
    console.log("Checking");
    localStorage.setItem("id", id);
    localStorage.setItem("category", category);
    console.log("Checked");
    location.href = "./view.html";
};

export const append = (res, box) => {
    res.reverse().forEach((element) => {
        // console.log(element);
        let da = data(element);
        box.innerHTML += da;
    });
};

function data(element) {
    let pa = `<div class="big-thumb">
    <a href="javascript:View(${element.id},'${
    element.cateogory
  }')" class="thumb-img">
    <img 
    id="bigThumbImg" class="fp-lazy" src="${element.image}">
    </a>
    <div class="title-wrap">
    
    <a id="bigThumbCategory" href="./${element.cateogory.toLowerCase()}.html" class="category-name">${
    element.cateogory
  }
    </a>
    <h3 class="main-title">
        <a id="bigThumbMainTitle" href="#">${element.title}</a>
    </h3>
    <p id="bigThumbParagraph" class="copy">${element.summary}
    </p>
    
    <div class="thumb-social-wrap">
        <ul class="thumb-social">
            <li class="thumb-list">
                <a href="#" class="fb sc-icon shareicon">
                    <svg width="30" height="30" viewBox="0 0 30 30">
                        <g id="" data-name="Group 1199" transform="translate(-290 -78)">
                            <rect id="" data-name="Rectangle 702" width="30" height="30" rx="15"
                                transform="translate(290 78)" fill="#4968ab">
                            </rect>
                            <path id="" data-name="Icon feather-facebook"
                                d="M18,3H15.954a3.409,3.409,0,0,0-3.409,3.409V8.454H10.5v2.727h2.045v5.454h2.727V11.181h2.045L18,8.454H15.272V6.409a.682.682,0,0,1,.682-.682H18Z"
                                transform="translate(290.563 83.333)" fill="#fff">
                            </path>
                        </g>
                    </svg>
                </a>
            </li>
            <li class="thumb-list">
                <a href="#" class="tw sc-icon shareicon">
                    <svg width="30" height="30" viewBox="0 0 30 30">
                        <g id="" data-name="Group 1200" transform="translate(-296 -132)">
                            <rect id="" data-name="Rectangle 703" width="30" height="30" rx="15"
                                transform="translate(296 132)" fill="#01b0ef">
                            </rect>
                            <path id="" data-name="Icon feather-twitter"
                                d="M15.839,4.491a7.1,7.1,0,0,1-2.047,1A2.92,2.92,0,0,0,8.67,7.444V8.1A6.948,6.948,0,0,1,2.8,5.143S.2,11.009,6.062,13.616A7.587,7.587,0,0,1,1.5,14.92c5.866,3.259,13.036,0,13.036-7.5a2.933,2.933,0,0,0-.052-.541A5.032,5.032,0,0,0,15.839,4.491Z"
                                transform="translate(302.5 136.515)" fill="#fff">
                            </path>
                        </g>
                    </svg>
                </a>
            </li>
            <li class="thumb-list">
                <a href="#" class="wa sc-icon shareicon">
                    <svg width="30" height="30" viewBox="0 0 30 30">
                        <g id="" data-name="Group 1201" transform="translate(-290 -45)">
                            <rect id="" data-name="Rectangle 704" width="30" height="30" rx="15"
                                transform="translate(290 45)" fill="#2cb742">
                            </rect>
                            <path id="" data-name="Icon ionic-logo-whatsapp"
                                d="M9.384,2.25A6.854,6.854,0,0,0,2.5,9.077,6.756,6.756,0,0,0,3.492,12.6L2.25,16.264l3.809-1.21A6.892,6.892,0,0,0,16.264,9.077,6.853,6.853,0,0,0,9.384,2.25Zm3.421,9.419a1.777,1.777,0,0,1-1.217.784c-.323.017-.332.25-2.091-.514A7.178,7.178,0,0,1,6.6,9.2a3.374,3.374,0,0,1-.649-1.829,1.949,1.949,0,0,1,.67-1.43.674.674,0,0,1,.476-.2c.139,0,.228,0,.331,0s.256-.021.389.333.452,1.225.493,1.314a.319.319,0,0,1,0,.306,1.2,1.2,0,0,1-.186.284c-.092.1-.193.22-.275.3s-.187.174-.091.353a5.265,5.265,0,0,0,.932,1.243,4.8,4.8,0,0,0,1.379.917c.173.094.275.084.382-.029s.458-.493.582-.662.24-.137.4-.073,1.006.518,1.179.612.288.142.329.216A1.445,1.445,0,0,1,12.805,11.669Z"
                                transform="translate(295.783 50.683)" fill="#fff">
                            </path>
                        </g>
                    </svg>
                </a>
            </li>
            <li class="thumb-list">
                <a href="#">
                    <svg width="30" height="30" viewBox="0 0 30 30">
                        <g id="" data-name="Group 1202" transform="translate(-296 -166)">
                            <rect id="" data-name="Rectangle 706" width="30" height="30" rx="15"
                                transform="translate(296 166)" fill="#df5b43">
                            </rect>
                            <path id="" data-name="Icon material-email"
                                d="M13.567,6H4.174A1.173,1.173,0,0,0,3.006,7.174L3,14.219a1.178,1.178,0,0,0,1.174,1.174h9.393a1.178,1.178,0,0,0,1.174-1.174V7.174A1.178,1.178,0,0,0,13.567,6Zm0,2.348-4.7,2.935-4.7-2.935V7.174l4.7,2.935,4.7-2.935Z"
                                transform="translate(302 170)" fill="#fff"></path>
                        </g>
                    </svg>
                </a>
            </li>
        </ul>
        <div class="button-social" onclick="socialShare(this)">
            <svg enable-background="new 0 0 58.999 58.999" version="1.1" viewBox="0 0 58.999 58.999" xml:space="preserve">
                <path
                    d="m19.479 12.019c0.256 0 0.512-0.098 0.707-0.293l8.313-8.313v35.586c0 0.553 0.447 1 1 1s1-0.447 1-1v-35.586l8.272 8.272c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-9.978-9.978c-0.092-0.093-0.203-0.166-0.327-0.217-0.244-0.101-0.519-0.101-0.764 0-0.123 0.051-0.234 0.125-0.326 0.217l-10.018 10.019c-0.391 0.391-0.391 1.023 0 1.414 0.195 0.196 0.451 0.293 0.707 0.293z">
                </path>
                <path
                    d="m36.499 15.999c-0.553 0-1 0.447-1 1s0.447 1 1 1h13v39h-40v-39h13c0.553 0 1-0.447 1-1s-0.447-1-1-1h-15v43h44v-43h-15z">
                </path>
            </svg>
        </div>
    </div>
    </div>
    </div>`;

    return pa;
}