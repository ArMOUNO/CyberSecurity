
const Banner = () => {
    const navbarContainer = document.getElementById("Banner");
    navbarContainer.innerHTML = BannerBar();
};

// const img = '../assets/logo.png';

const BannerBar = () => {
  return `
                    <section class="">                                                                      
                              <div id="slide-out" class="sidenav  rounded-md h-[700px] ">  
                              <div class="user-view relative">
                                <div class="background">
                                  <img src="./assets/images/Cyber.jpg">
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

Banner();