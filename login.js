

function onClickMenu(){
    document.getElementById("hamburger").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}





document.querySelector("#menclick").addEventListener("click",function(){
    menclickfunc();
})
function menclickfunc(){
   window.location.href="men.html";
};





document.querySelector("#womenclick").addEventListener("click",function(){
    womenclickfunc();
})
function womenclickfunc(){
 window.location.href="index.html";
};


let arr=JSON.parse(localStorage.getItem("zarausersdata"))||[];
document.querySelector("#form1").addEventListener("submit",function(event){

    event.preventDefault();

    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let phone=document.querySelector("#phone").value;
      
    let obj={
        Email:email,
        Password:password,
        Phone:phone,
     }
  
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("zarausersdata",JSON.stringify(arr));
    alert("Registered, Now Login");
    window.location.href="login.html";
});

document.querySelector("#form2").addEventListener("submit",function(event){

    event.preventDefault();

    let email=document.querySelector("#loginemail").value;
    let password=document.querySelector("#loginpassword").value;
   
      
    let obj={
        Email:email,
        Password:password,
        
     }
  
    arr.forEach(function(ele){
        if(obj.Email==ele.email && obj.Password==ele.password){
            alert("LOGIN SUCCESFULL");
            Window.location.href="index.html";
        }
    })


    
});




   
  
   
  



