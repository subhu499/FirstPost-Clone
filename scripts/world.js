let india_news=async()=>{
    try {        
    let res_mid=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data=await res_mid.json();
    console.log(data);
    append_mid(data);
    let res_right=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data_right=await res_right.json();
    console.log(data_right);
    append_right(data_right);
        
    } catch (error) {
        console.log(error)
    }
}
india_news();

const append_mid=(data)=>{
    let middle=document.querySelector("#middle");
    middle.innerHTML=null;
    data.forEach((ele)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.image;
        let div2=document.createElement("div");
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let summary=document.createElement("p");
        summary.innerText=ele.summary;
        div2.append(title,summary)
        div.append(image,div2);
        middle.append(div);
    })
}
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