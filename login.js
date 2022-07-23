

function onClickMenu(){
    document.getElementById("hamburger").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}



let user=JSON.parse(localStorage.getItem("user"))||[];

document.querySelector("#menclick").addEventListener("click",function(){
    menclickfunc();
})
function menclickfunc(){
    if(user.Name==1){
      window.location.href="men.html";
    }else{
        alert("Login FIRST")
    }
   
};





document.querySelector("#womenclick").addEventListener("click",function(){
    womenclickfunc();
})
function womenclickfunc(){
    if(user.Name==1){
        window.location.href="men.html";
      }else{
          alert("Login FIRST")
      }
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
     
let f=0;
     arr.forEach(function(ele){
       
        
            if(obj.Email===ele.Email && f==0 ){
                f++;
                  alert("Email already Registered Please Login");
                  return;
                 
              }else if( obj.Phone===ele.Phone &&f==0){
                f++;
                alert("Phone Number already Registered Please Login");
                return;
              }
             
            });




   
    if(f==0){
        arr.push(obj);

        localStorage.setItem("zarausersdata",JSON.stringify(arr));
        alert("Registered, Now Login");
        window.location.href="login.html";
    }
    
   
});

document.querySelector("#form2").addEventListener("submit",function(event){

    event.preventDefault();

    let eemail=document.querySelector("#loginemail").value;
    
    let ppassword=document.querySelector("#loginpassword").value;
   
      
    let oobj={
        EEmail:eemail,
        PPassword:ppassword,   
        Name:1,
     }
     localStorage.setItem("user",JSON.stringify(oobj));
  let c=0; let flag=0;
    arr.forEach(function(ele){
       
  c++; 
      if(oobj.EEmail===ele.Email && oobj.PPassword===ele.Password && flag==0){
           flag=1;
            alert("LOGIN SUCCESFULL");
            window.location.href="index.html";
        }
        else if(c==arr.length && flag==0){
            alert("Wrong Email or Password");
        }



    })


    
});






   
  
   
  



