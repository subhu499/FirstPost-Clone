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

let api2 =`https://firstpost-masai-server.herokuapp.com/HOME-PAGE`
let mostread=async (api)=>{
    let res=await fetch(api);
    let data1=await res.json();
     
    //  appendvideo(data1)
     sideappend(data1)
     
    console.log(data1)
}
mostread(api2);



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
let head=document.createElement("h2")
head.setAttribute("id","most")
head.innerText="MOST READ";
let span=document.createElement("span")
span.setAttribute("class","title-shadow")
container.append(head,span)
    data.map(function(el){
        counter++

      
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