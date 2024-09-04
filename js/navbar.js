const pathName= windows.location.pathname;
const pagename=pathName.split("/").pop();
if(pagename === "index.php"){
    document.querySelector(".home").classList.add("activelink");

}
if(pathName === "about-us.php"){
    document.querySelector(".about").classList.add("activelink");
    
}

if(pathName == "product-page.php"){
    document.querySelector(".product").classList.add("activelink");
    
}
if(pathName=== "Fresh-page.php"){
    document.querySelector(".fresh").classList.add("activelink");
    
}
if(pathName=== "frozen-page.php"){
    document.querySelector(".frozen").classList.add("activelink");
    
}
if(pathName=== "shop-page.php"){
    document.querySelector(".shop").classList.add("activelink");
    
}
if(pathName=== "FAQs.php"){
    document.querySelector(".faqs").classList.add("activelink");
    
}
if(pathName=== "contact-us.php"){
    document.querySelector(".cantact-us").classList.add("activelink");
    
}