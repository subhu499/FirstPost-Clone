document.getElementById("mainStoryTitle").innerText = "Sports";

getData("https://firstpost-masai-server.herokuapp.com/SPORTS").then((res) => {
    append(res, document.querySelector(".main-content"));
});