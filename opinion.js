

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");

fun1();
function fun1(){
    let top_content=document.getElementById("top_content");
    top_content.innerHTML=null;
    let image=document.createElement("img");
    image.src="https://images.firstpost.com/wp-content/uploads/fpranking/1664436049275.jpg?impolicy=website&width=640&height=362";
    let subtitle=document.createElement("h1");
    subtitle.setAttribute("id","sub_title");
    subtitle.innerText="India and the Indian diaspora post Leicester and Birmingham: Besieged and uncertain";
    top_content.append(image,subtitle);
    btn2.style.backgroundColor="white";
    btn3.style.backgroundColor="white";
    btn2.style.border="1px solid grey";
    btn3.style.border="1px solid grey";
    btn1.style.backgroundColor="red";
    btn1.style.border="1px solid grey";
    setTimeout(fun2,4000);
}
function fun2(){
    
    let top_content=document.getElementById("top_content");
    top_content.innerHTML=null;
    let image=document.createElement("img");
    image.src="https://images.firstpost.com/wp-content/uploads/fpranking/1664446130153.jpg?impolicy=website&width=640&height=362";
    let subtitle=document.createElement("h1");
    subtitle.setAttribute("id","sub_title");
    subtitle.innerText="Why live streaming court proceedings of Constitution Benches is a ‘supreme’ leap towards transparency";
    top_content.append(image,subtitle);
    btn1.style.backgroundColor="white";
    btn3.style.backgroundColor="white";
    btn1.style.border="1px solid grey";
    btn3.style.border="1px solid grey";
    btn2.style.backgroundColor="red";
    btn2.style.border="1px solid grey";
    setTimeout(fun3,4000);
}
function fun3(){
    let top_content=document.getElementById("top_content");
    top_content.innerHTML=null;
    let image=document.createElement("img");
    image.src="https://images.firstpost.com/wp-content/uploads/fpranking/1664450868900.jpg?impolicy=website&width=640&height=362";
    let subtitle=document.createElement("h1");
    subtitle.setAttribute("id","sub_title");
    subtitle.innerText="Italy Elections: A right move?";
    top_content.append(image,subtitle);
    btn1.style.backgroundColor="white";
    btn2.style.backgroundColor="white";
    btn1.style.border="1px solid grey";
    btn2.style.border="1px solid grey";
    btn3.style.backgroundColor="red";
    btn3.style.border="1px solid grey";
    setTimeout(fun1,4000);
}


async function opinion(){
    let res=await fetch("https://firstpost-masai-server.herokuapp.com/OPINION");
    console.log(res);
    let data=await res.json();
    console.log(data);
    appendData(data);
}
opinion();
let bottom_container=document.getElementById("bottom-container");
function appendData(data){
    data.forEach(el => {
        let content=document.createElement("div");
        content.setAttribute("class","content");
        let image=document.createElement("img");
        image.setAttribute("class","img");
        image.src=el.image;
        let title=document.createElement("h1");
        title.setAttribute("class","title");
        title.innerText=el.title;
        let summary=document.createElement("p");
        summary.setAttribute("class","summary");
        summary.innerText=el.summary;
        content.append(image,title,summary);
        bottom_container.append(content);
    });
}


//050829106f4d42dc9100b416f33ae8c7
//https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=050829106f4d42dc9100b416f33ae8c7

// async function op(){
//     let res=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=050829106f4d42dc9100b416f33ae8c7");
//     console.log(res);
//     let data=await res.json();
//     console.log(data);
//     let actual_data=data.articles;
//     console.log(actual_data);
// }
// op();

let sub=document.getElementById("sub");

let btn=document.getElementById('btn');
btn.addEventListener("click",function(){
    subscribe();
});
function subscribe(){
    sub.innerText="Thank you for subscribing!";
}


let read=[
    {
        "num":"1",
        "title":"Mumbai: Model ends life by hanging herself in hotel room, 'suicide note' found",
        "desc":"An official said the body of the deceased, identified as Akanksha Mohan, was recovered on Wednesday evening, adding the police suspect that she took the extreme step out of depression as her note says she was 'unhappy' and needed peace",
    },
    {
        "num":"2",
        "title":"Centre upgrades Mukesh Ambani's security cover to Z plus after threat review",
        "desc":"The recommendation was formalised by the Union home ministry after receiving inputs, on the perceived threat perception to the businessman, by central intelligence and security agencies",
    },
    {
        "num":"3",
        "title":"Centre upgrades Mukesh Ambani's security cover to Z plus after threat review",
        "desc":"The recommendation was formalised by the Union home ministry after receiving inputs, on the perceived threat perception to the businessman, by central intelligence and security agencies"
    },
    {
        "num":"4",
        "title":"Rahul lacks 'systematic seriousness', he can leave meeting midway and go for jogging, says Himanta",
        "desc":"Assam Chief Minister Himanta Biswa Sarma has slammed Congress leader Rahul Gandhi saying he does not have systematic seriousness, wants to have power without responsibility and is not fit for politics",
    },
    {
        "num":"5",
        "title":"Explained: The reason behind Queen Elizabeth's death",
        "desc":"The certificate released by the National Records of Scotland shows Queen Elizabeth II’s death was registered on 16 September by the Queen's only daughter, Princess Anne. The cause of death was given only as ‘old age’, with no other cause listed",
    },
]

let most_read=document.getElementById("mostR");
mostRead(read);

function mostRead(read){
    console.log(read);
    read.forEach(el => {
        let mr=document.createElement("mr");
        mr.setAttribute("class","mr");
        let number=document.createElement("h1");
        number.innerText=el.num;
        let title=document.createElement("h2");
        title.innerText=el.title;
        let desc=document.createElement("p");
        desc.innerText=el.desc;
        mr.append(number,title,desc);
        most_read.append(mr);
    });
}

let promoted_video=document.getElementById("promoted_video");



