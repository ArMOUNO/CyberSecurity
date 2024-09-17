
const Banner = () => {
    const navbarContainer = document.getElementById("Banner");
    navbarContainer.innerHTML = BannerBar();
};

// const img = '../assets/logo.png';

const BannerBar = () => {
  return `       
   
<section class="bgImage tabScren flex  flex-col-reverse lg:pb-12 md:flex-row justify-center items-center ">

<div class=" flex flex-col  justify-end lg:pt-[200px] pb-10 md:justify-center  ">  
   <div class=" content z-30 font-bold text-blue-950  md:ml-8 ml-4 gap-y-4 md:gap-y-3 flex flex-col items-start ">
     <!-- ------------------- -->
     <!-- <div id="slider"></div> -->
      
    <p id="" class="thinText lg:text-6xl md:text-2xl text-xl bolder text-start">Comprehensive Network and Cyber Security Services to <span>Safeguard Your Business</span></p>
    <p id="" class="thinText lg:text-2xl md:text-2xl text-start text-lg thinText md:flex">Cutting-Edge Technology and Expertise to Secure Your Business from Modern Threats.</p>

   
   </div>
   <div class="md:ml-8 ml-4 rounded-lg md:pt-3 pt-8 flex gap-x-4">
     <a class="waves-effect waves-light btn  teal darken-1 ">More</a>
     <a class="waves-effect waves-light btn  teal darken-1">Contact US</a>
   </div>            
</div>
<img id="LargePlusImg" class="z-10  animate-scale-up md:block md:w-[350px]  lg:w-[500px]" src="./assets/images/heropic.png" alt="">
</section>     


    `;
};

Banner();