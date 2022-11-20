let addtojson=async()=>
{
    let obj=
    {
        image:document.getElementById("image").value,
        title:document.getElementById("title").value,
        cateogory:document.getElementById("cateogory").value,
        summary:document.getElementById("summary").value,
        date:document.getElementById("date").value,
        author:document.getElementById("author").value,
        onframe:document.getElementById("onframe").value,
        updateddate:document.getElementById("updateddate").value,
        body:document.getElementById("body").value
    }
        let selected=document.getElementById("cateogory").value;
        let res1=await fetch(`https://firstpost-masai-server.herokuapp.com/${selected}`,
        {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-type":"application/json"
                  }
        })
        alert("Details added successfully")
 }
//  async function display()
//  {
//     let res2=await fetch(" http://localhost:3000/INDIA")
//     let res3=await res2.json();
//     res3.map(function(el){
//         let p=document.createElement("p");
//         p.innerText=el.body;

//         document.getElementById("container").append(p)
//     })
//  }
//  display();
let addtoreanding=async()=>
{
    let obj=
    {
        image:document.getElementById("image1").value,
        title:document.getElementById("title1").value,
        cateogory:document.getElementById("cateogory1").value,
        summary:document.getElementById("summary1").value,
        date:document.getElementById("date1").value,
        author:document.getElementById("author1").value,
        onframe:document.getElementById("onframe1").value,
        updateddate:document.getElementById("updateddate1").value,
        body:document.getElementById("body1").value
    }
        let selected=document.getElementById("cateogory1").value;
        let res1=await fetch("https://firstpost-masai-server.herokuapp.com/HEAD-NEWS",
        {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-type":"application/json"
                  }
        })
        alert("Details added successfully")
 }

 let addtomostread=async()=>
{
    let obj=
    {
        image:document.getElementById("image2").value,
        title:document.getElementById("title2").value,
        cateogory:document.getElementById("cateogory2").value,
        summary:document.getElementById("summary2").value,
        date:document.getElementById("date2").value,
        author:document.getElementById("author2").value,
        onframe:document.getElementById("onframe2").value,
        updateddate:document.getElementById("updateddate2").value,
        body:document.getElementById("body2").value
    }
        let selected=document.getElementById("cateogory1").value;
        let res1=await fetch("https://firstpost-masai-server.herokuapp.com/MOST-READ",
        {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-type":"application/json"
                  }
        })
        alert("Details added successfully")
 }

 let deleteNews=async()=>
 {
    
    let selectedCateogory=document.getElementById("cateogory3").value;
    let selectedTitle=document.getElementById("title3").value;
    let res3=await fetch(`https://firstpost-masai-server.herokuapp.com/${selectedCateogory}?title=${selectedTitle}`)
    let res4=await res3.json();
    console.log(res4[0].id);
    let res5=await fetch(`https://firstpost-masai-server.herokuapp.com/${selectedCateogory}/${res4[0].id}`,{
        method:"DELETE"
    })
    alert("Delete News Successfully !!")
 }
 let updateNews=async()=>
 {
    let selectedCateogory1=document.getElementById("cateogory4").value;
    let selectedTitle1=document.getElementById("title4").value;
    let res31=await fetch(`https://firstpost-masai-server.herokuapp.com/${selectedCateogory1}?title=${selectedTitle1}`)
    let data=await res31.json();
    document.getElementById("lastcontainer").style.display="block"
    console.log(data);
    document.getElementById("image4").value=data[0].image;
    document.getElementById("title5").value=data[0].title;
   document.getElementById("summary4").value=data[0].summary;
    document.getElementById("date4").value=data[0].date;
    document.getElementById("author4").value=data[0].author;
    document.getElementById("onframe4").value=data[0].onframe;
    document.getElementById("updateddate4").value=data[0].updateddate;
    document.getElementById("body4").value=data[0].body;
    document.getElementById("lastbutton").addEventListener("click",()=>
    {
        patchRequest(selectedCateogory1,data[0].id);
    })
 }
let patchRequest=async(cat,id)=>
{
    let UpdateData={
        image:document.getElementById("image4").value,
        title:document.getElementById("title5").value,
        summary:document.getElementById("summary4").value,
        date:document.getElementById("date4").value,
        author:document.getElementById("author4").value,
        onframe:document.getElementById("onframe4").value,
        updateddate:document.getElementById("updateddate4").value,
        body:document.getElementById("body4").value
    }

    let res6=await fetch(`https://firstpost-masai-server.herokuapp.com/${cat}/${id}`,{
        method:"PATCH",
        body:JSON.stringify(UpdateData),
        headers:{
          "Content-type":"application/json"
        }
    })
    alert("sucessfully updated !!")
}