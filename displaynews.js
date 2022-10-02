

let data=JSON.parse(localStorage.getItem("data"));
console.log(data);

const display_data=(data)=>{
    let news=document.querySelector("#rall-news");
    news.innerHTML=null;
    let div=document.createElement("div");
    let country=document.createElement("p");
    country.innerText=data.cateogory;
    country.id="rcountry";
    let title=document.createElement("h3");
    title.innerText=data.title;
    title.id="rtitle";
    document.querySelector("#rspan-id").innerText=data.title;
    let summary=document.createElement("p");
    summary.innerText=data.summary;
    summary.id="rsummary";
    let date=document.createElement("p");
    date.innerText=data.date;
    date.id="rdate";
    let image=document.createElement("img");
    image.src=data.image;
    image.id="rimage-id";
    let onframe=document.createElement("p");
    onframe.innerText=data.onframe;
    onframe.id="ronframe";
    let body=document.createElement("p");
    body.innerText=data.body;
    body.id="rdetail-body";
    let update=document.createElement("p");
    update.innerText=data.updateddate;
    update.id="rupdate";
    div.append(country,title,summary,date,image,onframe,body,update);
    news.append(div);
}
display_data(data);




let news=async()=>{
    try {        
    let res_mid=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data=await res_mid.json();
    console.log(data);
    // append_mid(data);
    // slider(data);
    let res_right=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data_right=await res_right.json();
    console.log(data_right);
    append_right(data_right);
        
    } catch (error) {
        console.log(error)
    }
}
news();
const append_right=(data_right)=>{
    let right=document.querySelector("#rright");
    right.innerHTML=null;
    data_right.forEach((ele)=>{
        let bdiv=document.createElement("div");
        bdiv.className="rout";
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



const subscribe_btn=()=>{
        
    let subemail=document.querySelector("#rin-email").value;
    if(subemail!=null){
        document.querySelector("#rsubscribed").innerText="Thank You for subscribing!";
    }
}
