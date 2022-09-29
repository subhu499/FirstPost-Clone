

let data=JSON.parse(localStorage.getItem("data"));
console.log(data);

const display_data=(data)=>{
    let news=document.querySelector("#all-news");
    news.innerHTML=null;
    let div=document.createElement("div");
    let country=document.createElement("p");
    country.innerText=data.cateogory;
    country.id="country";
    let title=document.createElement("h3");
    title.innerText=data.title;
    title.id="title";
    document.querySelector("#span-id").innerText=data.title;
    let summary=document.createElement("p");
    summary.innerText=data.summary;
    summary.id="summary";
    let date=document.createElement("p");
    date.innerText=data.date;
    date.id="date";
    let image=document.createElement("img");
    image.src=data.image;
    image.id="image-id";
    let onframe=document.createElement("p");
    onframe.innerText=data.onframe;
    onframe.id="onframe";
    let body=document.createElement("p");
    body.innerText=data.body;
    body.id="detail-body";
    let update=document.createElement("p");
    update.innerText=data.updateddate;
    update.id="update";
    div.append(country,title,summary,date,image,onframe,body,update);
    news.append(div);
}
display_data(data);




let side_news=async()=>{
    try {    
    let res_right=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data_right=await res_right.json();
    console.log(data_right);
    append_right(data_right);
        
    } catch (error) {
        console.log(error)
    }
}
side_news();
const append_right=(data_right)=>{
    let right=document.querySelector("#right");
    right.innerHTML=null;
    data_right.forEach((ele)=>{
        let bdiv=document.createElement("div");
        bdiv.className="out";
        let div=document.createElement("div");  
        let num=document.createElement('h2');
        num.innerText=ele.id;      
        let title=document.createElement("h3");
        title.innerText=ele.title;
        let summary=document.createElement("p");
        summary.innerText=ele.summary;
        div.append(title,summary);
        bdiv.append(num,div);
        right.append(bdiv);
    })    
}
