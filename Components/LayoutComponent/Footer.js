
const Footer = () => {
    const FooterContent = document.getElementById("Footer");
    FooterContent.innerHTML = FooterBar();
};

// const img = '../assets/logo.png';   

const FooterBar = () => {
  return `
  <section class="flex flex-col justify-center items-center footer ">
      <div class="flex flex-col items-center md:items-start md:flex-row gap-7 md:gap-20 lg:gap-32 text-xl pt-3 text-white bolder ">
        <div class="flex flex-col gap-4 justify-center">
          <img class="w-44" src="../../assets/images/logoWhite.png" alt="">
              <div class="flex justify-center pl-7 gap-3">
                <a href="" target="_blank" class="transform transition-transform duration-200 hover:scale-110 active:scale-100">
                  <img class="w-6 hidden md:block r cursor-pointer  rounded-lg" src="../../assets/images/FooterIcon/fb.svg" alt="Facebook">
                </a>
              
                <a href="" target="_blank" class="transform transition-transform duration-200 hover:scale-110 active:scale-100">
                  <img class="w-6 hidden md:block cursor-pointer  rounded-lg" src="../../assets/images/FooterIcon/linkedin.svg" alt="LinkedIn">
                </a>
              
                <a href="" target="_blank" class="transform transition-transform duration-200 hover:scale-110 active:scale-100">
                  <img class="w-6 hidden md:block cursor-pointer  rounded-lg" src="../../assets/images/FooterIcon/twit.svg" alt="Twitter">
                </a>
              </div>
          
        </div>
        <div>
          <p>Our Services</p>
           <div class="text-sm flex flex-col items-center md:items-start thinText py-4 space-y-2">
            <p>Data Security</p>
            <p>Website Security</p>
            <p>Document Security</p>
            <p>Database Security</p>
           </div>
        </div>
        <div class="flex flex-col md:items-start items-center">
          <p>Contacts</p>
          <div class="text-sm thinText flex flex-col items-center md:items-start justify-center py-4 gap-y-4">
            <div class="flex justify-center  items-center gap-x-3">
              <img class="w-6 hidden md:block" src="../../assets/images/FooterIcon/phone-solid.svg" alt="">
              <p>01999999999</p>
            </div>
            <div class="flex justify-center items-center gap-3">
              <img class="w-6 hidden md:block" src="../../assets/images/FooterIcon/mail.svg" alt="">
              <p>@mail.com</p>
            </div>
            <div class="flex justify-center items-center gap-3">
              <img class="w-6 hidden md:block" src="../../assets/images/FooterIcon/location-pin-solid.svg" alt="">
              <p>North Badda,Gulshan,Dhaka</p>
            </div>
          </div>
        </div>
        
      </div>
      <hr>
      <p class="text-white text-sm p-5">copyright <span class="bolder">Techno Path System</span>@2024 all right reserved</p>
  </section>
    
    `;
};

Footer();