document.getElementById("mainStoryTitle").innerText = "India News";

getData("https://firstpost1.onrender.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});