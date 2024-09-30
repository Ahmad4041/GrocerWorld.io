   // Get the current URL
   const currentLocation = window.location.href;

   // Get all the menu links
   const menuItems = document.querySelectorAll('.nav-item a');

   // Loop through menu items to find the active one
   menuItems.forEach(item => {
     if (item.href === currentLocation) {
       item.classList.add('active');
     }
   });
