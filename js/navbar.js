const pathName= window.location.pathname;
const pagename=pathName.split("/").pop();
if(pathName=== "index.php"){
    document.querySelector(".home").classList.add("active");

}
if(pathName=== "about-us.php"){
    document.querySelector(".about").classList.add("active");
    
}

if(pathName=== "product-page.php"){
    document.querySelector(".product").classList.add("activelink");
    
}
if(pathName=== "Fresh-page.php"){
    document.querySelector(".fresh").classList.add("activelink");
    
}
if(pathName=== "frozen-page.php"){
    document.querySelector(".frozen").classList.add("activelink");
    
}
if(pathName=== "shop-page.php"){
    document.querySelector(".shop").classList.add("active");
    
}
if(pathName=== "FAQs.php"){
    document.querySelector(".faqs").classList.add("active");
    
}
if(pathName=== "contact-us.php"){
    document.querySelector("cantact.home").classList.add("active");
    
}