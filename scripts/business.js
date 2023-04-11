document.getElementById("mainStoryTitle").innerText = "Business";

getData("https://firstpost1.onrender.com/HEAD-NEWS").then((res) => {
    append(res, document.querySelector(".main-content"));
});