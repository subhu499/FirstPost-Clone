import { profileDetails, profileSection } from "../components/profileNavbar.js";
let userid = localStorage.getItem("Userid");
let display = async() => {
    try {
        let res1 = await fetch(
            `https://firstpost-masai-server.herokuapp.com/users/${userid}`
        );
        let res2 = await res1.json();
        // console.log(res2.username);
        document.getElementById("profileName").innerText = "hi, " + res2.username;
        document.getElementById("profileSection").innerHTML = profileSection;
        document.getElementById("username").innerText = res2.username;
        document.getElementById("name").innerText = res2.name;
        document.getElementById("role").innerText = res2.role;
        document.getElementById("email").innerText = res2.email;
        if(res2.role !='admin'){
            document.getElementById("adminRow").innerHTML = "";
        }
        // document.getElementById("")
    } catch (error) {
        console.log(error);
    }
};
// console.log(localStorage.getItem("isLogedIn"));
if (localStorage.getItem("isLogedIn") == "true") {
    // console.log("check");
    let tag = document.getElementById("profileTag");
    tag.innerHTML = profileDetails;
    // console.log("profileTag", tag);
    tag.removeAttribute("href");
    tag.setAttribute("href", "#");
    // console.log("profileTag", tag);

    display();
}