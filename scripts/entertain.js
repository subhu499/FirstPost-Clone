// // let api= `https://firstpost-masai-server.herokuapp.com/ENTERTAINMENT`

// let data=async (api)=>{
//     let res=await fetch(api);
//     let data1=await res.json();
//      appendnews(data1)
//     //  appendvideo(data1)
//      sideappend(data1)
     
//     console.log(data1)
// }
// data(api);

// let api2 = `https://firstpost-masai-server.herokuapp.com/HOME-PAGE`
// let mostread=async (api)=>{
//     let res=await fetch(api);
//     let data1=await res.json();
     
//     //  appendvideo(data1)
//      sideappend(data1)
     
//     console.log(data1)
// }
// mostread(api2);

// let appendslider = () =>{
//     let main = document.createElement("div");
//     let div =document.createElement("div");
//     let img=document.createElement("img");
//     let p=document.createElement("p");
//     let heading=document.createElement("h2");





// }
// let c=0;
// let appendnews = (data)=>{
//    let container=document.getElementById("container");
//    container.innerHTML=null;

// data.map(function(el){
// c++;
// if(c!=5){
//         let div=document.createElement("div");
//         div.setAttribute("id","div")
//         let img=document.createElement("img");
//         img.setAttribute("id","imgnews")
//         let div2=document.createElement("div")
//         div2.setAttribute("id","para")
//         let p=document.createElement("p");
//         let heading=document.createElement("h2");
//         let subhead=document.createElement('p');
    
//         img.src=el.image
//         p.innerText="Entertainment"
//         heading.innerText=el.title;
//         subhead=el.summary
        
//         div2.append(p,heading,subhead)
//         div.append(img,div2);
//         container.append(div)
// }
// else{
//     if(c==5){
//         let h1=document.createElement("h1")
//         h1.innerText="VIDEOS"
//     let videodiv = document.createElement("div");
//     videodiv.setAttribute("class", "videodiv");
//     let arr =[{image:"https://images.firstpost.com/wp-content/uploads/2019/11/taapsee380.jpg?impolicy=website&width=192&height=104",
// title:`I have been quite a problem child,' says Taapsee Pannu`},
// {image:"//images.firstpost.com/wp-content/uploads/2019/04/kangana-ranaut-380-10042019.jpg?impolicy=website&width=192&height=104",
// title:`Kangana Ranaut denies joining politics: 'What can it give me that I do not already have?`},
// {image:"//images.firstpost.com/wp-content/uploads/2019/07/ratna.jpg?impolicy=website&width=192&height=104",
// title:`I can’t write a book about any part of my life. I can’t even have a competitive husband'`}];
//     for(let i=0; i<3; i++){
//         let div = document.createElement("div");
//         let img = document.createElement("img");
//         let title = document.createElement("h3");
//         img.src=arr[i].image;
//         title.innerText=arr[i].title;
//         div.append(img,title);
//         videodiv.append(div);
//     }
//     container.append(videodiv);
// }
// }
//     })
    



// }
 
// let appendvideo=(data)=>{
//     let container=document.getElementById("videos");
//     container.innerHTML=null
//     data.map(function(el){
//         let div=document.createElement('div');
//         let div1=document.createElement("div")

//         let v1=document.createElement("div")
//         let v2=document.createElement("div")
//         let v3=document.createElement("div")

//         let img1=document.createElement("img")
//         let img2=document.createElement("img")
//         let img3=document.createElement("img")

//         img1.src=el.image;
        






//     })
// }



// let sideappend=(data)=>{
//     let container=document.getElementById("container1")
//     let counter=0

//     container.innerHTML=null;

//     data.map(function(el){
//         counter++
//         let head=document.createElement("h2")
//         head.innerText="MOST READ";
//         let div=document.createElement("div");
//         div.setAttribute("id","sidebar")
//         let div1=document.createElement("div");
//         let num=document.createElement("h2")
//         num.innerText=counter;

//         let div3=document.createElement("div");
//         div3.setAttribute("id","countshad");
        
//         let div2=document.createElement("div");
//         let h3=document.createElement("h3")
//         let p=document.createElement("p")
//         h3.innerText=el.title;
//         p.innerText=el.summary


//         div1.append(num,div3);
//         div2.append(h3,p)


        
//         div.append(div1,div2);

//         container.append(div)


        
//     })
// }
// let i=0;
// setInterval(function(){
//     let imageslider = ["https://images.firstpost.com/wp-content/uploads/fpranking/1664441045446.jpg?impolicy=website&width=640&height=362","https://images.firstpost.com/wp-content/uploads/fpranking/1664423223134.jpg?impolicy=website&width=640&height=362","https://images.firstpost.com/wp-content/uploads/fpranking/166444090652.jpg?impolicy=website&width=640&height=362"]
    
//     let slider =document.getElementById("imgslider");
//     slider.src=imageslider[i];
//     i++;
//     if(i>=3){
//         i=0;
//     }
// },1000)



let india_news=async()=>{
    try {        
    let res_mid=await fetch(`https://firstpost-masai-server.herokuapp.com/ENTERTAINMENT`);
    let data=await res_mid.json();
    console.log(data);
    append_mid(data);
    let res_right=await fetch(`https://firstpost-masai-server.herokuapp.com/ENTERTAINMENT`);
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
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let summary=document.createElement("p");
        summary.innerText=ele.summary;
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

