const navbar = () => {
  const navbarContent = document.getElementById("navbar");
  navbarContent.innerHTML = navbarBar();
};

// const img = '../assets/logo.png';
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to apply the active class from local storage
  const applyActiveLinkFromStorage = () => {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      navLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        
        // Compare the stored link with the current href
        if (currentHref === activeLink) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  // Add click event to each link and store the link's href in local storage
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const fullHref = link.getAttribute('href');
      localStorage.setItem('activeLink', fullHref);
      applyActiveLinkFromStorage();
    });
  });

  // Apply active link on page load
  applyActiveLinkFromStorage();
});


const navbarBar = () => {
  return `
      
      <section class="">
        <section class=" shadow-lg">
          <div class="">
            <!-- Dropdown Structure -->
            <div class="dropdown ">
      
              <ul id="dropdown1" class="dropdown-content">
                <div class="">
                  <li><a href="#!">Cisco</a></li>
                  <li><a href="#!">Fortinet</a></li>
                  <li><a href="#!">Sophos</a></li>
                  <li><a href="#!">MicroSoft</a></li>
                  <li><a href="#!">Arcon</a></li>
                  <li><a href="#!">Dell</a></li>
                  <li><a href="#!">NetApp</a></li>
                </div>
              </ul>
              <ul id="dropdown2" class="dropdown-content">
                <div>
                  <li><a href="#!">NetWork and Security</a></li>
                  <li><a href="#!">Cyber Security</a></li>
                  <li><a href="#!">Cloud Security</a></li>
                  <li><a href="#!">Cloud Service</a></li>
                  <!-- <li class="divider">IOT</li> -->
                  <li><a href="#!">Maintenance Service</a></li>
                </div>
              </ul>
              <ul id="dropdown3" class="dropdown-content">
                <div>
                  <li><a href="#!">Cisco</a></li>
                  <li><a href="#!">Fortinet</a></li>
                  <li><a href="#!">Sophos</a></li>
                  <li><a href="#!">MicroSoft</a></li>
                  <li><a href="#!">Arcon</a></li>
                  <li><a href="#!">Dell</a></li>
                  <li><a href="#!">NetApp</a></li>
                </div>
              </ul>
              <ul id="dropdown4" class="dropdown-content">
                <div>
                  <li><a href="#!">NetWork and Security</a></li>
                  <li><a href="#!">Cyber Security</a></li>
                  <li><a href="#!">Cloud Security</a></li>
                  <li><a href="#!">Cloud Service</a></li>
                  <!-- <li class="divider">IOT</li> -->
                  <li><a href="#!">Maintenance Service</a></li>
                </div>
              </ul>
            </div>
            <nav class=" bg-white h-10 md:h-12   flex items-center justify-between">
            <a href="../../index.html"> <img class="w-[100px] cursor-pointer pt-2 md:w-[140px] pl-3" src="../../assets/images/Techv3.png" alt="Loading"></a>
              <div class="nav-wrapper   mx-3 ">
      
              </div>
              <a href="#" data-target="slide-out" class="sidenav-trigger hide-on-med-and-up"><i
                  class="material-icons text-black ">menu</i></a>
              <ul class="hide-on-small-only md:gap-4 lg:gap-6 flex pr-3">
                <!-- Home Menu Item -->
                <li class="navDark flex items-center" onClick="">
                  <a href="../../index.html"
                    class="relative  nav-link text-gray-600 text-[14px] hover:text-cyan-700 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out group">
                    Home
                    <!-- Bottom Border Span -->
                    <span
                      class="absolute  bottom-[13px]  h-[50px] left-0 right-0 -z-10 border-b-2  rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                  </a>
                </li>
      
                <!-- Product Menu Item -->
                <li class="navDark flex items-center">
                  <a class="dropdown-trigger relative  nav-link  text-gray-600 text-[14px] hover:text-cyan-700 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out flex items-center group"
                    href="#!" data-target="dropdown1">
                    Product
                    <!-- Bottom Border Span -->
                    <span
                      class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2  rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                    <i class="material-icons right ml-2">arrow_drop_down</i>
                  </a>
                </li>
      
                <!-- Service Menu Item -->
                <li class="navDark flex items-center">
                  <a class="dropdown-trigger relative  nav-link  text-gray-600 text-[14px] hover:text-cyan-700 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out flex items-center group"
                    href="#!" data-target="dropdown2">
                    Service
                    <!-- Bottom Border Span -->
                    <span
                      class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2  rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                    <i class="material-icons right ml-2">arrow_drop_down</i>
                  </a>
                </li>
      
                <!-- About Menu Item -->
                <li class="navDark flex items-center">
                  <a class=" text-gray-600 text-[14px] nav-link hover:text-cyan-700 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out flex items-center group"
                    href="../../Pages/aboutUS.html">
                    About
                    <!-- Bottom Border Span -->
                    <span
                      class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2  rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
      
                  </a>
                </li>
      
                <!-- Contact Menu Item -->
                <li class="navDark flex items-center">
                  <a href="../../Pages/ContactUs.html"
                    class="relative  nav-link  text-gray-600 text-[14px] hover:text-cyan-700 transform hover:scale-105 font-bold transition-all duration-300 ease-in-out group">
                    Contact
                    <!-- Bottom Border Span -->
                    <span
                      class="absolute bottom-[13px] h-[50px] left-0 right-0 -z-10 border-b-2  rounded-md w-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section class="">
          <div id="slide-out" class="sidenav  rounded-md h-[600px] ">
            <div class="user-view relative  nav-link ">
              <div class="background">
                <img src="../../assets/images/Cyber.jpg">
              </div>
      
              <a href="#" class="sidenav-close ">
                <p class="absolute left-14 top-2  w-8 h-8 bg-opacity-55 flex items-center rounded-full bg-blue-950"><i
                    class="material-icons opacity-100 text-white  transform transition-transform duration-300 hover:scale-125 >navigate_before</i>
                </p>
              </a>
      
              <a href="#user"><img class="w-32 h-32  rounded-full" src="./assets/images/Techno Path.png"></a>
              <a href="#name"><span class="white-text name">From Networks to Cybersecurity Mastery</span></a>
              <!-- <a href="#email"><span class="white-text email">jGuardians of the Grid</span></a> -->
            </div>
            <div class=" text-black">
              <div class="">
                <div class="">
                 
                <div class=" ">
                <ul>
                  <li>
                    <a href="../index.html">Home</a>
                  </li>
                  <li class="dropdown-trigger" data-target="dropdown3">
                    <a>Product</a>
                  </li>
                  <li class="dropdown-trigger" data-target="dropdown4">
                    <a>Service</a>
                  </li>
                  <li>
                    <a href="../Pages/aboutUS.html">About</a>
                  </li>
                  <li>
                    <a href="../Pages/ContactUs.html">Contact</a>
                  </li>
                </ul>

                   
                </div>
                </div>
              </div>
      
              <div class="menu">
                <!-- <div class="close-menu">
                                               <ion-icon name="close"></ion-icon>
                                         </div> -->
      
              </div>
            </div>
          </div>
        </section>
        `;
};

navbar();