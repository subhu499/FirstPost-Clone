let india_news=async()=>{
    try {        
    let res_mid=await fetch(`https://firstpost-masai-server.herokuapp.com/INDIA`);
    let data=await res_mid.json();
    console.log(data);
    append_mid(data);
    slider(data);
    let res_right=await fetch(`https://firstpost-masai-server.herokuapp.com/INDIA`);
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
        let div_data=document.createElement("div");
        let div_share=document.createElement("div");

        div_share.className="share_cl"
        let image=document.createElement("img");
        image.src=ele.image;
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let summary=document.createElement("p");
        summary.innerText=ele.summary;
        
        let count=document.createElement("p");
        count.innerText=ele.cateogory;
        count.className="mid-count";

        let shareimg=document.createElement("img");
        shareimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS73qHKRnu8aEj-j6dWABcHumWPOGDctcIw&usqp=CAU";
        shareimg.className="shareimg";

        div_share.append(count,shareimg);
        div_data.append(div_share,title,summary)
        div.append(image,div_data);
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
        slid.append(image,div);
        i++;
        setInterval(function(){
            if(i==data.length){
                i=0;
            }
            image.src=data[i].image;            
            country.innerText=data[i].cateogory;
            title.innerText=data[i].title;
            i++;            
            div.append(country,title)
            slid.append(image,div);
        },4000);

        console.log(data);
    } catch (error) {
        console.log(error)
    }
}




