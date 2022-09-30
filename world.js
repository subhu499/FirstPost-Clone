let world_news=async()=>{
    try {        
    let res_mid=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data=await res_mid.json();
    console.log(data);
    append_mid(data);
    slider(data);
    let res_right=await fetch(`https://firstpost-masai-server.herokuapp.com/WORLD`);
    let data_right=await res_right.json();
    console.log(data_right);
    append_right(data_right);
        
    } catch (error) {
        console.log(error)
    }
}
world_news();

const append_mid=(data)=>{
    let middle=document.querySelector("#middle");
    middle.innerHTML=null;
    data.forEach((ele)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.image;
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let summary=document.createElement("p");
        summary.innerText=ele.summary;
        div.addEventListener("click",function(){
            localStorage.setItem("data",JSON.stringify(ele));
            window.location.href="displaynews.html";
        })
        div.append(image,title,summary);
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



const slider =(data)=>{
    try {
        let slid=document.querySelector("#slider");
        slid.innerHTML=null;
        

        let image=document.createElement("img");
        let div=document.createElement("div");
        let country=document.createElement("p");
        country.id="slider-country";
        let title=document.createElement("h2");
        title.id="slider-title";
        let i=0;
        image.src=data[0].image;
        country.innerText=data[0].cateogory;
        title.innerText=data[0].title;
        div.append(country,title)
        slid.addEventListener("click",function(){
            localStorage.setItem("data",JSON.stringify(data[0]));
            window.location.href="displaynews.html";
        })
        slid.append(image,div);
        i++;
        setInterval(function(){
            if(i==data.length){
                i=0;
            }
            image.src=data[i].image;            
            country.innerText=data[i].cateogory;
            title.innerText=data[i].title;
            slid.addEventListener("click",function(){
                localStorage.setItem("data",JSON.stringify(data[i]));
                window.location.href="displaynews.html";
            })
            i++;            
            div.append(country,title)
            slid.append(image,div);
        },4000);

        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
