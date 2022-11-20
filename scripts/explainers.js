document.getElementById("mainStoryTitle").innerText = "Explainer";

getData("https://firstpost-masai-server.herokuapp.com/EXPLAINERS").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);