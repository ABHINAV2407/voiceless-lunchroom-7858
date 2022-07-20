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