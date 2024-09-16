
const navbar = () => {
    const navbarContent = document.getElementById("navbar");
    navbarContent.innerHTML = navbarBar();
};

// const img = '../assets/logo.png';   

const navbarBar = () => {
  return `

    <section>
    <section class="  shadow-lg">
        <div class="">
             <!-- Dropdown Structure -->
            <div class="dropdown ">
     
             <ul id="dropdown1" class="dropdown-content">
                 <div>
                   <li><a href="#!">Cisco</a></li>
                   <li><a href="#!">Fortinet</a></li>
                   <li><a href="#!">Sophos</a></li>
                   <li><a href="#!">MicroSoft</a></li>
                   <!-- <li class="divider"></li> -->
                   <li><a href="#!">three</a></li>
                 </div>
             </ul>
             <ul id="dropdown2" class="dropdown-content">
               <div>
                 <li><a href="#!">three</a></li>
                 <li><a href="#!">three</a></li>
                 <li><a href="#!">three</a></li>
                 <li><a href="#!">three</a></li>
                 <!-- <li class="divider"></li> -->
                 <li><a href="#!">bbbb</a></li>
               </div>
           </ul>
           <ul id="dropdown3" class="dropdown-content">
             <div>
               <li><a href="#!">About</a></li>
               <li><a href="#!">About</a></li>
               <li><a href="#!">About</a></li>
               <li><a href="#!">About</a></li>
               <!-- <li class="divider"></li> -->
               <li><a href="#!">bbbb</a></li>
             </div>
         </ul>
       </div>  
             <nav class=" bg-white h-10 md:h-12   flex items-center justify-between">
               <img class="w-[120px] pt-2 md:w-[150px] pl-3" src="../../assets/images/logo.png" alt="Loading">
               <div class="nav-wrapper  shadow-green-600 mx-3 ">

               </div>
               <a href="#" data-target="slide-out"  class="sidenav-trigger hide-on-med-and-up"><i class="material-icons text-black ">menu</i></a>
<ul class="hide-on-small-only md:gap-4 lg:gap-6 flex pr-3">
 <!-- Home Menu Item -->
 <li class="navDark flex items-center">
   <a href="../../index.html" class="relative text-gray-600 text-[14px] hover:text-green-500 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out group">
     Home
     <!-- Bottom Border Span -->
     <span class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2 border-green-500 rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
   </a>
 </li>
 
 <!-- Product Menu Item -->
 <li class="navDark flex items-center">
   <a class="dropdown-trigger relative text-gray-600 text-[14px] hover:text-green-500 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out flex items-center group" href="#!" data-target="dropdown1">
     Product
     <!-- Bottom Border Span -->
     <span class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2 border-green-600 rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
     <i class="material-icons right ml-2">arrow_drop_down</i>
   </a>
 </li>
 
 <!-- Service Menu Item -->
 <li class="navDark flex items-center">
   <a class="dropdown-trigger relative text-gray-600 text-[14px] hover:text-green-500 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out flex items-center group" href="#!" data-target="dropdown2">
     Service
     <!-- Bottom Border Span -->
     <span class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2 border-green-600 rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
     <i class="material-icons right ml-2">arrow_drop_down</i>
   </a>
 </li>
 
 <!-- About Menu Item -->
 <li class="navDark flex items-center">
   <a class="dropdown-trigger relative text-gray-600 text-[14px] hover:text-green-500 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out flex items-center group" href="#!" data-target="dropdown3">
     About
     <!-- Bottom Border Span -->
     <span class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2 border-green-600 rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
     <i class="material-icons right ml-2">arrow_drop_down</i>
   </a>
 </li>
 
 <!-- Contact Menu Item -->
 <li class="navDark flex items-center">
   <a href="../../Pages/ContactUs.html" class="relative text-gray-600 text-[14px] hover:text-green-500 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out group">
     Contact
     <!-- Bottom Border Span -->
     <span class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2 border-green-600 rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
   </a>
 </li>
</ul>
     </nav>
        </div>
    </section>
               <section class="">                                                                      
                             <div id="slide-out" class="sidenav  rounded-md h-[700px] ">  
                             <div class="user-view relative">
                               <div class="background">
                                 <img src="../../assets/images/Cyber.jpg">
                               </div>
                               
                               <a href="#" class="sidenav-close "><p class="absolute left-14 top-2  w-8 h-8 bg-opacity-55 flex items-center rounded-full bg-blue-950"><i class="material-icons opacity-100 text-white  transform transition-transform duration-300 hover:scale-125 active:scale-90">navigate_before</i></p></a>
                               
                               <a href="#user"><img class="w-32 h-32  rounded-full" src="./assets/images/Techno Path.png"></a>
                               <a href="#name"><span class="white-text name">From Networks to Cybersecurity Mastery</span></a>
                               <!-- <a href="#email"><span class="white-text email">jGuardians of the Grid</span></a> -->
                             </div>
                             <div class="wrapper text-black">
                               <div class="hero-section">
                                     <div class="menu-btn">
                                           <p>Home</p>
                                     </div>
                               </div>
                   
                               <div class="menu">
                                     <!-- <div class="close-menu">
                                           <ion-icon name="close"></ion-icon>
                                     </div> -->
                   
                                     <div class="nav">
                                           <ul class="main-menu">
                                                 <li class="main-menu-item">
                                                       <a href="#">Home</a>
                                                 </li>
                   
                                                 <!-- <li class="main-menu-item">
                                                       <a href="#">Our Products &nbsp; <ion-icon name="add"></ion-icon></a>
                   
                                                       <ul class="submenu">
                                                             <li class="submenu-item">
                                                                   <a href="#">Fonts</a>
                                                             </li>
                                                             <li class="submenu-item">
                                                                   <a href="#">Mockups</a>
                                                             </li>
                                                             <li class="submenu-item">
                                                                   <a href="#">Presets</a>
                                                             </li>
                                                       </ul>
                                                 </li>
                   
                                                 <li class="main-menu-item">
                                                       <a href="#">Portfolio &nbsp; <ion-icon name="add"></ion-icon></a>
                   
                                                       <ul class="submenu">
                                                             <li class="submenu-item">
                                                                   <a href="#">Timeless flow</a>
                                                             </li>
                                                             <li class="submenu-item">
                                                                   <a href="#">Foretime</a>
                                                             </li>
                                                             <li class="submenu-item">
                                                                   <a href="#">Never again</a>
                                                             </li>
                                                             <li class="submenu-item">
                                                                   <a href="#">Departure</a>
                                                             </li>
                                                       </ul>
                                                 </li>
                   
                                                 <li class="main-menu-item">
                                                       <a href="#">Our Story</a>
                                                 </li>
                   
                                                 <li class="main-menu-item">
                                                       <a href="#">Contact &nbsp; <ion-icon name="add"></ion-icon></a>
                   
                                                       <ul class="submenu">
                                                             <li class="submenu-item">
                                                                   <a href="#">Call now</a>
                                                             </li>
                                                             <li class="submenu-item">
                                                                   <a href="#">Mail us</a>
                                                             </li>
                                                       </ul>
                                                 </li> -->
                                           </ul>
                                     </div>
                               </div>
                         </div>
                     </div>
                   </section> 
    `;
};

navbar();