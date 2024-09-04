const navlink=document.querySelectorAll('.home');
const pathName= window.location.pathname;

navlink.forEach(navlink =>{
    const navlinkpath = new URL(navlink.href).pathname;
if((pathName=== navlinkpath)|| (pathName==='/index.php' && navlinkpath==='/')){
   
    navlink.classlist.add('activelink');
}
});

// const pathName= windows.location.pathname;
// const pagename=pathName.split("/").pop();
// if(pagename === "index.php"){
//     document.querySelector(".home").classList.add("activelink");

// }
// if(pathName === "about-us.php"){
//     document.querySelector(".home").classList.add("activelink");
    
// }

// if(pathName == "product-page.php"){
//     document.querySelector(".product").classList.add("activelink");
    
// }
// if(pathName=== "Fresh-page.php"){
//     document.querySelector(".fresh").classList.add("activelink");
    
// }
// if(pathName=== "frozen-page.php"){
//     document.querySelector(".frozen").classList.add("activelink");
    
// }
// if(pathName=== "shop-page.php"){
//     document.querySelector(".shop").classList.add("activelink");
    
// }
// if(pathName=== "FAQs.php"){
//     document.querySelector(".faqs").classList.add("activelink");
    
// }
// if(pathName=== "contact-us.php"){
//     document.querySelector(".cantact-us").classList.add("activelink");
    
// }