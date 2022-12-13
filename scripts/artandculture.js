document.getElementById("mainStoryTitle").innerText = "Arts and Culture";

getData("https://firstpost1.onrender.com/api/HEAD-NEWS").then((res) => {
    append(res, document.querySelector(".main-content"));
});