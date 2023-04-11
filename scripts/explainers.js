document.getElementById("mainStoryTitle").innerText = "Explainer";

getData("https://firstpost1.onrender.com/explainers").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);