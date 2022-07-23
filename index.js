function changebg(){
    var navbar=document.getElementById("navbar");
    var ham1=document.getElementById("bar1");
    var ham2=document.getElementById("bar2");
    var ham3=document.getElementById("bar3");
    var logo=document.getElementById("logo")
    var scrollValue=window.scrollY;
    
    if(scrollValue<850){
        navbar.classList.remove("bgcolor2")
        navbar.classList.add("bgcolor1");

        ham1.classList.remove("color2")
        ham1.classList.add("color1");

        
        ham2.classList.remove("color2")
        ham2.classList.add("color1");

        
        ham3.classList.remove("color2")
        ham3.classList.add("color1");

        logo.classList.remove("logo2");
        logo.classList.add("logo1");

    }else if(scrollValue>850 && scrollValue<1650){
        navbar.classList.remove("bgcolor3");
        navbar.classList.add("bgcolor2");

        ham1.classList.remove("color3")
        ham1.classList.add("color2");

        ham2.classList.remove("color3")
        ham2.classList.add("color2");

        ham3.classList.remove("color3")
        ham3.classList.add("color2");

        logo.classList.remove("logo3");
        logo.classList.add("logo2");
    }else {
        
        navbar.classList.add("bgcolor3");
       
        ham1.classList.add("color3");

        ham2.classList.add("color3");

        ham3.classList.add("color3");

        logo.classList.add("logo3");
    }
}

window.addEventListener("scroll",changebg);

let btn1=document.querySelector("#manbtn").addEventListener("click",function(){
    changepage1();
})

function changepage1(){
    window.location.href="men.html";
}

let btn2=document.querySelector("#manbtn1").addEventListener("click",function(){
    changepage1();
})

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



document.querySelector("#login").addEventListener("click",function(){
    window.location.href="login.html";
})
