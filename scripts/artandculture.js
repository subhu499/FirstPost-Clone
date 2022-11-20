document.getElementById("mainStoryTitle").innerText = "Arts and Culture";

getData("https://firstpost-masai-server.herokuapp.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});