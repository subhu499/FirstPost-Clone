document.getElementById("mainStoryTitle").innerText = "World";

getData("https://firstpost-masai-server.herokuapp.com/WORLD").then((res) => {
    append(res, document.querySelector(".main-content"));
});