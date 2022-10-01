let api= `https://firstpost-masai-server.herokuapp.com/SPORTS`

let clickdata=[];
let data=async ()=>{
    let res=await fetch(api);
    let data1=await res.json();
     appendnews(data1)
    clickdata=data1;
    

    console.log(data1)
}
data();

let api2 =`https://firstpost-masai-server.herokuapp.com/HOME-PAGE`
let mostread=async (api)=>{
    let res=await fetch(api);
    let data1=await res.json();
     
    //  appendvideo(data1)
     sideappend(data1)
     
    console.log(data1)
}
mostread(api2);

let c=0;
let appendnews = (data)=>{
   let container=document.getElementById("container");
   container.innerHTML=null;
   

  
  
data.map(function(el){
c++;
if(c!=5){
        let div=document.createElement("div");
        div.setAttribute("id","div")
        let img=document.createElement("img");
        img.setAttribute("id","imgnews")
        let div2=document.createElement("div")
        div2.setAttribute("id","para")
        let p=document.createElement("p");
        // let divicon= createElement("div");
        // divicon.setAttribute("id","divicon");
        let heading=document.createElement("h2");
        let subhead=document.createElement('p');

        img.src=el.image
        p.innerText="Sports"
        // divicon.append(p,<i class="fa-thin fa-arrow-up-from-square"></i>);
        heading.innerText=el.title;
        subhead=el.summary
        
        div2.append(p,heading,subhead)
        div.append(img,div2);
        div.addEventListener("click", function(){
            shownews(el)
        });
        container.append(div)
}
else{
    if(c==5){
        let h1=document.createElement("h1")
        h1.innerText="VIDEOS"
    let videodiv = document.createElement("div");
    videodiv.setAttribute("class", "videodiv");
    let arr =[{image:"https://images.firstpost.com/wp-content/uploads/2019/11/taapsee380.jpg?impolicy=website&width=192&height=104",
title:`I have been quite a problem child,' says Taapsee Pannu`},
{image:"//images.firstpost.com/wp-content/uploads/2019/04/kangana-ranaut-380-10042019.jpg?impolicy=website&width=192&height=104",
title:`Kangana Ranaut denies joining politics: 'What can it give me that I do not already have?`},
{image:"//images.firstpost.com/wp-content/uploads/2019/07/ratna.jpg?impolicy=website&width=192&height=104",
title:`I can’t write a book about any part of my life. I can’t even have a competitive husband'`}];
    for(let i=0; i<3; i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");
        img.src=arr[i].image;
        title.innerText=arr[i].title;
        div.append(img,title);
        videodiv.append(div);
    }
    container.append(videodiv);
}
}
    })
    }
 

   
let sideappend=(data)=>{
    let container=document.getElementById("container1")
    let counter=0
   
     
    container.innerHTML=`   <div id="subs">
    <h3>Subscribe to our foreign policy newsletter</h3>
    <p style="font-size:13px; color:grey;">Sign up for a weekly curated briefing of the most important strategic affairs stories from across the world.</p>
    <p style="margin-bottom:-2px;">Email Address:</p>
    <input type="text">
    <button>Subscribe</button>
</div>`;

    data.map(function(el){
        counter++

        let head=document.createElement("h2")
        head.innerText="MOST READ";
        let div=document.createElement("div");
        div.setAttribute("id","sidebar")
        let div1=document.createElement("div");
        let num=document.createElement("h2")
        num.innerText=counter;
        num.setAttribute("id","num1")

        let div3=document.createElement("div");
        div3.setAttribute("id","countshad");
        
        let div2=document.createElement("div");
        let h3=document.createElement("h4")
        let p=document.createElement("p")
        p.setAttribute("id","pp")
        h3.innerText=el.title;
        p.innerText=el.summary


        div1.append(num,div3);
        div2.append(h3,p)


        
        div.append(div1,div2);

        div.addEventListener("click", function(){
            shownews(el)
        });
        container.append(div)


        
    })
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}
let arr=[];
function shownews(el){
    arr.push(el);
    localStorage.setItem("shownews",JSON.stringify(arr));
    window.location.href="show.html";
} 

let myslides = document.querySelectorAll(".mySlides");
setTimeout(function(){
    console.log(clickdata)

    for(let i=0; i<myslides.length; i++){
        
        myslides[i].innerHTML=`<div class="numbertext">${i+1} / 3</div>
        <img src="${clickdata[i+5].image}" style="width:100%">
        <div class="text">${clickdata[i+5].title}</div>`
        myslides[i].addEventListener("click",function(){
            shownews(clickdata[i+5]);
        })
    }
},5000)


