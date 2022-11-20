document.getElementById("mainStoryTitle").innerText = "Opinion";

getData("https://firstpost-masai-server.herokuapp.com/OPINION").then((res) => {
    append(res, document.querySelector(".main-content"));
});