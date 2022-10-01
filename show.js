let data = JSON.parse(localStorage.getItem("shownews"))||[];
data.map(function(el){
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("id","imagess")
    let title = document.createElement("h3");
    title.setAttribute("id","title")
    let para = el.body.split(" ");
   

    img.src =el.image;
    title.innerText=el.title;
    
    document.getElementById("showon").append(title,img);
    let bag ="";
    for(let i=0; i<para.length; i++){
        bag+=para[i]+" ";
        if(i%20==0&&i!=0){
            let p = document.createElement("p");
             p.setAttribute("id","paragraph")
             p.innerHTML=bag;
             bag=""
             document.getElementById("showon").append(p);
        }
       
    }
    

})