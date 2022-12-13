document.getElementById("mainStoryTitle").innerText = "International";

getData("https://firstpost1.onrender.com/api/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});