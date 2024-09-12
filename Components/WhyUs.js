
const WhyUs = () => {
    const navbarContainer = document.getElementById("WhyUs");
    navbarContainer.innerHTML = WhyUsBar();
};

// const img = '../assets/logo.png';

const WhyUsBar = () => {
  return `
   <div>
    <section class="flex justify-center WhySec rounded-md textBanner   ">
      <div class="w-fit space-x-3 md:mt-36 m-9 h-fit bg-black bg-opacity-15 rounded-lg backdrop-blur-md shadow-lg text-white  flex flex-col md:flex-row   items-center justify-between p-4">
           <div>
               <img class="w-[400px]" src="./assets/images/whypic.jpg" alt="">
           </div>
           <div class="">
                  <p class="md:text-5xl text-2xl pt-4 md:pt-0">Why Techno Path</p>
                  
                  <div class="flex items-center gap-x-2 py-4">
                    <i class="material-icons "style="font-size: 46px;">touch_app</i>
                    <div>
                       <p class="text-[19px] font-bold">Innovative Tech</p>
                       <p class="text-[15px] font-thin">Leading-edge cybersecurity tools</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-x-2 py-4">
                    <i class="material-icons "style="font-size: 46px;">touch_app</i>
                    <div>
                       <p class="text-[19px] font-bold">Innovative Tech</p>
                       <p class="text-[15px] font-thin">Leading-edge cybersecurity tools</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-x-2 py-4">
                    <i class="material-icons "style="font-size: 46px;">touch_app</i>
                    <div>
                       <p class="text-[19px] font-bold">Innovative Tech</p>
                       <p class="text-[15px] font-thin">Leading-edge cybersecurity tools</p>
                    </div>
                  </div>
  
           </div>
      </div>  
     </section>
    </div>
    `;
};

WhyUs();