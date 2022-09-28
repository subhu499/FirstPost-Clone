let api= `https://firstpost-masai-server.herokuapp.com/ENTERTAINMENT`

let data=async ()=>{
    let res=await fetch(api);
    let data1=await res.json();
     appendnews(data1)
     appendvideo(data1)
    console.log(data1)
}
data();


let appendslider = () =>{
    let main = document.createElement("div");
    let div =document.createElement("div");
    let img=document.createElement("img");
    let p=document.createElement("p");
    let heading=document.createElement("h2");





}
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
        let heading=document.createElement("h2");
        let subhead=document.createElement('p');
    
        img.src=el.image
        p.innerText="Entertainment"
        heading.innerText=el.title;
        subhead=el.summary
        
        div2.append(p,heading,subhead)
        div.append(img,div2);
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
        let title = document.createElement("h3");
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
 
let appendvideo=(data)=>{
    let container=document.getElementById("videos");
    container.innerHTML=null
    data.map(function(el){
        let div=document.createElement('div');
        let div1=document.createElement("div")

        let v1=document.createElement("div")
        let v2=document.createElement("div")
        let v3=document.createElement("div")

        let img1=document.createElement("img")
        let img2=document.createElement("img")
        let img3=document.createElement("img")

        img1.src=el.image;
        






    })
}



